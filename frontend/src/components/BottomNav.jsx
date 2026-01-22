import styles from '../styles/components/nav.module.css';
import { useNavigate } from 'react-router-dom';
import  NavMenu  from './reactMUI/Menu';
import  {House} from 'lucide-react';
import { ArrowLeft, X, PanelsTopLeft } from 'lucide-react';

// eslint-disable-next-line react/prop-types
export default function BottomNav({toggle, setToggle, setSearch, search, discover, setDiscover, open, setOpen, setMount, setPlatform, setDeveloper, setGenre, setYear, setOrder, setScreenshotMode, guest}) {
  
    const handleToggle = () => {
      toggle ? setToggle(false) : setToggle(true);
    };
  
    const navigate = useNavigate();
  
  
    const handleNavHome = () => {
      navigate('/home');
    };
  
    const handleNavBack = () => {
  
      navigate(-1);
    };
  

  return (
    <div className={styles.bottomNavBar}>

      <div className={styles.navLeftContainerAlt}>
        <div className={styles.navLeftBtnContainer}>
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
        </div>
      </div>

      <div className={styles.navRightContainerAlt}>
       <div className={styles.navRightBtnContainer}>
        <div className={styles.homebtncontainer}>
          <button className={styles.btn} onClick={() => handleNavHome()}>
           <span className='mainIcons'><House width={'80%'} size={'auto'} className={styles.btnH}/></span> 
          </button>
        </div>
          <div className={styles.navmenucontainer}>
           <NavMenu setMount={setMount} width={'80%'} size={'auto'} guest={guest} className={styles.btnH}></NavMenu>
          </div>
        </div>

      </div>
    </div>  
  )}