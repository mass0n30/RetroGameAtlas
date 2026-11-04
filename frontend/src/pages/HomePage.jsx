
import { useEffect, useRef, useState, useId } from 'react';
import { useOutletContext, useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from '../components/GameCard';
import GameCardSS from '../components/GameCardSS';
import axios from "axios";
import { CustomSpinnerDotsBottom } from '../components/Spinner';
import CustomSpinner from '../components/Spinner';
import { CustomSpinnerDots } from '../components/Spinner';
import { SearchX, Info } from 'lucide-react';

//import Loader from "./Loader";


function HomePage() {
  const {session, query, limit, filters, gameData, setGameData, ui, setUi, status} = useOutletContext();

  // InfiniteScroll state var
  const [hasMore, setHasMore] = useState(true);
  
  const stableId = useId();

  // fetch more logic for Infinite Scroll
  // Loader logic or Load more ?????
  const fetchMoreData = () => {
    setUi(prev => ({ ...prev, mount: false }));
    setTimeout(() => {
    axios
    .get(`${import.meta.env.VITE_API_URL}/home/games?${query}&order=${filters.order.data}&dir=${filters.order.order}&offset=${gameData.index + 1}&limit=${limit}&discover=${filters.discover}`,)
    .then((res) => {
      console.log(res, 'response');

      setGameData(prev => ({
        ...prev,
        index: prev.index + 1,
        games: [...prev.games, ...res.data.games],
      }));

      res.data.games.length > 0 ? setHasMore(true) : setHasMore(false);       
    })
    .catch((err) => console.log(err));
    }, 3000)
  };


    if (status.loading) {
    return (
      <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center"}} className='loadingContainer'>
        <CustomSpinner/>
      </div>
    );
  }

   if (status.noResult === true) {
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
      dataLength={gameData.games.length * gameData.index}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<CustomSpinnerDotsBottom/>}
      scrollableTarget={null}
      >
      <section className='gameListContainer'>

      { ui.screenshotMode ? (
    
      gameData.games.map((game, index) => (
        <GameCardSS style={ui.mount ? { animationDelay: `${index * 0.24}s` }: {}} key={`${stableId}-${index}`} index={index} randomScreenshot={game.randomScreenshot.url} mount={ui.mount}
        setMount={(value) => setUi(prev => ({ ...prev, mount: typeof value === 'function' ? value(prev.mount) : value }))}
        gameId={game.id} gameIgdbId={game.igdbId}
        setGameId={(value) => setGameData(prev => ({ ...prev, gameId: typeof value === 'function' ? value(prev.gameId) : value }))}
        coverUrl={game.coverUrl} loading={status.loading} screenshots={game.screenshots} length={game.screenshots.length} user={session.user} guest={session.guest}/>
    ))) : (
      gameData.games.map((game, index) => (
        <GameCard style={ui.mount ? { animationDelay: `${index * 0.24}s` }: {}} key={`${stableId}-${index}`} index={index} mount={ui.mount}
        setMount={(value) => setUi(prev => ({ ...prev, mount: typeof value === 'function' ? value(prev.mount) : value }))}
        gameId={game.id} gameIgdbId={game.igdbId}
        setGameId={(value) => setGameData(prev => ({ ...prev, gameId: typeof value === 'function' ? value(prev.gameId) : value }))}
        coverUrl={game.coverUrl} loading={status.loading} user={session.user} guest={session.guest}/>
      ))
    )}
      </section>
      {!hasMore && status.noResult !== true && <div className='endResultContainer'><p className='endResult'>No More Results</p> <img style={{ width: "80px", height: "auto" }} className='endResultImg' src="/logo/originallogo.png" alt="End of Results"/></div>}
    </InfiniteScroll>
  )
}

export default HomePage;