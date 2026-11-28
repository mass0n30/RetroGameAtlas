import { useState, useEffect } from 'react';
import { useOutletContext, Outlet } from 'react-router-dom';
import { getCompletedGamesStats } from '../helpers';
import CustomSpinner from '../components/Spinner';
import { DashBoardContainerSkeleton } from '../components/Skeleton';

const stableId = 'dashboard_game_card';


function DashboardSection() {
  const {session, query, limit, filters, gameData, setGameData, ui, setUi, setSession, setFilters, status, setStatus} = useOutletContext();

  const [loading, setLoading] = useState(true);
  const [runType, setRunType] = useState('Platform');
  const [layoutStats, setLayoutStats] = useState('grid');
  const [category, setCategory] = useState(null);
  const [completedGames, setCompletedGames] = useState(session.userProfile?.completedGames || []);


  const completedGamesStats = getCompletedGamesStats(completedGames);
  console.log('Completed Games Stats:', completedGamesStats);

  //spinner upon mount with delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    window.scrollTo({top: 0, behavior: 'smooth'});

    return () =>  {clearTimeout(timer)}; 
  } ,[loading, setLoading]);


  if (loading) {
    return (
      <section>
        <div className>
          <DashBoardContainerSkeleton />
        </div>
      </section>
    );
  }

  return (
    <>
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
  </>
  );
}

export default DashboardSection;