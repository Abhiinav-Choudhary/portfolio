import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
// import Work from './components/Works';
import Contact from './components/Contact';
import Home from './components/Home'; // optional if you have a landing page
import Works from './components/Works'
// import Header from './components/Header'; // optional navigation

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
