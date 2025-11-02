
import { useEffect, useState } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from '../components/GameCard';
import styles from '../styles/components/home.module.css';
import axios from "axios";
import CustomSpinnerBottom from '../components/Spinner';

//import Loader from "./Loader";


function HomePage() {
  const { loading, success, SetLoading, SetSuccess, SetNewFetch, gameId, setGameId, games, 
  setGames, setCategoryData, search, setSearch, genre, platform, developer, year} = useOutletContext();
  const token = localStorage.getItem('usertoken');

  // InfiniteScroll state var
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(0);
  const [gameLoad, setGameLoad] = useState(false);

  // temporary
  const offset = 0;
  const limit = 100;

  // making URL for any games query
  const params = new URLSearchParams();

  
  if (genre) genre.forEach(g => params.append("genre", g));
  if (platform) platform.forEach(p => params.append("platform", p));
  if (developer) developer.forEach(d => params.append("developer", d));
  if (year) year.forEach(y => params.append("year", y));

  if (search) params.append("search", search);
  params.append("offset", String(index));
  params.append("limit", String(limit));

  const query = params.toString();

  // initial mount for inital games (maybe save state scroll location?)
  useEffect(() => {

    axios
      .get(`http://localhost:5000/home/games?${query}`,{
      })
      .then((res) => setGames(res.data.games)) 
      .catch((err) => console.log(err));
  }, [token, setGames, query, genre, platform, year, developer ]);

  // fetch more logic for Infinite Scroll
  // Loader logic or Load more ?????
  const fetchMoreData = () => {
    setTimeout(() => {
      axios
      .get(`http://localhost:5000/home/games?${query}`)
      .then((res) => {
        console.log(res, 'response');
        setGames((prevItems) => [...prevItems, ...res.data.games]);

        res.data.games.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => console.log(err));

    setIndex((prevIndex) => prevIndex + 1);

    }, 3000)
  };


    if (loading  || !games ) {
    return (
      <>

      </>
    );
  }

  return (
    <InfiniteScroll
      dataLength={games.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<CustomSpinnerBottom/>}
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