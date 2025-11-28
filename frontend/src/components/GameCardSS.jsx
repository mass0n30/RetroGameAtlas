import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/components/card.module.css';
import {Loader } from 'lucide-react';

function GameCardSS(props) {

    const [loading, setLoading] = useState(true);
   // eslint-disable-next-line react/prop-types
   const {gameId, randomScreenshot, length, index, mount} = props;

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
      <div className={styles.cardss_loader_container} style={mount ? { animationDelay: `${index * 0.24}s` }: {}}>
        <div className={styles.cardss_loader} width="400" height="267">
            <Loader size={48} className="spinner"color={'#1a2b29ad'}  />
         </div>
      </div>
    ) : (
    length && length != 0 ? (
      <button onClick={() => handleNavigate()} className={styles.card_button} style={mount ? { animationDelay: `${index * 0.24}s` }: {}}>
        <div className={styles.ss_card} style={mount ? { animationDelay: `${index * 0.24}s` }: {}}>
          <img
          className={styles.ss_card_image}
            width="400"
            height="267"
            src={randomScreenshot}
            alt=""
          />
        </div>
      </button>
    ) : (
      <></>
    ))
  }   
  </>
  )};
export default GameCardSS;