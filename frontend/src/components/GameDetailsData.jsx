import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../styles/components/details.module.css';
import axios from "axios";
import { Award, DollarSign, Percent, ShoppingCart, ExternalLink, Tv} from 'lucide-react';
import YouTubeEmbed from './Youtube';
import  {CustomSpinnerDots} from '../components/Spinner';

export default function GameDataSection({game, setLoading}) {

const { id: gameId, igdbId: gameigdbId, name: gameName, originalPlatform, platforms, developerId, genres } = game;

  const [recordData, setRecordData] = useState(null);
  const [recordDataAlt, setRecordDataAlt] = useState(null);
  const [recordName, setName] = useState(null);
  const [recordNameAlt, setNameAlt] = useState(null);

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
          `${import.meta.env.VITE_API_URL}/home/details/data`, { gameId, gameigdbId, gameName, originalPlatform }
        );
      res.data.game.worldRecord ? setRecordData(res.data.game.worldRecord.data) : null;
      res.data.game.worldRecordAlt ? setRecordDataAlt(res.data.game.worldRecordAlt.data) : null;
      res.data.game.worldRecord ? setName(res.data.game.worldRecord.recordName) : null;
      res.data.game.worldRecordAlt ? setNameAlt(res.data.game.worldRecordAlt.recordName) : null;
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

   const navigate = useNavigate();

   const handleNavigate = (id) => {
      setLoading(true);
      // keeps scrolled at top upon user nav back pages
      window.scrollTo({top: 0});
      navigate(`/home/details/${id}`, {behavior: "smooth"} );
   }



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
      <div className={styles.relatedVideosContainer}>
      </div>
      <div className={styles.recordscontainer}>
        {gameVideos && gameVideos.length > 0 && (
            <div className={styles.recorditem}>
              <div className={styles.recordsinnercard}>
                <div className={styles.videoname}>
                  <Tv className={styles.icons}/>
                  <h3>{gameVideos[videosIndex].name}</h3>
                </div>
                <div key={gameVideos[videosIndex].id} className={styles.recordvideocontainer}>
                  <YouTubeEmbed url={null} title={gameVideos[videosIndex].name} urlId={gameVideos[videosIndex].video_id} />
                </div>
              </div>
            </div>

        )}
        {recordData || recordDataAlt ? (
          <h2 className={styles.relatedMediaHeader}>Speedrun Data</h2>
        ) : <></>}
        {recordData && (
          recordData.map((run) => (
            runRecordSection(run, gameName, recordName)
         ))
        )}

        {recordDataAlt && (
          recordDataAlt.map((run) => (
            runRecordSection(run, gameName, recordNameAlt)
         ))
        )}
      </div>

      {gameEbayData ? (

        <div className={styles.ebaycontainer}>
          <h2 className={styles.relatedMediaHeader}>Related Listings</h2>
          {gameEbayData.map((post) => (
            ebayListingSection(post)
          ))}
        </div>
      ) : (
        <></>
      )}
      {similarGames && similarGames.length > 0 && (
        <div className={styles.relatedgamescontainer}>
          <h2 className={styles.relatedMediaHeader}>Games you may like </h2>
          <div className={styles.relatedgamesflex}>
            {similarGames.map((relatedGame) => (
              ( relatedGame.coverUrl && ( 
              <div key={relatedGame.id} className={styles.relatedgameitem}>
                  <div className={styles.relatedgamelink}>
                    <button className={styles.coverBtn} onClick={() => handleNavigate(relatedGame.id)}>
                      <img src={relatedGame.coverUrl} className={styles.cover} width="264" height="374" />
                    </button>
                  </div>
                </div>
              ))
            ))}
          </div>
        </div>
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
                    onClick={() => handleNavigate(franchiseGame.id)}
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


      </>  
  )
}

function runRecordSection(run, gameName, runType) {

    const isYouTube =
      run?.videoLink?.includes("youtube.com") ||
      run?.videoLink?.includes("youtu.be");

  return (
    <>
        <div className={styles.recorditem} key={run.runId}>
          <div className={styles.recordinfo}>
            <div className={styles.award}>
                <div className={styles.awardbadgepillcontainer}>
                  <div className={styles.awardbadgetext}>1st Place</div>
                  <Award fill='gold' color='gold' className={styles.icons}/>
                </div>
                {runType && (
                  <h3>
                    {runType}
                  </h3>
                )}

            </div>
              {run.username && (
                <div className={styles.recordusername}>
                  <span>Speedrunner - </span><div>{run?.username} </div>
                </div>
              )}
            <div className={styles.recordtime}>
              <div className={styles.recordsubtxt}>{run?.recordName} Completed in</div>
              Record Time - {run.timeConverted}
            </div>
          </div>
          <div className={isYouTube ? styles.recordvideocontaineryoutube : styles.recordvideocontainertwitch}> 
            <YouTubeEmbed url={run.videoLink} title={run.recordName}/>
            <div className={styles.recordlink}>
              <a href={run?.runLink}
                target="_blank"
                rel="noopener noreferrer">
                <button className={styles.recordBtn}> Explore <b>{gameName} </b> Speedrun Leaderboards 
                  <ExternalLink />
                </button>
                </a>
            </div>
          </div>

        </div>
    </>
  )
}

function ebayListingSection(post) {


  return (
    <>
      <div className={styles.ebayinnercontainer} key={post.itemId}>
        <div className={styles.ebaytitlecontainer}>
          <h2 className={styles.ebaytitle}>{post.title}</h2>  
        </div>
          <div className={styles.ebayinfoinnercontainer}>
            <div className={styles.ebaypricecontainer}>
              <div className={styles.sellertitle}>Price Information</div>
              <div className={styles.ebaycondition}><span>Condition: </span>{post.condition}</div>
                
              <div className={styles.pricecontainer}>
                <div className={styles.dollar}><DollarSign className={styles.iconsDollar}/></div>  
                <div className={styles.value}>{post.price.value}</div> 
                <div className={styles.currency}>{post.price.currency}</div>
              </div>
            </div>
            <div className={styles.sellerinfocontainer}>
              <div className={styles.sellertitle}>Seller Information</div>
              <div className={styles.sellername}><span>Username: </span>{post?.seller?.username}</div>
              <div className={styles.sellerrating}><span>Seller Rating: </span>{post?.seller?.feedbackPercentage}<Percent className={styles.iconsPercent}/></div>
            </div>
        </div>
        <div className={styles.ebaylink}>                    
            <a
              href={post?.itemWebUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <ShoppingCart className={styles.icons}/>
                  View on Ebay
              </button>
            </a>
        </div>
        <div className={styles.ebayinfocontainer}>

        <div className={styles.ebayimg}>
          <img src={post.image?.imageUrl}/>
        </div>
      </div>
    </div>

    </>
  )
};