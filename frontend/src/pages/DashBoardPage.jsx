import styles from '../styles/components/dashboard.module.css';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { getCompletedGamesStats } from '../helpers';
import CustomSpinner from '../components/Spinner';
import { LayoutGrid, TableProperties } from 'lucide-react';
import GameCard from '../components/GameCard';

const stableId = 'dashboard_game_card';


function DashBoardPage() {
  const {user, userProfile, guest, query, limit, setGameId, games, orderData, orderDirection, discover, setDiscover, screenshotMode, setScreenshotMode, open, setOpen,
  setGames, index, setIndex, mount, setMount} = useOutletContext();

  const [loading, setLoading] = useState(true);
  const [runType, setRunType] = useState('Platform');
  const [layoutStats, setLayoutStats] = useState('grid');
  const [category, setCategory] = useState(null);

  const completedGamesStats = getCompletedGamesStats(userProfile?.completedGames || []);
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
      <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center", marginTop: "2rem" }}>
        <CustomSpinner />
      </div>
    );
  }

  return (
    <>
    <section>
      <div className={styles.dashboard_container}>
        <div className={styles.dashboard_inner_container}>
          <div className={styles.dashboard_content}>
            <div className={styles.dashboard_header}>
              <div className={styles.dashboard_title_container}>
                <h1 className={styles.dashboard_heading}> Dashboard & Stats</h1> 
              </div>
              <div className={styles.layoutBtnContainer}>
                <button className={styles.layoutBtn} onClick={() => setLayoutStats(layoutStats === 'grid' ? 'list' : 'grid')}>
                  {layoutStats === 'grid' ? <TableProperties size={32} /> : <LayoutGrid size={32}/>}
                </button>
              </div>

            </div>

            <div className={styles.completedStatsToggle}>
              <div className={styles.completedStatsToggleLeft}>
                <div className={styles.names_container}>
                  <h2 className={styles.dashboard_alias}>{user?.alias}</h2>
                  <h2 className={styles.dashboard_completed_games}>Total Completed Games {userProfile?.completedGames.length} </h2>
                </div>
                <div className={styles.dashboard_games_container}>
                  <h2 className={styles.dashboard_header}>Completed Games by {runType}</h2>
                  <button className={styles.completedBtn} onClick={() => setRunType(runType === 'Genre' ? 'Platform' : 'Genre')}>
                    View {runType === 'Genre' ? 'Platform' : 'Genre'}
                  </button>
                </div>
              </div>
            </div>
            { runType === 'Genre' ? (
              <div className={styles.dashboard_stats_container}>
                <div className={layoutStats === 'grid' ? styles.dashboard_cells_container : styles.dashboard_cells_container_grid}>
                  { completedGamesStats.genresArray.map(({ name, count }, index) => (
                    <button key={name} className={ layoutStats === 'grid' ? styles.dashboard_cells : styles.dashboard_cells_grid} 
                    onClick={() => setCategory(category === name ? null : name)} 
                    style={ { backgroundColor: index % 2 === 0 ? 'var(--color-background)' : 'var(--color-background-light)'} }>
                       <div className={styles.dashboard_name}>{name}</div>
                       <div className={styles.dashboard_count} style={count === 0 ? { color: 'grey' } : {}}>{count}</div>
                    </button>
                  )) }
                </div>
              </div>
            ) : (
              <div className={styles.dashboard_stats_container}>
                <div className={layoutStats === 'grid' ? styles.dashboard_cells_container : styles.dashboard_cells_container_grid}>
                { completedGamesStats.consolesArray.map(({ name, count }, index) => (
                  <button key={name} className={ layoutStats === 'grid' ? styles.dashboard_cells : styles.dashboard_cells_grid} 
                  onClick={() => setCategory(category === name ? null : name)} 
                  style={ { backgroundColor: index % 2 === 0 ? 'var(--color-background)' : 'var(--color-background-light)'} }>
                     <div className={styles.dashboard_name}>{name}</div>
                     <div className={styles.dashboard_count} style={count === 0 ? { color: 'grey' } : {}}>{count}</div>
                  </button>
                )) }
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={'saved_games_container'}>
          <div className='saved_games_header'>
            <h1 className={'saved_games_title'}>Completed Games</h1>
          </div>
          { userProfile.completedGames.map((game, index) => (
            <GameCard style={mount ? { animationDelay: `${index * 0.24}s` }: {}} key={`${stableId}-${index}`} index={index} mount={mount} setMount={setMount}
            gameIgdbId={game.igdbId} setGameId={setGameId} coverUrl={game.coverUrl} loading={loading} user={user}/>
          ))
          }
        </div>

        <div className={'saved_games_container'}>
          <div className='saved_games_header'>
            <h1 className={'saved_games_title'}>Saved Games</h1>
          </div>
          { userProfile.savedGames.map((game, index) => (
            <GameCard style={mount ? { animationDelay: `${index * 0.24}s` }: {}} key={`${stableId}-${index}`} index={index} mount={mount} setMount={setMount}
            gameIgdbId={game.igdbId} setGameId={setGameId} coverUrl={game.coverUrl} loading={loading} user={user}/>
          ))
          }
        </div>
      </div>

    </section>
  </>
  );
}

export default DashBoardPage;