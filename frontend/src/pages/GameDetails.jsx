import { useEffect, useState, useRef } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import styles from '../styles/components/details.module.css';
import axios from "axios";
import normalizeGameData from '../helpers';
import CustomSpinner from '../components/Spinner';
import YouTubeEmbed from '../components/Youtube';
import {Heart, ArrowBigLeftDash, ArrowBigRightDash} from 'lucide-react';
import SocialsShare from '../components/ShareSocials';
import SnackBarAlert from '../components/reactMUI/Alerts';
import GameDetailsSkeleton from '../components/Skeleton';

function GameDetails() {

const {gameId} = useParams(); 
const [loading, setLoading] = useState(true);
const [gameDetails, setGameDetails] = useState(null);
const [recordData, setRecordData] = useState(null);
const [recordDataAlt, setRecordDataAlt] = useState(null);
const [gameEbayData, setGameEbayData] = useState(null);
const [screenshots, setScreenshots] = useState([]);
const [saved, setSaved] = useState(false);
const [alert, setAlert] = useState(false);
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
    }, 5000);

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

      // color fav heart if in savedGames
      userProfile?.savedGames?.forEach((game) => {
        if (res.data.game.gameDetails.igdbId == game.igdbId) {
          setSaved(true);
        }
      });

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
      saved ? setSaved(false) : setSaved(true);
      setAlert(true);
    } 

    // updating client side userProfile save state games
    const result = await response.json();
    if (result) {
      SetUserProfile(result.updatedProfile)
    }

    return (() => {
      setAlert(false);
    });

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
    <>
    <div className={styles.loaders}>
      <CustomSpinner/>
    </div>
      <GameDetailsSkeleton/>
    </>

  )
}
  if (gameDetails) {
  const game = normalizeGameData(gameDetails);
  return (
   <>
   <div className={styles.outercontainer}>
        <SnackBarAlert open={alert} setOpen={setAlert} status={saved} msg={saved ? 'Saved to Games' : 'Removed from Games'}/>
        <div className={styles.savecontainer}>
          <button onClick={async () => handleSaveGame()} className={styles.likeBtn}>
            <Heart fill={saved ? "red" : "white"} size={50}/>
          </button>
        </div>
      <div className={styles.detailscontainer}>

        <div className={styles.covercontainer}>
          <div className={styles.uppercovercontainer}>
            <div className={styles.imgcontainer}>
              {game.cover ? (
                <img src={game.cover} className={styles.cover}
                />) : ( <></> )}
            </div>
          </div>
          <div className={styles.lowercovercontainer}>
            <div className={styles.platformcontainer}>
              <div>
                {gameDetails?.originalPlatform ? (
                  gameDetails.originalPlatform
                ) : (<></> )}
              </div>
            </div>

            {
              gameDetails?.developer?.logoUrl ? (
                <div className={styles.developerlogo}>
                  <img src={gameDetails.developer.logoUrl} />
                </div>
              ) : (
                <></>
              )
            }
              <div className={styles.developername}>
                {gameDetails?.developer?.name ? (
                  gameDetails.developer.name
                ) : (
                  <></> 
                )
              }
            </div>
            <div className={styles.socialshares}>
              <SocialsShare/>
            </div>

          </div>

        </div> 
        <div className={styles.datacontainer}>
          <div className={styles.screenshotscontainer}>
            {screenshots.length > 0 ? (
              <div className={styles.carousel}>
                <button
                  className={styles.arrowL}
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      prev === 0 ? screenshots.length - 1 : prev - 1
                    )
                  }
                >
                <ArrowBigLeftDash size={32} color="#E8F1F2" />
                </button>
                <div className={styles.screenshotcarouselcontainer}> 
                  <img
                    src={`https:${screenshots[currentIndex].url}`}
                    alt={`${game.name} screenshot`}
                    className={styles.screenshot}
                  />
                </div>

                <button
                  className={styles.arrowR}
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      prev === screenshots.length - 1 ? 0 : prev + 1
                    )
                  }
                >
                <ArrowBigRightDash size={32} color="#E8F1F2" />

                </button>
              </div>
            ) : (
              <p>No screenshots available.</p>
            )}
          </div>
          {game.summary ? (
            <div className={styles.summarycontainer}> 
              <p>
                { game.summary} 
              </p>
            </div> 
            ) : (
                <> </>
            )}
            </div>
          </div>
      {game.storyline ? (
        <div className={styles.storylinecontainer}> 
          <h4>Storyline</h4>
          <p>
            {game.storyline}
          </p>
        </div>
      ) : (
          <> </>
      )}
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