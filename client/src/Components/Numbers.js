import React from 'react'
import "../styles/Numbers.css"

const Numbers = () => {
  return (
    <>
        <div className="poster" style={{paddingTop:'400px'}}>
            <h1 className="poster__heading">TECHNORIAT &nbsp; 
              <span className="poster__subheading" style={{display:'inline-block',fontSize:'44px',fontWeight:'600'}}> EN CHIFFRES</span>
            </h1>
            </div>
        <br />
        <div className="row numb">
          <div className="column">
            <div className="card">
              <p><i class="fa-solid fa-handshake"></i></p>
              <h3>30+</h3>
              <p>Partenaires</p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i class="fa-solid fa-square-check"></i></p>
              <h3>55+</h3>
              <p>Projets</p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i class="fa-solid fa-euro-sign"></i></p>
              <h3>1 million d'euros+</h3>
              <p>Fonds Collectés</p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i class="fa-solid fa-map-location"></i></p>
              <h3>16</h3>
              <p>Gouvernerats</p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i class="fa-solid fa-people-line"></i></p>
              <h3>10+</h3>
              <p>Employés</p>
            </div>
          </div> 
        </div>
        </>
        

  )
}

export default Numbers