import React from 'react';

// Importación de CSS e Imagenes
import './CSSPaginas.css';

function Contacto({ linkedinIcon, twitterIcon, instagramIcon, githubIcon }) {
  return (
    <div className="container">
      <h2 class="animate__fadeInUp">Contacto</h2>

      {/* Contenido de "Contacto" */}
      <p>Puedes contactar conmigo en diferentes medios: </p>

      <h3>Información de Contacto</h3>
      <p>Correo Electrónico: jramosp14@miumg.edu.gt</p>
      <p>Teléfono: 5555-0142</p>

      <h3>Redes Sociales</h3>
      <p>Igualmente, puedes seguirme en Redes Sociales para más actualizaciones: </p>

      {/* Se mostrarán los links a redes sociales */}
      <ul>
        <li>
          <img src={linkedinIcon} alt="LinkedIn" style={{ width: "25px", height: "25px", marginRight: '10px' }} />
          <a href="https://gt.linkedin.com/">LinkedIn</a>
        </li>
        <li>
          <img src={twitterIcon} alt="Twitter" style={{ width: "25px", height: "25px", marginRight: '10px' }} />
          <a href="https://twitter.com/home?lang=es">Twitter</a>
        </li>
        <li>
          <img src={instagramIcon} alt="Instagram" style={{ width: "25px", height: "25px", marginRight: '10px' }} />
          <a href="https://www.instagram.com/">Instagram</a>
        </li>
        <li>
          <img src={githubIcon} alt="GitHub" style={{ width: "25px", height: "25px", marginRight: '10px' }} />
          <a href="https://github.com/JustinPennant">GitHub</a>
        </li>
      </ul>
    </div>
  );
}

export default Contacto;
