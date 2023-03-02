import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  //hooks
  const [isClicked, setIsClicked] = useState(false);
  const [button, setButton] = useState(true);

  //functions
  const handleClick = () => setIsClicked(!isClicked);
  const hideMobileMenu = () => {
    setIsClicked(false);
  };
  const displayButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    displayButton();
  }, []);

  window.addEventListener('resize', displayButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={hideMobileMenu}>
          <span className="fa-solid fa-heart"></span>NAILED IT
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <span
            className={isClicked ? 'fa-solid fa-house' : 'fa-solid fa-bars'}
          />
        </div>
        <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-choice">
            <Link to="/" className="nav-choice-links" onClick={hideMobileMenu}>
              ACCUEIL
            </Link>
          </li>
          <li className="nav-choice">
            <Link to="/designs" className="nav-choice-links" onClick={hideMobileMenu}>
              NOS DESIGNS
            </Link>
          </li>
          <li className="nav-choice">
            <Link to="/prices" className="nav-choice-links" onClick={hideMobileMenu}>
              NOS TARIFS
            </Link>
          </li>
          <li className="nav-choice">
            <Link to="/bookUs" className="book-link" onClick={hideMobileMenu}>
              RESERVER<span className="fa-solid fa-calendar-day"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
