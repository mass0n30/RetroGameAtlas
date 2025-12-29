
import { useEffect, useRef, useState, useId } from 'react';
import { useOutletContext, useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from '../components/GameCard';
import GameCardSS from '../components/GameCardSS';
import axios from "axios";
import CustomSpinnerBottom from '../components/Spinner';
import CustomSpinner from '../components/Spinner';
import { Funnel } from 'lucide-react';

//import Loader from "./Loader";


function HomePage() {
  const {user, query, loading, limit, setGameId, games, orderData, orderDirection, discover, setDiscover, screenshotMode, setScreenshotMode, open, setOpen,
  setGames, setCategoryData, search, setSearch, genre, platform, developer, minyear, maxyear, mount, setMount} = useOutletContext();

  // InfiniteScroll state var
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(0);
  
  const stableId = useId();

  // fetch more logic for Infinite Scroll
  // Loader logic or Load more ?????
  const fetchMoreData = () => {
    setMount(false);
    setTimeout(() => {
    axios
    .get(`${import.meta.env.VITE_API_URL}/home/games?${query}&order=${orderData}&dir=${orderDirection}&offset=${index + 1}&limit=${limit}&discover=${discover}`,)
    .then((res) => {
      console.log(res, 'response');

      const combinedGames = [...games, ...res.data.games];
      setIndex((prevIndex) => prevIndex + 1);
      setGames(combinedGames);

      res.data.games.length > 0 ? setHasMore(true) : setHasMore(false);       
    })
    .catch((err) => console.log(err));
    }, 4000)
  };


    if (loading  || games.length == 0) {
    return (
      <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center", marginTop: "2rem" }}>
        <CustomSpinner/>
      </div>
    );
  }

  return (
    <InfiniteScroll
      dataLength={games.length * index}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<CustomSpinnerBottom/>}
      scrollThreshold={"20px"}
      scrollableTarget={'gamesScrollContainer'}
      >
      <section>
      <div className='funnelContainer'>
        <Funnel className='funnelIcon'/>
      </div>
      { screenshotMode ? (
    
      games.map((game, index) => (
        <GameCardSS style={mount ? { animationDelay: `${index * 0.24}s` }: {}} key={`${stableId}-${index}`} index={index} randomScreenshot={game.randomScreenshot.url} mount={mount} setMount={setMount}
        gameId={game.id} setGameId={setGameId} coverUrl={game.coverUrl} loading={loading} screenshots={game.screenshots} length={game.screenshots.length} user={user}/>
    ))) : (
      games.map((game, index) => (
        <GameCard style={mount ? { animationDelay: `${index * 0.24}s` }: {}} key={`${stableId}-${index}`} index={index} mount={mount} setMount={setMount}
        gameId={game.id} setGameId={setGameId} coverUrl={game.coverUrl} loading={loading} user={user} />
      ))
    )}
      </section>
      {!hasMore && <p className='endResult'>No More Results</p>}
    </InfiniteScroll>
  )
}

export default HomePage;