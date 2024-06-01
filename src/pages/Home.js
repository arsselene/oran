import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from"../assets/pexels-christian-heitz-285904-842711.jpg";
import "../styles/Home.css";
function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
          <div className="headerContainer" >
      <h1>where to go</h1>
      <p>here's where its begins</p>
      <Link to="/menu">
      <button>see now</button>
      </Link>
      </div>
    </div>
  )
}

export default Home;