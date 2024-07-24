import './App.css';
import HomeModule from './components/HomeModule';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
          <li className="dropdown">
            <a href="#" className="dropbtn">Projects</a>
            <div className="dropdown-content">
              <a href="#ai_shayari">ai_shayari</a>
              <a href="#identifiers">identifiers</a>
            </div>
          </li>
          
        </ul>
      </nav>
      {document.location.hash === "#home" && <HomeModule />}
    </div>
  );
}

export default App;
