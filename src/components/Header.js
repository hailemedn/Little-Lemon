import './styles.css'
import logo from "../assets/Logo .svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservation">Reservation</a>
          </li>
          <li>
            <a href="/order-online">Order online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
        <div id="mobile" onClick={handleClick}>
          <FontAwesomeIcon icon={clicked ? faX : faBars} />
        </div>
      </nav>
    </header>
  );
};

export default Header;