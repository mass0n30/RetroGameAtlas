import * as React from 'react';
import Popover from '@mui/material/Popover';
import { Button } from '@mui/material';
import { Share2 } from 'lucide-react';
import styles from '../../styles/components/details.module.css';
import SocialsShare from '../ShareSocials';
import { width } from '@mui/system';

export default function SocialPopup() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'social-popup' : undefined;

  return (
    <div>
      <Button
        className={styles.sharebtn}
        aria-describedby={id}
        type="button"
        onClick={handleClick}>
        <Share2 className={styles.iconsShare} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right', 
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
          },
        }}
      >
        <SocialsShare />
      </Popover>
    </div>
  );
}

