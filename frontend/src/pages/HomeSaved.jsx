import { useEffect, useRef, useState, useId } from 'react';
import { useOutletContext, useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from '../components/GameCard';
import GameCardSS from '../components/GameCardSS';
import axios from "axios";
import CustomSpinnerBottom from '../components/Spinner';
import CustomSpinner from '../components/Spinner';
import { DashBoardContainerSkeleton } from '../components/Skeleton';


function HomeSaved() {
  const {user, query, loading, SetLoading, limit, setGameId, orderData, orderDirection, discover, setDiscover, screenshotMode, setScreenshotMode, open, setOpen,
  setCategoryData, search, setSearch, genre, platform, developer, minyear, maxyear, mount, setMount} = useOutletContext();

  const [games, setGames] = useState([]);

  const stableId = useId();

  const token = localStorage.getItem('usertoken');

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/home/saved`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(response => {
      console.log(response.data, 'test');
      setGames(response.data.savedGames);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [token])

    if (loading || games.length == 0) {
      return (
        <section>
          <DashBoardContainerSkeleton />
        </section>
      );
    }

    return (
      <>
        <section className={'saved_games_section'}>
          <div className={'saved_games_container'}>
            <div className='saved_games_header'>
              <h1 className={'saved_games_title'}>Saved Games</h1>
            </div>
            { games.savedGames.map((game, index) => (
              <GameCard style={mount ? { animationDelay: `${index * 0.24}s` }: {}} key={`${stableId}-${index}`} index={index} mount={mount} setMount={setMount}
              gameIgdbId={game.igdbId} setGameId={setGameId} coverUrl={game.coverUrl} loading={loading} user={user}/>
            ))
            }
          </div>
        </section>
      
      </>
    )

}

export default HomeSaved;