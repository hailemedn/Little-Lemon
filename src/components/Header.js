import './styles.css'
import logo from "../assets/Logo .svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './Homepage';
import BookingPage from './BookingPage';


const Header = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <header className="wrapper">
      <img src={logo} alt="logo"></img>
      <nav className="header-nav">
        <ul id="navbar">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservation">Reservation</Link>
          </li>
          <li>
            <Link to="/order-online">Order online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <div id="mobile" onClick={handleClick}>
          <FontAwesomeIcon icon={clicked ? faX : faBars} />
        </div>
      </nav>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/reservation' element={<BookingPage />} />
      </Routes>
    </header>
  );
};

export default Header;
