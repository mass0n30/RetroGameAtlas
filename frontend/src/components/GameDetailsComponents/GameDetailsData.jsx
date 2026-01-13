import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/components/details.module.css';
import axios from "axios";
import { Award, DollarSign, Percent, ShoppingCart, ChevronLeft, ChevronRight, Tv} from 'lucide-react';
import YouTubeEmbed from './Youtube';
import  {CustomSpinnerDots} from '../Spinner';
import  GameDetailsRunSection  from './GameDetailsRunSection';

export default function GameDataSection({game, setLoading, setActiveImage, setCurrentIndex}) {

const { id: gameId, igdbId: gameigdbId, name: gameName, originalPlatform, platforms, developer, genres, ageRating } = game;

  const [recordData, setRecordData] = useState(null);
  const [gameEbayData, setGameEbayData] = useState(null);
  const [franchiseGames, setFranchiseGames] = useState(null);
  const [similarGames, setSimilarGames] = useState(null);
  const [loading, setLoadingData] = useState(true);
  const [gameVideos, setGameVideos] = useState(null);
  const [videosIndex, setVideosIndex] = useState(0);


  useEffect(() => {
    async function fetchDetails() {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/home/details/data`, { gameId, gameigdbId, gameName, originalPlatform, platforms, developer, genres, ageRating }
        );
      res.data.game.worldRecord ? setRecordData(res.data.game.worldRecord.allTop3Data) : null;
      res.data.game.gameEbayData ? setGameEbayData(res.data.game.gameEbayData) : null;
      res.data.game.relatedGames.franchiseGames ? setFranchiseGames(res.data.game.relatedGames.franchiseGames) : null;
      res.data.game.relatedGames.similarGames ? setSimilarGames(res.data.game.relatedGames.similarGames) : null;
      res.data.game.relatedGames.gameVideos ? setGameVideos(res.data.game.relatedGames.gameVideos) : null;

    } catch (err) {
      console.error(err);
    } finally {
      setLoadingData(false);
    }
  }
  fetchDetails();
}, []);

/// PROCESS OF REPLACING ID WITH IGDBID FOR NAVIGATION
 
  const navigate = useNavigate();

  const handleNavigate = (igdbId) => {
    setLoading(true);
    setCurrentIndex(0);
    // keeps scrolled at top upon user nav back pages
    window.scrollTo({top: 0});
    navigate(`/home/details/${igdbId}`, {behavior: "smooth"} );
  };

  if (loading) {
    return( 
      <div className={styles.recordsloadercontainer}>
        <span className={styles.loadingtxt}>Loading</span>
        <CustomSpinnerDots/>
      </div>
    )
  };

  return (
    <>
    <div className={styles.recordscontainer}>
      {gameVideos && gameVideos.length > 0 && (
          <div className={styles.recorditem}>
              <div className={styles.videoname}>
                <Tv className={styles.icons}/>
                <h3>{gameVideos[videosIndex].name}</h3>
              </div>
              <div key={gameVideos[videosIndex].id} className={styles.recordvideocontainer}>
              { gameVideos.length > 1 && (
                <>
                  <button
                    className={styles.arrowL}
                    onClick={() =>
                      setVideosIndex((prev) =>
                        prev === 0 ? gameVideos.length - 1 : prev - 1
                      )
                    }
                  >
                  <ChevronLeft className={styles.icons} color="#E8F1F2" />
                  </button>

                  <button
                    className={styles.arrowR}
                    onClick={() =>
                      setVideosIndex((prev) =>
                        prev === gameVideos.length - 1 ? 0 : prev + 1
                      )
                    }
                  >
                  <ChevronRight className={styles.icons} color="#E8F1F2" />

                  </button>
                </>
              )}
                <YouTubeEmbed url={null} title={gameVideos[videosIndex].name} urlId={gameVideos[videosIndex].video_id} />
              </div>
            </div>
        )}
        {recordData && (
          <>
            <h2 className={styles.relatedMediaHeader}>Speedrun Data</h2>
            <div className={styles.recordsectionscontainer}>
              <GameDetailsRunSection recordData={recordData} gameName={gameName} />
            </div>
          </>
        )}
      </div>

      {gameEbayData ? (

        <div className={styles.ebaycontainer}>
          <h2 className={styles.relatedMediaHeader}>Related Listings</h2>
          {gameEbayData.map((post, index) => (
            ebayListingSection({post, setActiveImage, index})
          ))}
        </div>
      ) : (
        <></>
      )}

      {franchiseGames && franchiseGames.length > 0 && (
        <div className={styles.relatedgamescontainer}>
          <h2 className={styles.relatedMediaHeader}>Franchise Games</h2>
          <div className={styles.relatedgamesflex}>
            {franchiseGames.map((franchiseGame) => (
              ( franchiseGame.cover?.url || franchiseGame.coverUrl ) && (
              <div key={franchiseGame.id} className={styles.relatedgameitem}>
                <div className={styles.relatedgamelink}>
                  <button 
                    onClick={() => handleNavigate(franchiseGame.igdbId)}
                    className={styles.coverBtn} 
                  >
                    <img 
                      src={franchiseGame.cover?.url || franchiseGame.coverUrl} 
                      alt={franchiseGame.name} 
                      className={styles.cover} 
                      width="264" 
                      height="374" 
                    />
                  </button>
                </div>
              </div>
              )
            ))}
          </div>
        </div>
      )}

      {similarGames && similarGames.length > 0 && (
        <div className={styles.relatedgamescontainer}>
          <h2 className={styles.relatedMediaHeader}>Games you may like </h2>
          <div className={styles.relatedgamesflex}>
            {similarGames.map((relatedGame) => (
              ( relatedGame.coverUrl && ( 
              <div key={relatedGame.id} className={styles.relatedgameitem}>
                  <div className={styles.relatedgamelink}>
                    <button className={styles.coverBtn} onClick={() => handleNavigate(relatedGame.igdbId)}>
                      <img src={relatedGame.coverUrl} className={styles.cover} width="264" height="374" />
                    </button>
                  </div>
                </div>
              ))
            ))}
          </div>
        </div>
      )}
      </>  
  )
}

function ebayListingSection({post, setActiveImage, index}) {

  return (
    <>
      <div className={styles.ebayinnercontainer} key={post.itemId}>
        <div className={styles.ebaylink}>
          <div>
            <a
              href={post?.itemWebUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <ShoppingCart className={styles.icons}/>
              </button>
            </a>
          </div>                    

        </div>
        <div className={styles.ebayinfocontainer}>
          <div className={styles.ebaytitlecontainer}>
            <h2 className={styles.ebaytitle}>{post.title}</h2>  
          </div>
          <div className={styles.ebayinfoinnercontainer}>
            
            <div className={styles.ebaypricecontainer}>
              <div className={styles.sellertitle}>Price Information</div>
                
              <div className={styles.pricecontainer}>
                <div className={styles.dollar}><DollarSign className={styles.iconsDollar}/></div>  
                <div className={styles.value}>{post.price.value}</div> 
                <div className={styles.currency}>{post.price.currency}</div>
              </div>
              <div className={styles.ebaycondition}>{post.condition}</div>
            </div>
            <div className={styles.sellerinfocontainer}>
              <div className={styles.sellertitle}>Seller Information</div>
              <div className={styles.sellername}><span>Username: </span>{post?.seller?.username}</div>
              <div className={styles.sellerrating}><span>Seller Rating: </span>{post?.seller?.feedbackPercentage}<Percent className={styles.iconsPercent}/></div>
            </div>
          </div>
        </div>
        <div className={styles.ebayimgtitlecontainer} >
          <div className={styles.ebayimgcontainer} >
            <img src={post.image?.imageUrl} className={styles.ebayimg} onClick={() => setActiveImage(post.image?.imageUrl)}/>
          </div>
        </div>
    </div>

    </>
  )
};