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
  const limit = 100;

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
            className="max-h-[90vh] max-w-full rounded-lg object-contain"
          />
        </div>
      )}

      {/* sidebar */}
      <Sidebar/>

      {/* page content */}
      <div className="md:ml-60">

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

        <main className="mx-auto max-w-screen-2xl px-md pb-8 pt-24 md:px-lg">

          {/* heading */}
          <div className="mb-lg">
            <p className="mb-sm text-xs font-bold uppercase tracking-widest text-primary">
              Your atlas
            </p>
            <p className="mt-3 text-lg text-muted">
              Revisit the classics. Discover what you missed.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-lg lg:grid-cols-3">

            {/* left column */}
            <div className="min-w-0 space-y-lg lg:col-span-2">

              {/* featured section */}
              <section className="relative flex min-h-72 items-end overflow-hidden rounded-lg border border-border bg-backgroundAlt">

                { gameData.games[0]?.randomScreenshot?.url && (
                  <img
                    src={gameData.games[0].randomScreenshot.url}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"/>

              </section>

              {/* existing game list */}
              <section
                id="browse-games"
                className="scroll-mt-24 rounded-lg border border-border bg-backgroundAlt p-md md:p-lg"
              >
                <div className="mb-lg">
                  <h2 className="text-xl font-bold">Explore the library</h2>
                  <p className="mt-xs text-sm text-muted">
                    More worlds worth getting lost in.
                  </p>
                </div>

                { !gameData.categoryData ? (
                  <div className="flex justify-center py-12">
                    <CustomSpinner/>
                  </div>
                ) : (
                  <Outlet context={{query, limit, session, setSession, filters, setFilters, gameData, setGameData, ui, setUi, status, setStatus }} />
                )}
              </section>

            </div>

            {/* right column */}
            <aside className="space-y-lg">

              <section className="rounded-lg border border-border bg-color-surface-elevated p-lg">
                <h2 className="text-xl font-bold">Watchlist alerts</h2>
                <p className="mt-xs text-sm text-muted">
                  Keep an eye on your next find.
                </p>

                <div className="mt-lg rounded-lg border border-dashed border-border p-lg">

                </div>
              </section>

              <section className="rounded-lg border border-border bg-backgroundAlt p-lg">
                <h2 className="text-xl font-bold">Jump back in</h2>
                <p className="mt-xs text-sm text-muted">
                  Pick up where you left off.
                </p>
              </section>

            </aside>

          </div>
        </main>
      </div>
    </div>
  )
}

export default Home;