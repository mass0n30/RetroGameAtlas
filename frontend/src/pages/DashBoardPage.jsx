import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { getCompletedGamesStats } from '../helpers';
import CustomSpinner from '../components/Spinner';
import { LayoutGrid, TableProperties } from 'lucide-react';
import GameCard from '../components/GameCard';
import { DashBoardContainerSkeleton } from '../components/Skeleton';

const stableId = 'dashboard_game_card';


function DashBoardPage() {
  const {user, userProfile, guest, query, limit, setGameId, games, orderData, orderDirection, discover, setDiscover, screenshotMode, setScreenshotMode, open, setOpen,
  setGames, index, setIndex, mount, setMount} = useOutletContext();

  const [loading, setLoading] = useState(true);
  const [runType, setRunType] = useState('Platform');
  const [layoutStats, setLayoutStats] = useState('grid');
  const [category, setCategory] = useState(null);
  const [completedGames, setCompletedGames] = useState(userProfile?.completedGames || []);

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
    <section>

    </section>
  </>
  );
}

export default DashBoardPage;