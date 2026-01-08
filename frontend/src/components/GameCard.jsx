import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/components/card.module.css';
import { Loader } from 'lucide-react';
import { CardSkeleton } from './Skeleton';

function GameCard(props) {

   const [loading, setLoading] = useState(true);
   // eslint-disable-next-line react/prop-types
   const {gameId, coverUrl, index, mount, setMount} = props;

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
      navigate(`/home/details/${gameId}` );
      setMount(false);
   }

   return (


    <>
     { coverUrl ? ( 
      <div className={styles.card_loader_container} style={mount ? { animationDelay: `${index * 0.12}s` }: {}} disabled>
      { loading ? (
         <CardSkeleton/>
      ) : (
         <button onClick={(() => handleNavigate())} className={styles.card_button} style={mount ? { animationDelay: `${index * 0.24}s` }: {}}>
            <div className={styles.card}  >
               <img className={styles.card_image} src={coverUrl} width="264" height="374"></img>
            </div>
         </button>
      )}
      </div>
    ) : (
      <></>
    )}
   </>
   );
}

export default GameCard;