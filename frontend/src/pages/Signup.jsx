
{/* import { useState, useEffect } from 'react' */}
{/*maybe import local styles */}
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styles from '../styles/components/form.module.css';

function SignUp() {
  const [user, setUser] = useState({
    fname: '',
    lname: '',
    alias: '',
    email: '',
    password: '',
    passwordconfirm: ''
  });
  const [error, setError] = useState([]);
  
  const navigate = useNavigate();

  //validate and sanitize for user exp frontend, deep validation backend
const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/sign-up`, {
      mode: "cors",
      method: "POST",
      credentials: 'include',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: user.fname,
        lastname: user.lname,
        alias: user.alias,
        username: user.email,
        password: user.password,
        passwordconfirm: user.passwordconfirm,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      setError(prevState => [...prevState, data.errors || "Something went wrong"]);
      return;
    }

    if (response.ok || response.status === 201) {
      navigate("/")
    }
  } catch (err) {
    console.error(err);
    setError(["Network or server error"]);
  }
};


  //handler function for user info
  const updateInfo = (value, propType) => {

    const changeUser = {...user, [propType]:value};

    setUser(changeUser);
  };


  return (
    <>  
        
    <div className={styles.formContainerAlt}>
        <div className={styles.logoContainerAlt}>
          <img className={styles.logoSignup} src='/logo/fulllogo.png'></img>
          <div className={styles.logoText}>Discover. Play. Repeat.</div>
        </div>

      <div className={styles.signupContainer}>
      {error.length > 0 ? (
        <ul>
          <span style={{ color: 'red' }}>Please fix the following errors:</span>
          {error[0].map((err, index) => (
            <li key={index}>{err.msg}</li>
          ))}
        </ul>
      ) : null}
        <form 
          onSubmit={handleSubmit} 
          method="POST" 
          className={styles.signupForm}
          id="signupForm" 
          autoComplete="off"
        >
          <div className={styles.form_row}>
            <input
              id="firstname"
              className={styles.formInput}
              name="firstname"
              autoComplete="off"
              placeholder="First Name"
              type="text"
              onChange={(event) => updateInfo(event.target.value, "fname")}
            />
          </div>

          <div className={styles.form_row}>
            <input
              id="lastname"
              className={styles.formInput}
              name="lastname"
              autoComplete="off"
              placeholder="Last Name"
              type="text"
              onChange={(event) => updateInfo(event.target.value, "lname")}
            />
          </div>

          <div className={styles.form_row}>
            <input
              id="email"
              className={styles.formInput}
              name="username"
              autoComplete="off"
              placeholder="Email"
              type="email"
              onChange={(event) => updateInfo(event.target.value, "email")}
            />
          </div>

          <div className={styles.form_row}>
            <input
              id="alias"
              className={styles.formInput}
              name="alias"
              autoComplete="off"
              placeholder="Username"
              type="text"
              onChange={(event) => updateInfo(event.target.value, "alias")}
            />
          </div>

          <div className={styles.form_row}>
            <input
              id="password"
              className={styles.formInput}
              name="password"
              type="password"
              placeholder="Password"
              onChange={(event) => updateInfo(event.target.value, "password")}
            />
          </div>

          <div className={styles.form_row}>
            <input
              id="passwordconfirm"
              className={styles.formInput}
              name="passwordconfirm"
              type="password"
              placeholder="Repeat Password"
              onChange={(event) => updateInfo(event.target.value, "passwordconfirm")}
            />
          </div>

          <div className={styles.formBtns}>
            <button type="submit" className={styles.form_button} id="signupBtn">Sign Up</button>
            <div className={styles.form_link} >
              Already a member? 
            </div>
            <Link to="/">
              <button className={styles.form_button_signup} type="button">Login</button>
            </Link>
          </div>
        </form>
      </div>
      </div>

    </>
  )
}

export default SignUp;