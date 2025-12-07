import { Menu } from '@base-ui-components/react/menu';
import styles from '../../styles/components/menu.module.css';
import { useNavigate, Outlet, useOutletContext } from 'react-router-dom';
import { Ellipsis } from 'lucide-react';
// eslint-disable-next-line react/prop-types
export default function NavMenu({setMount}) {

  const navigate = useNavigate();

  //setting mount to keep loader cards upon nav back?
  function handleNavigate() {
    navigate('/home/saved');
    setMount(false);
  }

  function handleLogOut() {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Menu.Root>
      <Menu.Trigger className={styles.Button}>
        <Ellipsis/>
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner className={styles.Positioner} sideOffset={10}>
          <Menu.Popup className={styles.Popup}>

            <Menu.Item className={styles.Item} onClick={() => handleNavigate()}>Saved Games</Menu.Item>
            <Menu.Separator className={styles.Separator} />
            <Menu.Item className={styles.Item}>Settings</Menu.Item>
            <Menu.Separator className={styles.Separator} />
            <Menu.Item className={styles.Item} onClick={() => handleLogOut()}>Log Out</Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

