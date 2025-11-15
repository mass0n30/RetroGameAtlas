import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/components/card.module.css';


function GameCard(props) {

   // eslint-disable-next-line react/prop-types
   const {gameId, coverUrl, index} = props;

   // maybe replace <button> with React Button for more custom options?
   const navigate = useNavigate();

   const handleNavigate = () => {
      navigate(`/home/details/${gameId}` );
   }

   return (
    <>
      <button onClick={(() => handleNavigate())}>
         <div className={styles.card} >
            <img className={styles.card_image} src={coverUrl} width={180} height={255}></img>
         </div>
      </button>

    </>
   );
}

export default GameCard;