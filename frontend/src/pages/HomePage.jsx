
import { useEffect, useRef, useState } from 'react';
import { useOutletContext, useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from '../components/GameCard';
import styles from '../styles/components/home.module.css';
import axios from "axios";
import CustomSpinnerBottom from '../components/Spinner';
import CustomSpinner from '../components/Spinner';

//import Loader from "./Loader";


function HomePage() {
  const {  setGameId, games, orderData, orderDirection, discover, setDiscover,
  setGames, setCategoryData, search, setSearch, genre, platform, developer, minyear, maxyear} = useOutletContext();

  // InfiniteScroll state var
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(0);
  const [loading, SetLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      SetLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  } ,[loading]);

  // temporary
  const offset = 0;
  const limit = 100;

  // making URL for any games query
  const params = new URLSearchParams();
  
  if (genre) genre.forEach(g => params.append("genre", g));
  if (platform) platform.forEach(p => params.append("platform", p));
  if (developer) developer.forEach(d => params.append("developer", d));
  if (minyear) params.append("minyear", minyear);
  if (maxyear) params.append("maxyear", maxyear);

  if (search) params.append("search", search);

  const query = params.toString();

  // initial mount for inital games (maybe save state scroll location?)
  useEffect(() => {
    SetLoading(true);
    // scrolls to top page upon category changes
    axios
      .get(`http://localhost:5000/home/games?${query}&order=${orderData}&dir=${orderDirection}&offset=${0}&limit=${limit}&discover=${discover}`,{
      })
      .then((res) => setGames(res.data.games))
      .catch((err) => console.log(err));

      window.scrollTo({top: 0, behavior: 'smooth'});

  }, [ query, genre, platform, minyear, maxyear, developer, setGames, orderData, orderDirection, discover ]);

  // fetch more logic for Infinite Scroll
  // Loader logic or Load more ?????
  const fetchMoreData = () => {
    setTimeout(() => {
    axios
    .get(`http://localhost:5000/home/games?${query}&order=${orderData}&dir=${orderDirection}&offset=${index + 1}&limit=${limit}&discover=${discover}`,)
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
      {games.map(game => (
        <GameCard key={game.id} gameId={game.id} setGameId={setGameId} coverUrl={game.coverUrl} loading={loading}/>
      ))}
      </section>
      {!hasMore && <p>No More Results</p>}
    </InfiniteScroll>
  )
}

export default HomePage;