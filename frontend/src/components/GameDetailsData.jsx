import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../styles/components/details.module.css';
import axios from "axios";
import { Award, DollarSign, Percent, ShoppingCart, ExternalLink} from 'lucide-react';
import YouTubeEmbed from './Youtube';
import  {CustomSpinnerDots} from '../components/Spinner';

export default function GameDataSection({game, setLoading}) {

const { id: gameId, igdbId: gameigdbId, name: gameName, originalPlatform, platforms, developerId, genres } = game;

  const [recordData, setRecordData] = useState(null);
  const [recordDataAlt, setRecordDataAlt] = useState(null);
  const [gameEbayData, setGameEbayData] = useState(null);
  const [franchiseGames, setFranchiseGames] = useState(null);
  const [similarGames, setSimilarGames] = useState(null);
  const [loading, setLoadingData] = useState(true);


  useEffect(() => {
    async function fetchDetails() {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/home/details/data`, { gameId, gameigdbId, gameName, originalPlatform }
        );
      res.data.game.worldRecord ? setRecordData(res.data.game.worldRecord) : null;
      res.data.game.worldRecordAlt ? setRecordDataAlt(res.data.game.worldRecordAlt) : null;
      res.data.game.gameEbayData ? setGameEbayData(res.data.game.gameEbayData) : null;
      res.data.game.relatedGames.franchiseGames ? setFranchiseGames(res.data.game.relatedGames.franchiseGames) : null;
      res.data.game.relatedGames.similarGames ? setSimilarGames(res.data.game.relatedGames.similarGames) : null;
      console.log(res.data.game.relatedGames, 'related games response');

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
      navigate(`/home/details/${id}` );
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
        <div className={styles.recordscontainer}>
          {recordData || recordDataAlt ? (
            <h2 className={styles.relatedMediaHeader}>Speedrun Data</h2>
          ) : <></>}
          {recordData && (
            
          <div className={styles.recorditem}>
            <div className={styles.recordinfo}>
              <div className={styles.award}>
                <Award fill='gold' color='gold' className={styles.icons}/>
                  <h3>
                    {recordData.recordName}
                  </h3>
              </div>
                {recordData.username && (
                  <div className={styles.recordusername}>
                    <span>Speedrunner - </span><div>{recordData.username} </div>
                  </div>
                )}
              <div className={styles.recordtime}>
                Record Time - {recordData.timeConverted}
              </div>
            </div>
            <div className={styles.recordvideocontainer}> 
              <YouTubeEmbed url={recordData.videoLink} title={recordData.recordName}/>
            </div>
            <div className={styles.recordlink}>
              <a href={recordData?.runLink}
                target="_blank"
                rel="noopener noreferrer">
                <button className={styles.recordBtn}> View <b>{gameName} {recordData.recordName}</b> Speedrun Data 
                  <ExternalLink />
                </button>
                </a>
            </div>
          </div>
  
          )}

        {recordDataAlt && (
          <div className={styles.recorditem}>

            <div className={styles.recordinfo}>
              <div className={styles.award}>
                <Award fill='gold' color='gold' className={styles.icons}/>
                <h3>
                  {recordDataAlt.recordName}
                </h3>
              </div>
                {recordDataAlt.username && (
                  <div className={styles.recordusername}>
                    <span>Speedrunner - </span><div>{recordDataAlt.username} </div>
                  </div>
                )}
              <div className={styles.recordtime}>
                Record Time - {recordDataAlt.timeConverted}
              </div>
            </div>

            <div className={styles.recordvideocontainer}> 
              <YouTubeEmbed
                url={recordDataAlt.videoLink}
                title={recordDataAlt.recordName}
              />
            </div>

            <div className={styles.recordlink}>
              <a href={recordDataAlt?.runLink}
                target="_blank"
                rel="noopener noreferrer">
                <button className={styles.recordBtn}> View <b>{gameName} {recordDataAlt.recordName}</b> Speedrun Data 
                  <ExternalLink />
                </button>
                </a>
            </div>

          </div>
        )}
        </div>

        {gameEbayData ? (
          <div className={styles.ebaycontainer}>
            {gameEbayData.map((post) => (
              <div className={styles.ebayinnercontainer} key={post.itemId}>
                <div className={styles.ebaytitlecontainer}>
                  <h2 className={styles.ebaytitle}>{post.title}</h2>  
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
                  <div className={styles.ebayinfoinnercontainer}>
                    <div className={styles.ebaypricecontianer}>
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
                <div className={styles.ebayimg}>
                  <img src={post.image?.imageUrl}/>
                </div>
              </div>
              </div>
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