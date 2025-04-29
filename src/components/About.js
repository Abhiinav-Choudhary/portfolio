
import Header from './Header'
// import '../styles/about.css'

import React from 'react';
import '../styles/about.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa'; // For Tech Stack Icons

function About() {
  return (
    <>
    <Header/>
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src="/abhisanket.jpg" alt="Profile" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hey! I'm a passionate developer and Big Data Science Engineering student who loves creating web apps that solve real-world problems. 
            With a strong foundation in frontend and backend development, I enjoy building full-stack applications and exploring new tech like AI and cloud computing.
          </p>
          <p>
            I thrive in team environments, love clean UI design, and I'm always learning something new—from JavaScript frameworks to system design and dev tools.
          </p>
          <p>
            When I'm not coding, you'll find me hitting the gym or hunting for the latest meme-worthy trends on social media!
          </p>

          <a href="/Abhinav.pdf" download="Abhinav_Resume.pdf" className="resume-btn">Download My Resume</a>

          <h3>Tech Stack</h3>
          <div className="tech-stack">
            <FaHtml5 title="HTML5" />
            <FaCss3Alt title="CSS3" />
            <FaJs title="JavaScript" />
            <FaReact title="React.js" />
            <FaNodeJs title="Node.js" />
            <FaPython title="Python" />
            <FaDatabase title="MongoDB" />
          </div>

          <h3>Fun Facts</h3>
          <ul className="fun-facts">
            <li>💪 I work out regularly to keep my mind and body healthy!</li>
            <li>🎮 I love playing video games during my downtime.</li>
            <li>📚 I’m a huge fan of sci-fi books and movies.</li>
            <li>🎧 Music is my fuel for productivity, especially EDM and lo-fi.</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
