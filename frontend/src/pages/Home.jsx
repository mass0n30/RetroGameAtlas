{/* import { useState, useEffect } from 'react' */}
import { useParams, Outlet } from "react-router-dom";
import { useEffect, useState,  } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import CustomSpinner from "../components/Spinner";


function Home() {

  // state data
  const [user, SetUser] = useState(null);

  const [categoryData, setCategoryData] = useState();
  const [platform, setPlatform] = useState();
  const [genre, setGenre] = useState();
  const [developer, setDeveloper] = useState();
  const [year, setYear] = useState();

  const [games, setGames] = useState([]);
  const [gameId, setGameId] = useState(null);
  const [search, setSearch] = useState("");


  // loading state settings
  const [loading, SetLoading] = useState(true);
  const [success, SetSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [toggle, setToggle] = useState(false);

  const token = localStorage.getItem('usertoken');

  //spinner upon mount with delay
  useEffect(() => {
    const timer = setTimeout(() => {
      SetLoading(false);
    }, 2000);

    const successTimer = setTimeout(() => {
      SetSuccess(false);
    }, 5000);
    return () => clearTimeout(timer, successTimer); 
  } ,[loading, SetSuccess, SetLoading]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:5000/home', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json', 
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        SetUser(result.user); // (only non sensitive user data from backend)
        setCategoryData(result.categoryData);
        // reset boolean fetch after updated posts fetch
      } catch (error) {
        setError(error);
      } 
    };
    fetchUser();
  }, [token]);  // token dependency?

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  if (loading  || !user || !categoryData ) {
    return (
      <>
      <Navbar toggle={toggle} setToggle={setToggle} setSearch={setSearch}/>
        <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center", marginTop: "2rem" }}>
          <CustomSpinner/>
        </div>
      <Footer/>
      </>
    );
  }

    return (
    <>
    <Navbar toggle={toggle} setToggle={setToggle} search={search} setSearch={setSearch}/>
    <main>
    <aside
      style={{
        transform: toggle ? 'translateX(0)' : 'translateX(-100%)',
        width: toggle ? 'var(--sidebar-width)' : '0',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        }} >
        <SideBar
          platform={platform}
          genre={genre}
          developer={developer}
          year={year}
          setPlatform={setPlatform}
          setGenre={setGenre}
          setDeveloper={setDeveloper}
          setYear={setYear}
          categoryData={categoryData.allData}
        />
      </aside>
      <Outlet context={{loading, success, SetLoading, SetSuccess, 
        user, gameId, setGameId, games, setCategoryData, setGames, search, setSearch, genre, platform, developer, year }} />
    </main>
    </>
  )
}

export default Home;