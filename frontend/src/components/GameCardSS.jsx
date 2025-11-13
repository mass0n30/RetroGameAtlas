import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/components/card.module.css';


function GameCardSS(props) {

   // eslint-disable-next-line react/prop-types
   const {gameId, screenshots, length} = props;

   console.log(screenshots, "from GameCardSS");
   let randomSS = 0;
   let screenshot = null;

   if (length && length != 0) {
     randomSS = Math.floor(Math.random() * (length));
     screenshot = screenshots[randomSS];
   }

   // maybe replace <button> with React Button for more custom options?
   const navigate = useNavigate();

   const handleNavigate = () => {
      navigate(`/home/details/${gameId}` );
   }

   return (
    <>
    { length && length != 0 ? (
      <button onClick={(() => handleNavigate())}>
         <div className={styles.card}>
            <div className={styles.card_cover_container}>
               <img className={styles.card_image} src={screenshot.url}></img>
            </div>
         </div>
      </button>
    ) : (
      <></>
    )}

    </>
   );
}

export default GameCardSS;