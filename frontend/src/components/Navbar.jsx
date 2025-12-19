import { useEffect, useState } from 'react';
import styles from '../styles/components/nav.module.css';
import { useDebounce } from '../helpers';
import { Link, useNavigate } from 'react-router-dom';
import NavMenu from './reactMUI/Menu';
import  {House} from 'lucide-react';
import { ArrowLeft, Ellipsis, X, PanelsTopLeft } from 'lucide-react';



// eslint-disable-next-line react/prop-types
export default function Navbar({ toggle, setToggle, setSearch, search, discover, setDiscover, open, setOpen, setMount}) {

  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const handleSearchChange = () => {
    (discover) ? setDiscover(false) : null;
    (open) ? setOpen(new Set()) : null;
  };

  const navigate = useNavigate();

  const handleSearch = (value) => {
    setSearch(value);
    navigate('/home');
  };

  const handleNavHome = () => {
    navigate('/home');
  };

  const handleNavBack = () => {

    navigate(-1);
  };


  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeftContainer}>
          <button className={styles.toggleBtn} onClick={() => handleToggle()}>
            { toggle ? (
             <span className='mainIcons'><X width={'80%'} size={'auto'} className={styles.btnX}/></span> 
            ) : (
            <span className='mainIcons'><PanelsTopLeft width={'80%'} size={'auto'}/></span>  
            )}
          </button>
        <div className={styles.navContainer}>
          <button className={styles.btn} onClick={() => handleNavBack()}>
             <span className='mainIcons'><ArrowLeft width={'80%'} className={styles.btnA} size={'auto'}/></span> 
          </button>

        </div>
          <div className={styles.logoContainer}>
            RetroGameAtlas
          </div>

      </div>
      <div className={styles.navMiddleContainer}>
        <form
          className={styles.searchBarContainer}
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(search);
          }}>
          <input 
            id='searchInput'
            type="text" 
            placeholder="Search games..." 
            value={search} 
            onChange={(e) => {
              setSearch(e.target.value);
              handleSearchChange();
            }} 
            className={styles.searchInput}
          />
          <button className={styles.searchButton} type="submit">
            <img src="/icons/search.png" alt="search" />
          </button>
        </form>
      </div>

      <div className={styles.navRightContainer}>
        <div className={styles.homebtncontainer}>
          <button className={styles.btn} onClick={() => handleNavHome()}>
           <span className='mainIcons'><House width={'80%'} size={'auto'} className={styles.btnH}/></span> 
          </button>
        </div>
          <div className={styles.navmenucontainer}>
            <NavMenu setMount={setMount}></NavMenu>
          </div>
      </div>

    </nav>
  );
}


