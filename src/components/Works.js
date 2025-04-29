// import React from 'react'
import Header from './Header'

import React from 'react'
import '../styles/work.css'

const projects = [
  {
    title: "Smart Attendance System",
    description: "A full-stack app with face recognition to mark attendance, built using React, Node.js, and MongoDB.",
    link: "https://github.com/Abhiinav-Choudhary/attendence.git"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio showcasing skills, projects, and contact info, built with React and styled with custom CSS.",
    link: "https://github.com/Abhiinav-Choudhary/portfolio.git"
  },
  {
    title: "ChatBot",
    description: "A fun bot that can tell all the detailed information about a specific shop or company data using Gemeni api automation.",
    link: "https://github.com/Abhiinav-Choudhary/chatbot.git"
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
