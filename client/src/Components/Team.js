import React from 'react'
import '../styles/Team.css'

const Team = () => {
  return (
    <div className="Team-background"> 
    <div className="wrapper">
    <h1>NOTRE EQUIPE</h1>
   
    <div className="our_team">
      <div className="team_member">
        <div className="member_img">
          <img src={require("../styles/img/member_1.png")} alt="our_team" />
          <div className="social_media">
            <a href="https://www.linkedin.com/in/noomanefehri/" className="linkdin item"><i className="fa-brands fa-linkedin"></i></a>
            <a href="mailto:noomane@ourdigitalfuture.org" className="Email item"><i className="fa-solid fa-envelope"></i></a></div>
        </div>
        <h3>Noomane Fehri</h3>
        <span>Directeur Projet</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione perspiciatis, error deleniti quaerat beatae doloribus incidunt excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus cumque.</p>
      </div>
      <div className="team_member">
        <div className="member_img">
          <img src="member_2.png" alt="our_team" />
          <div className="social_media">
            <a href="https://www.linkedin.com/in/asophie/" className="linkdin item"><i className="fa-brands fa-linkedin"></i></a>
            <a href="mailto:sophie@vitaminn.tn" className="Email item"><i className="fa-solid fa-envelope"></i></a> 
          </div>
        </div>
        <h3>Sophie Gombart-Masmoudi</h3>
        <span>Responsable unité de prototypage industriel</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores maiores temporibus, architecto optio asperiores mollitia pariatur error, quaerat voluptatibus minima eos quo nostrum, maxime necessitatibus.</p>
      </div>
      <div className="team_member">
        <div className="member_img">
          <img src="member_3.png" alt="our_team" />
          <div className="social_media">
            <a href="https://www.linkedin.com/in/ramzi-zammali-98a19928/" className="linkdin item"><i className="fa-brands fa-linkedin"></i></a>
            <a href="mailto:ramzi.zammali@mfcpole.com.tn" className="Email item"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>
        <h3>RAMZI ZAMMALI</h3>
        <span>Responsable Sourcing</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione perspiciatis, error deleniti quaerat beatae doloribus incidunt excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus cumque.</p>
      </div>
      <div className="team_member">
        <div className="member_img">
          <img src="member_4.png" alt="our_team" />
          <div className="social_media">
            <a href="https://www.linkedin.com/in/nebil-chemek-3bb598b/" className="linkdin item"><i className="fa-brands fa-linkedin"></i></a>
            <a href="mailto:pmo@ourdigitalfuture.org" className="Email item"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>
        <h3>Nebil CHEMEK</h3>
        <span>PMO</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione perspiciatis, error deleniti quaerat beatae doloribus incidunt excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus cumque.</p>
      </div>  
      <div className="team_member">
        <div className="member_img">
          <img src="member_4.png" alt="our_team" />
          <div className="social_media">
            <a href="https://www.linkedin.com/in/hamza-guizani-253ba855/" className="linkdin item"><i className="fa-brands fa-linkedin"></i></a>
            <a href="mailto:pmo@ourdigitalfuture.org" className="Email item"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>
        <h3>HAMZA GUIZANI</h3>
        <span>Responsable Incubation</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione perspiciatis, error deleniti quaerat beatae doloribus incidunt excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus cumque.</p>
      </div> 
    </div>
  </div>
  </div>
);
}


export default Team