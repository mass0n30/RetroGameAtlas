import { Menu } from '@base-ui-components/react/menu';
import styles from '../styles/components/menu.module.css';

export default function NavMenu() {
  return (
    <Menu.Root>
      <Menu.Trigger className={styles.Button}>
        Options 
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner className={styles.Positioner} sideOffset={8}>
          <Menu.Popup className={styles.Popup}>
            <Menu.Arrow className={styles.Arrow}>
              
            </Menu.Arrow>
            <Menu.Item className={styles.Item}>Saved Games</Menu.Item>
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

