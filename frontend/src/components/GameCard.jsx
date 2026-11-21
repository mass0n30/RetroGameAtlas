import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'lucide-react';
import { CardSkeleton } from './Skeleton';

function GameCard(props) {

   const [loading, setLoading] = useState(true);
   // eslint-disable-next-line react/prop-types
   const {gameId, gameIgdbId, coverUrl, index, mount, setMount} = props;

  //spinner upon mount with delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  } ,[loading, setLoading]);

   //setting mount to keep loader cards upon nav back
   const navigate = useNavigate();

   const handleNavigate = () => {
      navigate(`/home/details/${gameIgdbId}` );
      setMount(false);
   }

   return (


    <>
      <div style={mount ? { animationDelay: `${index * 0.12}s` }: {}} disabled>
      { loading ? (
         <CardSkeleton/>
      ) : (
         <button onClick={(() => handleNavigate())} style={mount ? { animationDelay: `${index * 0.24}s` }: {}}>
            <div>
               <img loading='lazy' decoding='async' src={coverUrl?.replace('t_cover_big', 't_cover_big')}></img>
            </div>
         </button>
      )}
      </div>
   </>
   );
}

export default GameCard;