import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomeModule from './components/HomeModule';
import ContactUs from './components/ContactUs';
import About from './components/About';

function App() {
  const [projects, setProjects] = useState(['ai_shayari', 'identifiers']);

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li className="dropdown">
              <Link to="/" className="dropbtn">Projects</Link>
              <div className="dropdown-content">
                {projects.map((card, index) => (
                  <Link key={index} to={`/${card}`}>{card}</Link>
                ))}
              </div>
            </li>
            
          </ul>
        </nav>
        <Routes>
          <Route path="/home" element={<HomeModule projects={projects} />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* <Route path="/ai_shayari" element={<AiShayari />} /> */}
          {/* <Route path="/identifiers" element={<Identifiers />} /> */}
        </Routes>
      </div>

    </Router>
  );
}

export default App;