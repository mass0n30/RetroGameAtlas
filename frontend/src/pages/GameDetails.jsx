import { useEffect, useState, useRef } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import styles from '../styles/components/details.module.css';
import axios from "axios";
import normalizeGameData from '../helpers';
import CustomSpinner from '../components/Spinner';
import YouTubeEmbed from '../components/Youtube';
import {Heart} from 'lucide-react';


function GameDetails() {

const {gameId} = useParams(); 
const [loading, setLoading] = useState(true);
const [gameDetails, setGameDetails] = useState(null);
const [recordData, setRecordData] = useState(null);
const [recordDataAlt, setRecordDataAlt] = useState(null);
const [gameEbayData, setGameEbayData] = useState(null);
const [screenshots, setScreenshots] = useState([]);
const [saved, setSaved] = useState(false);

const {user} = useOutletContext();

console.log('User:', user);

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

const handleDeleteGame = async () => {
  try {
    const response = await axios.delete(`http://localhost:5000/home/details/${gameId}`);
    if (response.status === 200) {
      alert('Game deleted successfully');
    }
  } catch (error) {
    console.error('Error deleting game:', error);
  }
}

const handleSaveGame = async () => {
  try {
    const response = await axios.put(`http://localhost:5000/home/details/${gameId}`);
    if (response.status === 200) {
      alert('saved successfully');
    }
  } catch (error) {
    console.error('Error:', error);
  }
  saved ? setSaved(false) : setSaved(true);
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
    <div className={styles.detailscontainer}>
      <div className={styles.savecontainer}>
        <button onClick={async () => handleSaveGame()}>
          <Heart color={saved ? "red" : "white"}/>
        </button>
      </div>
      <div>{game.name}</div>
      <div>Developer:</div> {game.developer.name ? (
            game.developer.name
      ) : (
         <p>Unknown Developer</p>
      )}

      <div>Play On:</div> {game.originalPlatform ? (
            game.originalPlatform
      ) : (
         <p>Unknown</p>
      )}

        <div className={styles.covercontainer}>
         {game.cover ? (
            <img src={game.cover} className="cover" />
         ) : (
            <p>No Cover Art</p>
         )}
        </div>

      <div className={styles.storylinecontainer}> 
         {game.storyline ? (
            game.storyline
         ) : (
            <> </>
         )}

      </div>
         {game.summary ? (
          <div className={styles.summarycontainer}> {game.summary} </div>
           
         ) : (
            <> </>
         )}

         {gameEbayData ? (
          gameEbayData.map((post) => (
          <div className={styles.ebaycontainer} key={post.itemId}> {post.title}
              <div className={styles.ebaycondition}> {post.condition} </div>
              <div className={styles.ebayprice}> {post.price.currency} {' '} {post.price.value} </div>
              <div className={styles.ebaylink}>
                <a href={post.itemWebUrl}target="_blank" rel="noopener noreferrer">View on Ebay</a>
              </div>
             </div>
            )
          )
         ) : <></>}


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

      <div className={styles.screenshotscontainer}>
        {screenshots.length > 0 ? (
          screenshots.map((ss) => (
            <img
              key={ss.id}
              src={`https:${ss.url}`} 
              alt={`${game.name} screenshot`}
              className="screenshot"
            />
          ))
        ) : (
          <p>No screenshots available.</p>
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