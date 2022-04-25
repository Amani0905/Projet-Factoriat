import React from 'react'
import '../styles/NavbarTest.css';



const NavbarTest = () => {
    
  return (
      
    <div>
    {/* NAVBAR BLOCK */}
    <nav className="nav">
      <div className="nav__logo">
        <a href="#">LOGO</a>
      </div>
      <div id="mainListDiv" className="main_list nav__wrapper">
        <ul className="navlinks nav__wrapper__list">
          <li className="nav__wrapper__list__item"><a href="#">About</a></li>
          <li className="nav__wrapper__list__item"><a href="#">Portfolio</a></li>
          <li className="nav__wrapper__list__item"><a href="#">Services</a></li>
          <li className="nav__wrapper__list__item"><a href="#">Contact</a></li>
        </ul>
      </div>
      <span className="navTrigger nav__toggle-btn">
        <i />
        <i />
        <i />
      </span>
    </nav>
    {/* END OF NAVBAR BLOCK */}
    <section className="intro">
      <div className="intro__align">
        <h1 className="intro__align__title">Technoriat</h1>
        <h2 className="intro__align__sub-title">Projet de soutien aux startups issues des résultats de la recherche scientifique</h2>
      </div>
    </section>
    <div className="pads">
      <p className="text">
        What is this?
      </p>
      <p className="text">This is a simple landing page with a responsive fixed navbar animated on scroll</p>
    </div>
    <div style={{height: '1000px'}}>
      {/* just to make scrolling effect possible */}
    </div>
  </div>
  )
}

export default NavbarTest