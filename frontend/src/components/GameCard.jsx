import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/components/card.module.css';


function GameCard(props) {

   // eslint-disable-next-line react/prop-types
   const {gameId, coverUrl, index, mount} = props;

   // maybe replace <button> with React Button for more custom options?
   const navigate = useNavigate();

   const handleNavigate = () => {
      navigate(`/home/details/${gameId}` );
   }

   return (
    <>
      <button onClick={(() => handleNavigate())} >
         <div className={styles.card} style={mount ? { animationDelay: `${index * 0.07}s` }: {}} >
            <img className={styles.card_image} src={coverUrl} width="264" height="374"></img>
         </div>
      </button>

    </>
   );
}

export default GameCard;