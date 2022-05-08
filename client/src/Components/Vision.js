import React from 'react'
import "../styles/vision.css"

const Vision = () => {
  return (
    <div><header className="showcase">
    <div className="content-1">
      <img src={require("../styles/img/logo G.png")} className="logo" alt="TECHNORIAT" />
      <div className="title">
        WELCOME TO TECHNORIAT
      </div>
      <div className="text">
      Technoriat a pour objectif de poser les fondements nécessaires à la création d'un écosystème de l'innovation
pérenne et autonome permettant le développement de startups issues des résultats de recherche
scientifique et basées sur la propriété intellectuelle en Tunisie.
      </div>
    </div>
  </header>
  
  {/* About */}
  <section className="about bg-light">
    <div className="container-1">
      <div className="grid-2">
        <div className="center">
        <img src={require("../styles/img/Logo Y.png")} className="logo2" alt="TECHNORIAT" />
        </div>
        <div >
          <h2> Projet Technoriat</h2><br/>
          <p1 className="about-us">Technoriat est un programme de soutien permettant le développement de startups technologiques issues des résultats de la recherche scientifique et basées sur la propriété intellectuelle. Il vise à :<br/>
- Ancrer la culture entrepreneuriale chez les chercheurs<br/>
- Fluidifier et démocratiser le processus de brevetage<br/>
- Combler le manque de services d’industrialisation (du prototype à l’industrialisation)<br/>
Technoriat est porté conjointement par le cabinet OurDigitalFuture et l’Association des Technoparks Tunisiens en partenariat avec la RRO – CEA et plusieurs instituts de recherche tunisiens.<br/>
Technoriat est financé par l’Union Européenne à travers le programme Innov’i – EU4Innovation mis en œuvre par Expertise France.
</p1>
        </div>
      </div>
    </div>
  </section>
  {/* Services */}
  <section className="services">
  <h2 style={{padding:"20px",textAlign:"center"}}>8 bonnes raisons de devenir TECHNORIATE</h2>
    <div className="container-1 grid-3 center">
      <div>
        <i className=" fa-solid fa-building-user fa-3x" />
        <h3>Entreprendre</h3>
        <p1>Créer une entreprise internationale</p1>
      </div>
      <div>
        <i className="fa-solid fa-hand-holding-dollar"></i>
        <h3>Donner Vie</h3>
        <p1> à son projet de recherche à travers de l’expertise et un budget conséquent</p1>
      </div>
      <div>
        <i className="fa-solid fa-file-shield" />
        <h3>Enregistrer</h3>
        <p1> son propre brevet à l’international</p1>
      </div>
      <div>
        <i className="fa-solid fa-screwdriver-wrench" />
        <h3>Construire</h3>
        <p1>une usine à partir de son prototype</p1>
      </div>
          <div>
        <i className="fa-solid fa-people-arrows-left-right" />
        <h3>Créer </h3>
        <p1>de la richesse pour soi et pour les autres</p1>
      </div>
      <div>
        <i className="fa-solid fa-earth-africa" />
        <h3>Impacter </h3>
        <p1>positivement le pays</p1>
      </div>
      <div>
        <i className="fa-solid fa-award" />
        <h3>Devenir Technoriate</h3>
        <p1> À travers une expérience extraordinaire</p1>
      </div>
      <div>
        <i className="fa-solid fa-arrows-to-dot"></i>
        <h3>Financer</h3>
        <p1> Son rêve et acquérir de nouvelles compétences</p1>
      </div>
    </div>
  </section></div>
  )
}

export default Vision