import { Menu } from '@base-ui-components/react/menu';
import styles from '../styles/components/menu.module.css';

export default function NavMenu(handleNavigate) {

  
  return (
    <Menu.Root>
      <Menu.Trigger className={styles.Button}>
        Options 
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner className={styles.Positioner} sideOffset={10}>
          <Menu.Popup className={styles.Popup}>

            <Menu.Item className={styles.Item} onClick={() => handleNavigate()}>Saved Games</Menu.Item>
            <Menu.Separator className={styles.Separator} />
            <Menu.Item className={styles.Item}>Settings</Menu.Item>
            <Menu.Separator className={styles.Separator} />
            <Menu.Item className={styles.Item}>Log Out</Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

