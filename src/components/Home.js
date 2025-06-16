import React from 'react';
import Header from './Header';
import '../styles/home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const move = () => {
    navigate('/contact');
  };

  

  return (
    <>
      <Header />
      <div className="container">
        <div className="intro">
          <div className="text">
            <h1>
              Hi, <br />
              I'm <span className="title" >Abhinav</span><br />
              <span className="work">Web Developer</span>
            </h1>
          </div>
          <button className="btn" onClick={move}>Contact</button>
        </div>

        <div className="profile-pic-wrapper">
          <img
            src="/abhisanket.jpg"
            alt="Abhinav's Profile"
            className="profile-pic"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
