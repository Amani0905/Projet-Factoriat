import React from 'react'
import '../styles/Footer.css'



const Footer = () => {
  return (
  <div className='media'>
        <footer  className="bg-dark text-center text-white" >
           <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    
    Ce site a été créé et est maintenu avec le soutien financier de l’Union Européenne.
Le contenu de ce site relève de la seule responsabilité de ODF et ne peut aucunement être considéré comme reflétant le point de vue d'ExpertiseFrance.
</div>
          {/* Grid container */}
          <div classeName="container p-4 pb-0">
            {/* Section: Social media */}
            <section className="mb-4">
              {/* Facebook */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f" /></a>
              {/* Instagram */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram" /></a>
              {/* Linkedin */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
             
            </section>
            {/* Section: Social media */}
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    
            <a className="text-white" href="http://localhost:3000/Technoriat">©2022Copyright. All rights reserved | Technoriat.net</a>
          </div>
          {/* Copyright */}
        </footer>
        </div>
      
  
  )
}

export default Footer