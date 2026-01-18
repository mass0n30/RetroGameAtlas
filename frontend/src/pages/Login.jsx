
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { CircleUserRound } from "lucide-react";
import styles from '../styles/components/form.module.css';
import  { formSkeleton }  from '../components/Skeleton';
import CustomSpinner from '../components/Spinner';

// eslint-disable-next-line react-refresh/only-export-components

function Login() {

  const [loading, setLoading] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

    //spinner upon mount with delay
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      return () =>  {clearTimeout(timer)}; 
    });
  
  
  useEffect(() => {
    const token = localStorage.getItem("usertoken");
    
    // eventually navigate to uesr dashboard instead
    if (token) {
      navigate("/home", {replace: true});
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch(`${import.meta.env.VITE_API_URL}/`, {
        mode: 'cors',
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(async (response) => {

      const data = await response.json();
    
      if (data.error) {
        setError(data.error);
        return;
      }

      if (response.status == 401) {
        setError('Wrong email or password');
        return;
      }

      if (response.status > 401) {
        setError("server error");
        return;
      }
    // store token locally and navigate to home route where GET request fetch
      localStorage.setItem('usertoken', data.token);

      if (!data.error) {
        navigate("/home");
      }
    })
  };

  const handleGuestSubmit = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/home/guest`, {
        mode: 'cors',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(async (response) => {

      const data = await response.json();
    
      if (data.error) {
        setError(data.error);
        return;
      }

      if (!data.error) {
        navigate("/home");
      }
    })
  };

  if (loading) 
    return (
      <>
        <div className={styles.loginContainer}>
          <div className={styles.formContainerLoading} >
            <CustomSpinner />
          </div>
        </div>
      </>
    );

  return (
    <>
    <div className={styles.loginContainer}>

      <div className={styles.formContainerOuter}  >
        <div className={styles.formContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.logoImage}>
             <img className={styles.logo} src='/logo/fulllogo.png'></img>
          </div>
          <div className={styles.logoText}>Discover. Play. Repeat.</div>
          <div className={styles.logoTextTag}>Track and explore 25,000+ games across platforms.</div>
        </div>
        {error ? (
          <span style={{ color: 'red' }}>Error was encountered: {error}</span>
        ) : null}
        <form 
          onSubmit={handleSubmit} 
          method="POST" 
          className={styles.loginForm} 
          autoComplete="off"
        >
          <div className={styles.form_row}>
            <input 
             className={styles.formInput}
             onChange={(e) => setUsername(e.target.value)}
             id="email" 
             name="username" 
             autoComplete="off" 
             placeholder="Enter Email" 
             type="text" 
            />
          </div>
          <div className={styles.form_row}>
            <input 
            className={styles.formInput}
            onChange={(e) => setPassword(e.target.value)} 
            id="password" 
            name="password"  
            autoComplete="new-password" 
            placeholder="Enter Password" 
            type ="password" 
            />
          </div>
          <div className={styles.form_row}>
            <button type="submit" className={styles.form_button}>Continue</button>
          </div>
        </form>
          <div className={styles.form_row} id="signUp">
            <div className={styles.form_link} >
              Not a member? 
            </div>
            <Link to="/sign-up">
              <button className={styles.form_button_signup}>Sign Up!</button>
            </Link>
          </div>
          <div className={styles.form_row}>
            <button className={styles.guestBtn} onClick={handleGuestSubmit}>
              <div className={styles.guestContainer}>
                  <div>Continue as Guest</div>
                  <CircleUserRound/>
              </div>
           </button>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Login;