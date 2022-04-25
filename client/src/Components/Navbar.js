import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="style-1">
        <img
          className="logo-Technoriat"
          src={require("../styles/img/Logo Technoriat.png")}
          alt="Technoriat"
        />
        <a href="#" className="btn">
          Acceuil
        </a>
        <a href="#" className="btn">
          Technoriat
        </a>
        <a href="#" className="btn">
          Notre Equipe
        </a>
        <a href="#" className="btn">
          FACTORIAT
        </a>
        <a href="#" className="btn">
          JOURNAL
        </a>
        <a href="#" className="btn">
          CONTACT
        </a>
        <button className="btn-login" type="submit">
          <span />
          <i className="fa-solid fa-right-to-bracket fa-lg"> </i>
          <span />
          Se connecter
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
