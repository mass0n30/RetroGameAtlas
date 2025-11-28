import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/components/card.module.css';
import { Loader } from 'lucide-react';

function GameCard(props) {

   const [loading, setLoading] = useState(true);
   // eslint-disable-next-line react/prop-types
   const {gameId, coverUrl, index, mount} = props;

  //spinner upon mount with delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); 
  } ,[loading, setLoading]);

   // maybe replace <button> with React Button for more custom options?
   const navigate = useNavigate();

   const handleNavigate = () => {
      navigate(`/home/details/${gameId}` );
   }

   return (
    <>
    { loading ? (
      <div className={styles.card_loader_container} style={mount ? { animationDelay: `${index * 0.07}s` }: {}}>
        <div className={styles.card_loader} width="264" height="374">
            <Loader size={48} className="spinner"color={'#1a2b29ad'}  />
         </div>
        </div>
    ) : (
      <button onClick={(() => handleNavigate())} className={styles.card_button}>
         <div className={styles.card} style={mount ? { animationDelay: `${index * 0.07}s` }: {}} >
            <img className={styles.card_image} src={coverUrl} width="264" height="374"></img>
         </div>
      </button>
    )}
    </>
   );
}

export default GameCard;