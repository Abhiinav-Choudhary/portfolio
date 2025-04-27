// import React from 'react'
import Header from './Header'

import React from 'react'
import '../styles/work.css'

const projects = [
  {
    title: "Smart Attendance System",
    description: "A full-stack app with face recognition to mark attendance, built using React, Node.js, and MongoDB.",
    link: "https://github.com/yourusername/attendance-app"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio showcasing skills, projects, and contact info, built with React and styled with custom CSS.",
    link: "https://your-portfolio-link.com"
  },
  {
    title: "Meme Channel Bot",
    description: "A fun bot that scrapes viral memes and posts them on Instagram using Python automation.",
    link: "https://github.com/yourusername/meme-bot"
  }
]

function Works() {
  return (
    <>
    <Header/>
    <div className="work-container">
      <h2 className="work-title">My Work</h2>
      <div className="work-grid">
        {projects.map((project, index) => (
          <div className="work-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Works
