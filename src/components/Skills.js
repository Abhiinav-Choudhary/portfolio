import React from 'react'
import Header from './Header'
import '../styles/skills.css'


const skills = [
  { name: 'HTML', level: 'Advanced' },
  { name: 'CSS', level: 'Advanced' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React.js', level: 'Intermediate' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Intermediate' },
  { name: 'Python', level: 'Intermediate' },
  { name: 'Golang', level: 'Beginner' },
];
function Skills() {

  

  return (
    <>
    <Header/>

    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
    </>
    

  )
}

export default Skills