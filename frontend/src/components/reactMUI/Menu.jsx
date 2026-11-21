import { Menu } from '@base-ui-components/react/menu';
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

    </>
  );
}

