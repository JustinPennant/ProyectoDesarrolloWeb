import React from 'react';
// Importación de CSS e Imagenes
import './CSSPaginas.css';

function Inicio({ImagenPerfil, ImagenProyecto, ImagenContacto}) {
  return (
    <div className="container">
      <h2>¡Bienvenido a mi Web Personal!</h2>
      <p>¡Hola! Gracias por tomarte el tiempo de ver mi página web.</p>

      {/* Contenido de "Sobre Mi" */}
      <div className='textodiv'>
        <h3>Sobre Mí</h3>
        <p>Me llamo Justin Emmanuel Ramos Pennant, actualmente estudiante de la Universidad Mariano Galvez de Guatemala
        en la carrera de Ingeniería en Sistemas y Ciencias de la Computación. Me gusta el desarrollo de diferentes tareas
        de programación y si asi lo deseas, puedo formar parte de tu equipo.</p>
      </div>
      <div className='imagenedit'>
        <img src={ImagenPerfil} alt="Fotografía de Presentación" style={{ width: "100px", height: "auto", borderRadius: "25%"}}/>
      </div>

      {/* Contenido de "Proyectos" */}
      <div className='textodiv'>
        <h3>Mis Proyectos</h3>
        <p>En lo largo de mi aprendizaje y aplicación de conocimientos he participado en diferentes proyectos en diferentes ambitos,
        a lo mejor gracias a estas referencias te puedes dar una idea de mis capacidades dentro de mi programación.</p>
      </div>
      <div className='imagenedit'>
        <img src={ImagenProyecto} alt="Introducción al Proyecto" style={{ width: "100px", height: "auto", borderRadius: "25%"}}/>
      </div>

      {/* Contenido de "Contacto*" */}
      <div className='textodiv'>
        <h3>Contacto</h3>
        <p>Por supuesto, si deseas contactarte conmigo para hablar en el ambito profesional, ya sea plantear un nuevo proyecto en el
        que desees mi participación, asesoría o busqueda de trabajadores para tu empresa, ¡Puedes contar conmigo!</p>
      </div>
      <div className='imagenedit'>
        <img src={ImagenContacto} alt="Introducción a Contacto" style={{ width: "100px", height: "auto", borderRadius: "25%"}}/>
      </div>
    </div>
  );
}

export default Inicio;