import { useEffect, useState, useRef } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import styles from '../styles/components/details.module.css';
import axios from "axios";
import normalizeGameData from '../helpers';
import CustomSpinner from '../components/Spinner';
import {CircleCheckBig,ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Award, Heart, ArrowBigLeftDash, ArrowBigRightDash, DollarSign, Percent, ShoppingCart} from 'lucide-react';
import SocialsShare from '../components/ShareSocials';
import SnackBarAlert from '../components/reactMUI/Alerts';
import GameDetailsSkeleton from '../components/Skeleton';
import GameDataSection from '../components/GameDetailsData';

function GameDetails() {

const {gameId} = useParams(); 
const [loading, setLoading] = useState(true);
const [gameDetails, setGameDetails] = useState(null);

const [screenshots, setScreenshots] = useState([]);
const [saved, setSaved] = useState(false);
const [completed, setCompleted] = useState(false);
const [alertSave, setAlertSave] = useState(false);
const [alertComplete, setAlertComplete] = useState(false);
const [currentIndex, setCurrentIndex] = useState(0);
const [isExpanded, setIsExpanded] = useState(false);


const {user, userProfile, SetUserProfile} = useOutletContext();
const token = localStorage.getItem('usertoken');

useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //spinner upon mount with delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer,); 
  } ,[loading, setLoading]);

  useEffect(() => {

  }, [saved])


useEffect(() => {
  async function fetchDetails() {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/home/details/${gameId}`);
      setGameDetails(res.data.game.gameDetails);
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

const handleUpdateGame = async (type) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/home/details/${gameId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gameDetails, type)
    });
    if (response.status === 200 && type == "save") {
      saved ? setSaved(false) : setSaved(true);
      setAlertSave(true);
    } else {
      completed ? setCompleted(false) : setCompleted(true);
      setAlertComplete(true);
    }

    // updating client side userProfile save state games
    const result = await response.json();
    if (result) {
      SetUserProfile(result.updatedProfile)
    }

    return (() => {
      setCompleted(false);
      setAlertSave(false);
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
  <SnackBarAlert open={alertSave} setOpen={setAlertSave} status={saved} msg={saved ? 'Saved to Games' : 'Removed from Games'}/>
  <SnackBarAlert open={alertComplete} setOpen={setAlertSave} status={completed} msg={completed ? 'Saved to Completed Games' : 'Removed from Completed Games'}/>

   <div className={styles.outercontainer}>
      <div className={styles.gamedetailsBtnContainer}>
        <div className={styles.savecontainer}>
          <button onClick={async () => handleUpdateGame('save')} className={styles.likeBtn}>
            <Heart fill={saved ? "red" : "#0d0f17"} className={styles.iconsHeart} />
          </button>
        </div>
        <div className={styles.completedcontainer}>
          <button onClick={async () => handleUpdateGame('complete')} className={styles.completedBtn}>
            <CircleCheckBig fill={saved ? "green" : "#0d0f17"} className={styles.checkBig} />
          </button>
        </div>
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
          <div className={styles.namecontainer}><h1 className={styles.name}>{game.name}</h1></div>
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
            <div className={styles.socialshares}>
              <SocialsShare/>
            </div>

          </div>

        </div> 
        <article className={styles.datacontainer}>
          <div className={styles.screenshotscontainer}>
            <button
              className={styles.arrowL}
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === 0 ? screenshots.length - 1 : prev - 1
                )
              }
            >
            <ChevronLeft className={styles.icons} color="#E8F1F2" />
            </button>

            <button
              className={styles.arrowR}
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === screenshots.length - 1 ? 0 : prev + 1
                )
              }
            >
            <ChevronRight className={styles.icons} color="#E8F1F2" />

            </button>

            {screenshots.length > 0 ? (
              <div className={styles.carousel}>

                <div className={styles.screenshotcarouselcontainer}> 
                  <img
                    src={`https:${screenshots[currentIndex].url}`}
                    alt={`${game.name} screenshot`}
                    className={styles.screenshot}
                  />
                </div>


              </div>
            ) : (
              <p>No screenshots available.</p>
            )}
          </div>
            {game.summary ? (
              <div className={styles.summarycontainer}>
                <span>Information</span>
                { game.summary.length > 700 && (
                <div 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center justify-between w-full cursor-pointer"
                >

                  {isExpanded ? (
                    <ChevronUp/>
                  ) : (
                    <ChevronDown/>
                  )}  
                </div> 
                )}
                <div 
                  className={styles.summarytxt}
                  style={{
                    maxHeight: isExpanded ? '1000px' : '9.5rem',
                    transition: 'max-height 0.5s ease-in-out',
                    overflow: 'hidden'
                  }}
                >
                  <p>
                    {game.summary}
                  </p>
                </div>
              </div>
            ) : (
              <></>
            )}
            </article>
          </div>
      {game.storyline ? (
        <div className={styles.storylinecontainer}> 
          <span>Storyline</span>
          <p>
            {game.storyline}
          </p>
        </div>
      ) : (
          <> </>
      )}
      <GameDataSection game={gameDetails} />

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