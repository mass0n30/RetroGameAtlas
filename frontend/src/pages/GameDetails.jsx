import { useEffect, useState, useRef } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import styles from '../styles/components/details.module.css';
import axios from "axios";
import normalizeGameData from '../helpers';
import CustomSpinner from '../components/Spinner';
import YouTubeEmbed from '../components/Youtube';


function GameDetails() {

const {gameId} = useParams(); 
const [loading, setLoading] = useState(true);
const [gameDetails, setGameDetails] = useState(null);
const [recordData, setRecordData] = useState(null);
const [recordDataAlt, setRecordDataAlt] = useState(null);


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
  async function fetchDetails() {
    try {
      const res = await axios.get(`http://localhost:5000/home/details/${gameId}`);
      setGameDetails(res.data.game.gameDetails);
      res.data.game.worldRecord ? setRecordData(res.data.game.worldRecord) : null;
      res.data.game.worldRecordAlt ? setRecordDataAlt(res.data.game.worldRecordAlt) : null;
    } catch (err) {
      console.error(err);
    } 
  }
  fetchDetails();
}, [gameId]);

if (loading) {
  return (
    <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center", marginTop: "2rem" }}>
      <CustomSpinner/>
    </div>
  )
}
  if (gameDetails) {
  console.log(gameDetails);
  const game = normalizeGameData(gameDetails);
  return (
   <>
    <div className="game-details">
      <div>{game.name}</div>
      <div>Developer:</div> {game.developer.name ? (
            game.developer.name
      ) : (
         <p>Unknown Developer</p>
      )}

      <div>Main Platform:</div> {game.originalPlatform ? (
            game.originalPlatform
      ) : (
         <p>Unknown</p>
      )}


      <div> 
         {game.storyline ? (
            game.storyline
         ) : (
            <> --- </>
         )}

      </div>
      <div>
         {game.summary ? (
            game.summary
         ) : (
            <> *** </>
         )}
      </div>

      <div>
        {recordData? (
         <div>
          <div>
            {recordData.recordName}
          </div>
          <div>
            {recordData.timeConverted}
          </div>
          <div> 
            <YouTubeEmbed url={recordData.videoLink} title={recordData.recordName}/>
          </div>
          <div>
            <a href={'recordData.runLink'}>{recordData.runLink}</a>
          </div>
         </div>
 
        ) : (
          <></>
        )}

        {recordDataAlt? (
         <div>
          <div>
            {recordDataAlt.recordName}
          </div>
          <div>
            {recordDataAlt.timeConverted}
          </div>
          <div> 
            <YouTubeEmbed url={recordDataAlt.videoLink} title={recordDataAlt.recordName}/>
          </div>
          <div>
            <a href={'recordDataAlt.runLink'}>{recordDataAlt.runLink}</a>
          </div>
         </div>
 
        ) : (
          <></>
        )}

      </div>

        <div className="cover-container">
         {game.cover ? (
            <img src={game.cover} className="cover" />
         ) : (
            <p>No Cover Art</p>
         )}
        </div>

      <div className="screenshots">
        {game.screenshots.length > 0 ? (
          game.screenshots.map((ss) => (
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
    </div>
    </>
   );
  }

}

export default GameDetails;