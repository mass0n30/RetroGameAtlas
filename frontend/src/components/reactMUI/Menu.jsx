import { Menu } from '@base-ui-components/react/menu';
import styles from '../../styles/components/menu.module.css';
import { useNavigate, Outlet, useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { Ellipsis } from 'lucide-react';
import SnackBarAlert from './Alerts';

// eslint-disable-next-line react/prop-types
export default function NavMenu({setMount, guest}) {

  const [alertGuest, SetAlertGuest] = useState(false);

  const navigate = useNavigate();


  //setting mount to keep loader cards upon nav back?
  function handleNavigate(dashboard) {
    if (guest) { SetAlertGuest(true) 

    } else if (dashboard) {
      navigate('/home/dashboard');  
      setMount(false);
    } else {
      navigate('/home/saved');
      setMount(false);
    }
  };

  function handleSettingsNav() {
    navigate('home/settings');
    setMount(false);
  };

  function handleLogOut() {
    localStorage.removeItem("usertoken");
    navigate("/");
  };

  return (
    <>
    <SnackBarAlert open={alertGuest} setOpen={SetAlertGuest} status={guest} msg={'Signup for User Features'}/>
    <Menu.Root>
      <Menu.Trigger className={styles.Button}>
       <span className='mainIcons'><Ellipsis width={'80%'} size={'auto'}/></span> 
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner className={styles.Positioner} sideOffset={10}>
          <Menu.Popup className={styles.Popup}>

            <Menu.Item className={styles.Item} onClick={() => handleNavigate(true)}>Dashboard</Menu.Item>
            <Menu.Separator className={styles.Separator} />
            <Menu.Item className={styles.Item} onClick={() => handleNavigate()}>Saved Games</Menu.Item>
            <Menu.Separator className={styles.Separator} />
            <Menu.Item className={styles.Item}>Settings</Menu.Item>
            <Menu.Separator className={styles.Separator} />
            { guest ? (
              <Menu.Item className={styles.Item} onClick={() => handleLogOut()}>Logout Guest</Menu.Item>
            ) : (
              <Menu.Item className={styles.Item} onClick={() => handleLogOut()}>Log Out</Menu.Item>
            )}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
    </>
  );
}

