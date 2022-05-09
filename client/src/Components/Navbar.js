import { useState } from "react";
import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div>
      <nav className="navigation">
        <a href="http://localhost:3000/Technoriat/acceuil">
          <img
            href="http://localhost:3000/Technoriat/acceuil"
            className="logo-Technoriat"
            src={require("../styles/img/Logo Technoriat.png")}
            alt="Technoriat"
          />
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <Link className="nav" to="/Technoriat/acceuil">
                Acceuil
              </Link>
            </li>
            <li>
              <Link className="nav" to="/Technoriat/Technoriat">
                Technoriat
              </Link>
            </li>
            <li>
              <Link className="nav" to="/Technoriat/equipe">
                Equipe
              </Link>
            </li>
            <li>
              <Link className="nav" to="/Technoriat/Factoriat">
                Factoriat
              </Link>
            </li>
            <li>
              <Link className="nav" to="/Technoriat/Journal">
                Journal
              </Link>
            </li>
            <li>
              <Link className="nav" to="/Technoriat/contact">
                Contact
              </Link>
            </li>
            <li>
              <button className="bt" type="button">
                <i className="fa-solid fa-right-to-bracket fa-lg"> </i>
                <Link className="text" to="/Technoriat/Login">
                  Se connecter
                </Link>
                {/* <span className='text'>Se connecter</span > */}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
