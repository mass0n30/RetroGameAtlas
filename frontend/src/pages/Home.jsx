{/* import { useState, useEffect } from 'react' */}
import { useParams, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState,  } from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CustomSpinner from "../components/Spinner";
import { resetFilters } from '../helpers';
import { Funnel } from 'lucide-react';
import axios from "axios";


function Home() {

  // initial mount state data
  const [session, setSession] = useState({
    user: null,
    guest: false,
    userProfile: null,
  });

  // state query filters
  const [filters, setFilters] = useState({
    platform: undefined,
    genre: undefined,
    developer: undefined,
    year: {min: 1974, max: 2012},
    search: "",
    order: {data: "Rating", order: true}, //false = desc, true = asc
    discover: false,
  });

  // games state
  const [gameData, setGameData] = useState({
    categoryData: undefined,
    games: [],
    gameId: null,
    index: 0,
  });

  // temporary
  const limit = 20;

  // loading state settings
  const [status, setStatus] = useState({
    loading: true,
    success: false,
    error: null,
    noResult: null,
  });

  // used for scroll resoration, navigation
  const [ui, setUi] = useState({
    open: new Set(),
    activeImage: null,
    screenshotMode: false,
    mount: true,
    toggle: false,
  });

  const token = localStorage.getItem('usertoken');
  const navigate = useNavigate();

  //spinner upon mount with delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus(prev => ({ ...prev, loading: false }));
    }, 2000);

    const successTimer = setTimeout(() => {
      setStatus(prev => ({ ...prev, success: false }));
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(successTimer);
    };
  } ,[status.loading, ui.open]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/home`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          localStorage.removeItem('usertoken');
          navigate('/');

          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();


        if (!result.guest) {
          setSession(prev => ({
            ...prev,
            user: result.user, // (only non sensitive user data from backend)
            userProfile: result.userProfile,
          }));
        }

        setGameData(prev => ({
          ...prev,
          categoryData: result.categoryData,
        }));

        // reset boolean fetch after updated posts fetch
      } catch (error) {
        setStatus(prev => ({ ...prev, error: error }));
      }
    };

    // initiate GET home fetch if there's a token else continue guest mode
     if (token) {
      fetchUser();
     } else {
      fetchGuestMode();
     }
  }, [token]);

  async function fetchGuestMode() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/home/guest`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          navigate('/');

          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        setSession(prev => ({ ...prev, guest: true }));
        setGameData(prev => ({
          ...prev,
          categoryData: result.categoryData,
        }));

        // reset boolean fetch after updated posts fetch
      } catch (error) {
        setStatus(prev => ({ ...prev, error: error }));
      }
    };

  // making URL for any games query
  const params = new URLSearchParams();

  if (filters.genre) filters.genre.forEach(g => params.append("genre", g));
  if (filters.platform) filters.platform.forEach(p => params.append("platform", p));
  if (filters.developer) filters.developer.forEach(d => params.append("developer", d));
  if (filters.year.min) params.append("minyear", filters.year.min);
  if (filters.year.max) params.append("maxyear", filters.year.max);

  if (filters.search) params.append("search", filters.search);

  const query = params.toString();
  const randomNumber = Math.floor(Math.random() * 10); // Generate a random number between 0 and 10

  // initial mount for inital games (maybe save state scroll location?)
  useEffect(() => {
    setStatus(prev => ({ ...prev, loading: true }));
    // scrolls to top page upon category changes
    axios
      .get(`${import.meta.env.VITE_API_URL}/home/games?${query}&order=${filters.order.data}&dir=${filters.order.order}&offset=${0}&limit=${limit}&discover=${filters.discover}`,{
      })
      .then(res => {
        if (res.data.games.length === 0) {
          setStatus(prev => ({ ...prev, noResult: true }));
        } else {
          setStatus(prev => ({ ...prev, noResult: false }));
        }
        setGameData(prev => ({ ...prev, games: res.data.games }));
      })
      .catch((err) => console.log(err));


  }, [ query, filters.genre, filters.platform, filters.year.min, filters.year.max, filters.developer, filters.order.data, filters.order.order, filters.discover ]);

  if (status.error) {
    return (<div>Error: {status.error.message}</div>);
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">

      {/* screenshot overlay */}
      { ui.activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-lg"
          onClick={() => setUi(prev => ({ ...prev, activeImage: null }))}
        >
          <img
            src={ui.activeImage}
            alt="Active Screenshot"
            className="max-h-[90vh] max-w-full rounded-lg "
          />
        </div>
      )}

      {/* sidebar */}
      <Sidebar/>

      {/* page content */}
      <div className="min-h-screen flex flex-1 flex-col md:pl-60">

        <Navbar
          ui={ui}
          setUi={setUi}
          filters={filters}
          setFilters={setFilters}
          session={session}
          setSession={setSession}
          gameData={gameData}
          setGameData={setGameData}
          setStatus={setStatus}
        />

        <main className="min-h-screen max-w-screen-2xl px-md pb-8 pt-24 md:px-lg">
          <Outlet context={{session, query, limit, filters, gameData, setGameData, ui, setSession, setUi, status, setFilters, setStatus }} />
        </main>
      </div>
    </div>
  )
}

export default Home;