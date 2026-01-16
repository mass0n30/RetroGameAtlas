import { useEffect, useState } from 'react';
import styles from '../styles/components/nav.module.css';
import { useDebounce } from '../helpers';
import { Link, useNavigate } from 'react-router-dom';
import  NavMenu  from './reactMUI/Menu';
import  {House} from 'lucide-react';
import { ArrowLeft, Ellipsis, X, PanelsTopLeft } from 'lucide-react';
import { resetFilters } from '../helpers';


// eslint-disable-next-line react/prop-types
export default function Navbar({ toggle, setToggle, setSearch, search, discover, setDiscover, open, setOpen, setMount
  // eslint-disable-next-line react/prop-types
  ,setPlatform, setDeveloper, setGenre, setYear, setOrder, setScreenshotMode, guest
}) {

  const [searchInput, setSearchInput] = useState(search || '');

  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const navigate = useNavigate();

  const handleSearch = (value) => {
    resetFilters(setPlatform, setDeveloper, setGenre,
    setYear, setOrder, null, setScreenshotMode, null, setOpen, setDiscover);
    (discover) ? setDiscover(false) : null;
    (open) ? setOpen(new Set()) : null;
    navigate('/home');
    setSearch(value);
  };

  const handleNavHome = () => {
    navigate('/home');
  };

  const handleNavBack = () => {

    navigate(-1);
  };


  return (
    <>
    <nav className={styles.navbar}>
      <div className={styles.navLeftContainer}>
         <div className={styles.navContainer}>
          <button className={styles.btn} onClick={() => handleToggle()}>
            { toggle ? (
             <span className='mainIcons'><X width={'80%'} size={'auto'} className={styles.btnX}/></span> 
            ) : (
            <span className='mainIcons'><PanelsTopLeft width={'80%'} size={'auto'} className={styles.btnP}/></span>  
            )}
          </button>
        </div>
        <div className={styles.navContainer}>
          <button className={styles.btn} onClick={() => handleNavBack()}>
             <span className='mainIcons'><ArrowLeft width={'80%'} className={styles.btnA} size={'auto'}/></span> 
          </button>

        </div>
        <div className={styles.logoContainer}>
          <div className={styles.logoTxtContainer}>
            <h1 className={styles.logoTxt}>RetroGameAtlas</h1> 
          </div>
          <div className={styles.logoPngContainer}>
            <img className={styles.logoPng} src='/logo/originallogo.png' />
          </div>
        </div>

      </div>
      <div className={styles.navMiddleContainer}>
        <form
          className={styles.searchBarContainer}
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(searchInput);
          }}>
          <input 
            type="text" 
            placeholder="Search games..." 
            value={searchInput} 
            onChange={(e) => {
              setSearchInput(e.target.value);
              if (e.target.value === '') {
                setSearch('');
              }
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
            <NavMenu setMount={setMount} guest={guest}></NavMenu>
          </div>
      </div>

    </nav>
  </>
  );
}


