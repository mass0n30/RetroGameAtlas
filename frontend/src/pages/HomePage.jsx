
import { useEffect, useRef, useState, useId } from 'react';
import { useOutletContext, useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from '../components/GameCard';
import GameCardSS from '../components/GameCardSS';
import axios from "axios";
import CustomSpinnerBottom, { CustomSpinnerDotsBottom } from '../components/Spinner';
import CustomSpinner from '../components/Spinner';
import { CustomSpinnerDots } from '../components/Spinner';
import { SearchX, Info } from 'lucide-react';

//import Loader from "./Loader";


function HomePage() {
  const {user, guest, query, loading, limit, setGameId, games, orderData, orderDirection, discover, setDiscover, screenshotMode, setScreenshotMode, open, setOpen,
  setGames, index, setIndex, mount, setMount, noResult} = useOutletContext();

  // InfiniteScroll state var
  const [hasMore, setHasMore] = useState(true);
  
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
    }, 3000)
  };


    if (loading) {
    return (
      <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center"}} className='loadingContainer'>
        <CustomSpinner/>
      </div>
    );
  }

   if (noResult === true) {
    return (
    <div style={{ display: "flex", gap: "1rem", flexDirection: "row", flex: 1, alignItems: "center", justifyContent: "center" }} className='noResultsContainer'>
      <Info size={30} style={{ marginLeft: "0rem", marginBottom: "2rem" }} color='#a3a3a3ff'/>     
      <div className='resultsTextContainer'>
        <div className='noResultsText'>No Results Found</div>
        <div style={{ color: '#a3a3a3ff', fontSize: '0.8rem' }}>Try a different spelling or fewer filters</div>
      </div>
    </div>
  );
}

  return (
    <InfiniteScroll
      dataLength={games.length * index}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<CustomSpinnerDotsBottom/>}
      scrollThreshold={"20px"}
      scrollableTarget={'gamesScrollContainer'}
      >
      <section>

      { screenshotMode ? (
    
      games.map((game, index) => (
        <GameCardSS style={mount ? { animationDelay: `${index * 0.24}s` }: {}} key={`${stableId}-${index}`} index={index} randomScreenshot={game.randomScreenshot.url} mount={mount} setMount={setMount}
        gameId={game.id} gameIgdbId={game.igdbId} setGameId={setGameId} coverUrl={game.coverUrl} loading={loading} screenshots={game.screenshots} length={game.screenshots.length} user={user} guest={guest}/>
    ))) : (
      games.map((game, index) => (
        <GameCard style={mount ? { animationDelay: `${index * 0.24}s` }: {}} key={`${stableId}-${index}`} index={index} mount={mount} setMount={setMount}
        gameId={game.id} gameIgdbId={game.igdbId} setGameId={setGameId} coverUrl={game.coverUrl} loading={loading} user={user} guest={guest}/>
      ))
    )}
      </section>
      {!hasMore && noResult !== true && <div className='endResultContainer'><p className='endResult'>No More Results</p> <img style={{ width: "80px", height: "auto" }} className='endResultImg' src="/logo/originallogo.png" alt="End of Results"/></div>}
    </InfiniteScroll>
  )
}

export default HomePage;