import { useEffect, useState, lazy, Suspense } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import styles from '../styles/components/details.module.css';
import axios from "axios";
import normalizeGameData from '../helpers';
import CustomSpinner from '../components/Spinner';
import {CircleCheckBig,ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Heart, ArrowBigLeftDash, ArrowBigRightDash, DollarSign, Percent, ShoppingCart} from 'lucide-react';
import SocialPopup from '../components/reactMUI/Popup';
import SnackBarAlert from '../components/reactMUI/Alerts';
import GameDetailsSkeleton from '../components/Skeleton';

const GameDataSection = lazy(() => import('../components/GameDetailsData'));


function GameDetails() {

const {gameId} = useParams(); 
const [loading, setLoading] = useState(true);
const [gameDetails, setGameDetails] = useState(null);

const [screenshots, setScreenshots] = useState([]);
const [platformLogo, setPlatformLogo] = useState(null);
const [platformName, setPlatformName] = useState(null);
const [saved, setSaved] = useState(false);
const [completed, setCompleted] = useState(false);
const [alertSave, setAlertSave] = useState(false);
const [alertComplete, setAlertComplete] = useState(false);
const [currentIndex, setCurrentIndex] = useState(0);
const [isExpanded, setIsExpanded] = useState(false);
const [isExpandedAlt, setIsExpandedAlt] = useState(false);


const {user, userProfile, SetUserProfile} = useOutletContext();
const token = localStorage.getItem('usertoken');


  //spinner upon mount with delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    window.scrollTo({top: 0, behavior: 'smooth'});


    return () =>  {clearTimeout(timer)}; 
  } ,[loading, setLoading]);

  useEffect(() => {

  }, [saved]);

  // loader upon nav back and forth between games
  useEffect(() => {
    setLoading(true);
  }, [gameId]);


useEffect(() => {
  setLoading(true);
  async function fetchDetails() {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/home/details/${gameId}`);
      setGameDetails(res.data.game.gameDetails);
      res.data.game.normalizedScreenshots ? setScreenshots(res.data.game.normalizedScreenshots) : null;
      res.data.game.platformLogo ? setPlatformLogo(res.data.game.platformLogo) : null;
      setPlatformName(res.data.game.platformName);

      // color fav heart if in savedGames
      userProfile?.savedGames?.forEach((game) => {
        if (res.data.game.gameDetails.igdbId == game.igdbId) {
          setSaved(true);
        }
      });

      // color fav heart if in savedGames
      userProfile?.completedGames?.forEach((game) => {
        if (res.data.game.gameDetails.igdbId == game.igdbId) {
          setCompleted(true);
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
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        gameDetails,
        type
      })
    });

    if (type == "save") {
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
      <GameDetailsSkeleton/>
    </>
  )
}
  if (gameDetails) {
  const game = normalizeGameData(gameDetails);
  return (
   <>
  <SnackBarAlert open={alertSave} setOpen={setAlertSave} status={saved} msg={saved ? 'Saved to Games' : 'Removed from Games'}/>
  <SnackBarAlert open={alertComplete} setOpen={setAlertComplete} status={completed} msg={completed ? 'Saved to Completed Games' : 'Removed from Completed Games'}/>

   <div className={styles.outercontainer}>
      <div className={styles.gamedetailsBtnContainer}>
        <div className={styles.savecontainer}>
          <button onClick={async () => handleUpdateGame('save')} className={styles.likeBtn}>
            <Heart fill={saved ? "#F03A47" : "#0d0f17"} className={styles.iconsHeart} />
          </button>
        </div>
        <div className={styles.completedcontainer}>
          <button onClick={async () => handleUpdateGame('complete')} className={styles.completedBtn}>
            <CircleCheckBig fill={completed ? "#00aaff" : "#0d0f17"} className={styles.iconsCheck} />
          </button>
        </div>
        <div className={styles.sharecontainer}>
          <SocialPopup/>
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
            <div className={styles.ratingcontainer}>
              <img src={game.ageRating.description} className={styles.ratinglogo} />
            </div>
          </div>
          <div className={styles.lowercovercontainer}>
          <div className={styles.namecontainer}>
            <div className={styles.nametxtcontainer}>
              <h1 className={styles.name}>{game.name}</h1></div>
            </div>
            <div className={styles.platformcontainer}>
              <div className={styles.platformlogocontainer}>
                <img src={platformLogo} className={styles.platformlogo}/>
              </div>
              <div className={styles.platformnamecontainer}>
                <span className={styles.originalreleasetxt}>Original Release</span>
                <span className={styles.platname}>{platformName}</span>
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

            {screenshots.length > 0 && screenshots[currentIndex]?.url ? (
              <div className={styles.carousel}>

                <div className={styles.screenshotcarouselcontainer}> 
                  <img
                    src={`https:${screenshots[currentIndex]?.url}`}
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
                <div className={styles.informationheader}>
                  <div className={styles.infoheadertxt}>Information</div> 
                  <div className={styles.ratingtxt}>
                  { gameDetails.genres && gameDetails.genres.length > 0 && (
                    <div className={styles.genrescontainer}>
                      <div className={styles.genrestxt}>Genre: </div>
                      { gameDetails.genres.map((genre) => (
                          <div key={genre.id}>{genre.name}</div>
                      ))}
                    </div>
                  )}
                  { game.rating && gameDetails.totalRatingCount > 0 && (
                    <div className={styles.ratingscontainer}>
                        <div
                          style={{
                            color:
                            (game.rating >= 80 && gameDetails.totalRatingCount > 100)
                              ? "limegreen"
                              : (game.rating >= 70 && gameDetails.totalRatingCount > 50)
                              ? "green"
                              : (game.rating >= 60 && gameDetails.totalRatingCount > 30)
                              ? "goldenrod"
                              : (game.rating < 60 && game.totalRatingCount > 20)
                              ? "red"
                              : undefined,
                          }}
                        >
                          Rated {game.rating}%
                        </div>
                      <div>{gameDetails.totalRatingCount} ratings</div>
                    </div>
                  )}
                  </div>
                </div>
                { game.summary.length > 430 && (
                <div 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center justify-between w-full cursor-pointer"
                  style={{
                    margin: '0',
                    padding: '0',
                  }}
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
          <div className={styles.storylinetitle} >Storyline</div>
                { game.storyline.length > 600 && (
                <div 
                  onClick={() => setIsExpandedAlt(!isExpandedAlt)}
                  className="flex items-center justify-between w-full cursor-pointer"
                  style={{
                    margin: '0',
                    padding: '0',
                    transition: ' 0.5s ease-in-out',
                  }}
                >

                  {isExpandedAlt ? (
                    <ChevronUp/>
                  ) : (
                    <ChevronDown/>
                  )}  
                </div> 
                )}
                <div 
                  className={styles.summarytxt}
                  style={{
                    maxHeight: isExpandedAlt ? '1000px' : '6.5rem',
                    transition: 'max-height 0.5s ease-in-out',
                    overflow: 'hidden'
                  }}
                >
                  <p>
                    {game.storyline}
                  </p>
                </div>
        </div>
      ) : (
          <> </>
      )}
			<Suspense>
       <GameDataSection game={gameDetails} setLoading={setLoading} />
			</Suspense>

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