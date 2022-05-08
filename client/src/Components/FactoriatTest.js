import React from 'react'
import '../styles/FactoriatTest.css'

const FactoriatTest = () => {
  return (
    <div>   <section>
    <div className="grid-flex">
      <div className="col col-image" style={{backgroundImage: 'url(../styles/img/BG-FC.PNG)'}}>
      </div>
      <div className="col col-text" >
        <div className="Aligner-item" style={{color:"black"}}>
          <p>FACTORIAT aide les innovateurs à accélérer le temps « du prototype à la machine » et à assurer la qualité et la conformité aux normes industrielles.<br/>
FACTORIAT prend en charge la conception électro-mécanique, la programmation, supervise la fabrication, réalise l'assemblage et les tests de validation.<br/> 
Avec un prototype industrialisé par FACTORIAT, vous pouvez démontrer votre technologie dans les conditions réelles de l'industrie.<br/>
Pilier prototypage industriel du Programme TECHNORIAT, FACTORIAT est financé aux deux tiers par l’Union européenne dans le cadre du projet Innov’i –EU4Innovation mis en œuvre par Expertise France ainsi que par le programme DEAL de Smart Capital.
            <cite>- Maya Angelou</cite>
          </p>
        </div>
      </div>
    </div>
    <div className="grid-flex">
      <div className="col col-image" style={{backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/280406/seattle-library-sm.jpg)'}}>
        &nbsp;
      </div>
      <div className="col col-text col-left">
        <div className="Aligner-item">
          <p>“Simple is good.”
            <cite>- Jim Henson</cite>
          </p>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default FactoriatTest