import { useEffect, useState } from 'react';
import styles from '../styles/components/nav.module.css';
import { useDebounce } from '../helpers';
import { Link, useNavigate } from 'react-router-dom';
import NavMenu from './reactMUI/Menu';



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


  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeftContainer}>
        <div className={styles.toggleContainer}>
            <button onClick={() => handleToggle()}>
              <img
                src={toggle ? '/icons/close.png' : '/icons/menu.png'}
                alt="toggle sidebar"
              />
            </button>
          </div>
        <Link to={'/home'} className={styles.linklogo}>
          <div className={styles.logoContainer}>
            RetroGameAtlas
          </div>
        </Link>

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
        <div className={styles.profile}>
            <NavMenu setMount={setMount}></NavMenu>
        </div>
      </div>

    </nav>
  );
}


