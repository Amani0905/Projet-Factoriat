import React from 'react'
import "../styles/Factoriat.css"

const Factoriat = () => {
  return (
    <div><header className="showcase-1">
    <div className="content-3">
      <img src={require("../styles/img/Logo Y.png")} className="logo" alt="FACTORIAT" />
      <div className="title">
       FACTORIAT <br/>
       ​FROM LAB TO FAB: INDUSTRIALISING INNOVATION
      </div>
     
    </div>
  </header>
  
  {/* About */}
  <section className="about bg-light-1">
    <div className="container-3">
      <div className="grid-4">
        <div className="center-1">
        <img src={require("../styles/img/BG-FC.PNG")} className="logo3" alt="TECHNORIAT" />
        </div>
        <div classeName="copy" style={{backgroundColor:'#ffc80a',height:644}} >
          <h2 style={{fontSize:'60px',textAlign:'center'}}> A PROPOS DE NOUS</h2><br/>
          <p1 style={{fontSize:'16px',lineHeight:'2.5'}}>FACTORIAT aide les innovateurs à accélérer le temps « du prototype à la machine » et à assurer la qualité et la conformité aux normes industrielles.<br/>
FACTORIAT prend en charge la conception électro-mécanique, la programmation, supervise la fabrication, réalise l'assemblage et les tests de validation.<br/> 
Avec un prototype industrialisé par FACTORIAT, vous pouvez démontrer votre technologie dans les conditions réelles de l'industrie.<br/>
Pilier prototypage industriel du Programme TECHNORIAT, FACTORIAT est financé aux deux tiers par l’Union européenne dans le cadre du projet Innov’i –EU4Innovation mis en œuvre par Expertise France ainsi que par le programme DEAL de Smart Capital.
</p1>
        </div>
      </div>
    </div>
  </section>
  <section className="about bg-light-1">
    <div className="container-3">
      <div className="grid-4">
        <div className="center-1">
        <img src={require("../styles/img/BG-FC-2.PNG")} className="logo4" alt="TECHNORIAT" />
        </div>
        <div classeName="copy" style={{backgroundColor:'black',color:'white'}} >
          <h2 style={{fontSize:'40px',textAlign:'center',color:'#ffc80a'}}> Vous avez un projet de prototypage?</h2><br/>
          <p1 style={{fontSize:'16px',lineHeight:'2.5'}}>Vous avez un projet technologique en TRL 4 ou plus nécessitant un prototype?<br/>
Vous êtes un industriel cherchant à intégrer une technologie innovante?<br/>
Participez à l'appel à projet de FACTORIAT pour tenter d'obtenir la subvention complète de la conception et de la programmation de votre prototype (design for manufacturing) ainsi qu'une subvention jusqu'à 5 000DT en matériel hardware.<br/> 
Remplissez le formulaire de participation avant le 28/2 à minuit.<br/>
</p1>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Factoriat