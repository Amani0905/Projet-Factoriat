import React from "react";
import {Link} from 'react-router-dom';
// import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="style-1">
        <img
          className="logo-Technoriat"
          src={require("../styles/img/Logo Technoriat.png")}
          alt="Technoriat"
        />
        <Link to ='/' className="btn"> Acceuil </Link>
        <Link to='/Technoriat' className="btn">Technoriat</Link>
        <Link to ='/Equipe' className="btn">Notre Equipe</Link>
        <Link to ='/Factoriat' className="btn">FACTORIAT</Link>
        <Link to ='/Journal' className="btn">JOURNAL</Link>
        <Link to = '/Contact' className="btn">CONTACT</Link>
        <Link to = '/Login' className="btn">Login</Link>
        <Link to = '/Register' className="btn">Register</Link>

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
