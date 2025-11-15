import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/components/card.module.css';


function GameCardSS(props) {

   // eslint-disable-next-line react/prop-types
   const {gameId, randomScreenshot, length, index} = props;

 
   // maybe replace <button> with React Button for more custom options?
   const navigate = useNavigate();

   const handleNavigate = () => {
      navigate(`/home/details/${gameId}` );
   }

   return (
    <>
    { length && length != 0 ? (
      <button onClick={() => handleNavigate()}>
        <div className={styles.ss_card} >
          <img
            width={400}
            height={267}
            src={randomScreenshot}
            alt=""
          />
        </div>
      </button>
    ) : (
      <></>
    )}

    </>
   );
}

export default GameCardSS;