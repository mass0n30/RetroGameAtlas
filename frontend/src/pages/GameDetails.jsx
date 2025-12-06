import { useEffect, useState, useRef } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import styles from '../styles/components/details.module.css';
import axios from "axios";
import normalizeGameData from '../helpers';
import CustomSpinner from '../components/Spinner';
import YouTubeEmbed from '../components/Youtube';
import {Heart} from 'lucide-react';
import SocialsShare from '../components/ShareSocials';


function GameDetails() {

const {gameId} = useParams(); 
const [loading, setLoading] = useState(true);
const [gameDetails, setGameDetails] = useState(null);
const [recordData, setRecordData] = useState(null);
const [recordDataAlt, setRecordDataAlt] = useState(null);
const [gameEbayData, setGameEbayData] = useState(null);
const [screenshots, setScreenshots] = useState([]);
const [saved, setSaved] = useState(false);
const [currentIndex, setCurrentIndex] = useState(0);


const {user, userProfile, SetUserProfile} = useOutletContext();
const token = localStorage.getItem('usertoken');

useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //spinner upon mount with delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer,); 
  } ,[loading, setLoading]);

  useEffect(() => {

  }, [saved])


useEffect(() => {
  async function fetchDetails() {
    try {
      const res = await axios.get(`http://localhost:5000/home/details/${gameId}`);
      setGameDetails(res.data.game.gameDetails);
      res.data.game.worldRecord ? setRecordData(res.data.game.worldRecord) : null;
      res.data.game.worldRecordAlt ? setRecordDataAlt(res.data.game.worldRecordAlt) : null;
      res.data.game.gameEbayData ? setGameEbayData(res.data.game.gameEbayData) : null;
      res.data.game.normalizedScreenshots ? setScreenshots(res.data.game.normalizedScreenshots) : null;

    } catch (err) {
      console.error(err);
    } 
  }
  fetchDetails();
}, [gameId]);

const handleSaveGame = async () => {
  try {
    const response = await fetch(`http://localhost:5000/home/details/${gameId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gameDetails)
    });
    if (response.status === 200) {
      alert('Updating user games success');
    } 

    // updating client side userProfile save state games
    const result = await response.json();
    if (result) {
        SetUserProfile(result.updatedProfile)
    }
    saved ? setSaved(false) : setSaved(true);

  } catch (error) {
    console.error('Error updating user games', error);
  }

}

// Admin Route
const handleDeleteGame = async () => {
  try {
    const response = await axios.delete(`http://localhost:5000/home/details/${gameId}`);
    if (response.status === 200) {
      alert('deleted successfully');
    }

  } catch (error) {
    console.error('Error:', error);
  }
}

if (loading) {
  return (
    <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center", marginTop: "2rem" }}>
      <CustomSpinner/>
    </div>
  )
}
  if (gameDetails) {
  const game = normalizeGameData(gameDetails);
  return (
   <>
   <div className={styles.outercontainer}>
      <div className={styles.detailscontainer}>
      <div className={styles.savecontainer}>
        <button onClick={async () => handleSaveGame()} className={styles.likeBtn}>
          <Heart fill={saved ? "red" : "white"} size={32}/>
        </button>
      </div>
        <div className={styles.covercontainer}>
          <div className={styles.imgcontianer}>
            {game.cover ? (<img src={game.cover} className={styles.cover} />) : ( <></> )}
          </div>

          <div>
            {gameDetails?.originalPlatform ? (
              gameDetails.originalPlatform
            ) : (<></> )}
          </div>

          
          {
            gameDetails?.developer?.logoUrl ? (
              <div>
                <img src={gameDetails.developer.logoUrl} />
              </div>
            ) : (
              <></>
            )
          }
            <div>
              {gameDetails?.developer?.name ? (
                gameDetails.developer.name
              ) : (
                <></> 
              )
            }
          </div>
          <SocialsShare/>
        </div> 
        <div className={styles.datacontainer}>
          <div className={styles.screenshotscontainer}>
            {screenshots.length > 0 ? (
              <div className={styles.carousel}>
                <button
                  className={styles.arrow}
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      prev === 0 ? screenshots.length - 1 : prev - 1
                    )
                  }
                >
                  ‹
                </button>

                <img
                  src={`https:${screenshots[currentIndex].url}`}
                  alt={`${game.name} screenshot`}
                  className={styles.screenshot}
                />

                <button
                  className={styles.arrow}
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      prev === screenshots.length - 1 ? 0 : prev + 1
                    )
                  }
                >
                  ›
                </button>
              </div>
            ) : (
              <p>No screenshots available.</p>
            )}
          </div>
              
          <div>

            {game.summary ? (
              <div className={styles.summarycontainer}> {game.summary} </div>
              
            ) : (
                <> </>
            )}
          </div>
        </div>
      </div>


        <div className={styles.storylinecontainer}> 
          {game.storyline ? (
              game.storyline
          ) : (
              <> </>
          )}

        </div>

        {gameEbayData ? (
          <div className={styles.ebaycontainer}>
            {gameEbayData.map((post) => (
              <div className={styles.ebayinnercontainer} key={post.itemId}>
                {post.title}
                <div className={styles.ebaycondition}>{post.condition}</div>
                <div className={styles.ebayprice}>
                  {post.price.currency} {post.price.value}
                </div>
                <div className={styles.ebaylink}>
                  <a
                    href={post.itemWebUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Ebay
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}

        <div className={styles.recordscontainer}>
          {recordData? (
          <div className={styles.recorditem}>
            <h1>
              {recordData.recordName}
            </h1>
            <div className={styles.recordtime}>
              {recordData.timeConverted}
            </div>
            <div className={styles.recordvideocontainer}> 
              <YouTubeEmbed url={recordData.videoLink} title={recordData.recordName}/>
            </div>
            <div className={styles.recordlink}>
              <a href={'recordData.runLink'}>{recordData.runLink}</a>
            </div>
          </div>
  
          ) : (
            <></>
          )}

          {recordDataAlt? (
          <div className={styles.recorditem}>
            <h1>
              {recordDataAlt.recordName}
            </h1>
            <div className={styles.recordtime}>
              {recordDataAlt.timeConverted}
            </div>
            <div className={styles.recordvideocontainer}> 
              <YouTubeEmbed url={recordDataAlt.videoLink} title={recordDataAlt.recordName}/>
            </div>
            <div className={styles.recordlink}>
              <a href={'recordDataAlt.runLink'}>{recordDataAlt.runLink}</a>
            </div>
          </div>
  
          ) : (
            <></>
          )}

        </div>

        { user.admin ? (
          <div className={styles.admindeletecontainer}>
            <button className={styles.deletebutton} onClick={async () => handleDeleteGame()}>Delete Game</button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
   );
  }

}

export default GameDetails;