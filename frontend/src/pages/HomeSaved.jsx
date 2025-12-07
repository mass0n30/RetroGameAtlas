import { useEffect, useRef, useState, useId } from 'react';
import { useOutletContext, useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from '../components/GameCard';
import GameCardSS from '../components/GameCardSS';
import styles from '../styles/components/home.module.css';
import axios from "axios";
import CustomSpinnerBottom from '../components/Spinner';
import CustomSpinner from '../components/Spinner';


function HomeSaved() {
  const {user, query, loading, SetLoading, limit, setGameId, orderData, orderDirection, discover, setDiscover, screenshotMode, setScreenshotMode, open, setOpen,
  setCategoryData, search, setSearch, genre, platform, developer, minyear, maxyear, mount, setMount} = useOutletContext();

  const [games, setGames] = useState([]);

  const stableId = useId();

  const token = localStorage.getItem('usertoken');

  useEffect(() => {
    axios.get('http://localhost:5000/home/saved', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(response => {
      setGames(response.data.savedGames.savedGames);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  })

    if (loading && games.length == 0) {
      return (
        <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center", marginTop: "2rem" }}>
          <CustomSpinner/>
        </div>
      );
    }

    return (
      <>
        <section>
          { games.map((game, index) => (
            <GameCard style={mount ? { animationDelay: `${index * 0.24}s` }: {}} key={`${stableId}-${index}`} index={index} mount={mount} setMount={setMount}
            gameId={game.id} setGameId={setGameId} coverUrl={game.coverUrl} loading={loading} user={user}/>
          ))
        };
      </section>
      
      </>
    )

}

export default HomeSaved;