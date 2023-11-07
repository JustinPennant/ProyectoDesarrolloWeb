import React from 'react';
// Importación de CSS e Imagenes
import './CSSPaginas.css';

function Proyectos() {
  return (
    <div className="container">
      <h2 class="animate__fadeInUp">Mis Proyectos</h2>

      {/* Contenido de "Proyectos" */}
      <div className="proyecto">
        <h3>Desarrollo de Modulos de Inventario y Logística</h3>
        <p>El proyecto más reciente y que aún se lleva en implementación. Se utilizaron herramientas previamente programadas para
          crear diferentes modulos en un hotel. El proyecto requirio de comunicación con otros apartados para la implementación. Se aprendio del
          trabajo en equipo y del desarrollo con caja negra.
        </p>
        <ul>
          <li><a href="https://github.com/JustinPennant/proyectoads22023">Proyecto de Modulo de Inventario y Logística</a></li>
        </ul>
      </div>

      <div className="proyecto">
        <h3>Desarrollo de Aplicaciones de Seguridad</h3>
        <p>En un equipo de trabajo, se nos solicito crear una interfaz para gestionar toda la seguridad de una clínica, más adelante
          se tomo en cuenta para la misma implementación pero para un hotel. Se crearon apartados como un inicio de sesión, gestión de permisos,
          bitacora que lleva registro de todo lo que realizo en el programa. Se adjunta link del proyecto:
        </p>
        <ul>
          <li><a href="https://github.com/JustinPennant/microcasosasd22023">Proyecto de Componente de Seguridad</a></li>
        </ul>
      </div>

      <div className="proyecto">
        <h3>Blog de Virus Informáticos y Seguridad</h3>
        <p>En este proyecto se tenía la intención de presentar al publico los diferentes peligros de internet, 
          dando una visión de las consecuencias de no navegar de manera segura, por lo mismo, se planteo diferentes
          soluciones y prevenciones para que no se tenga este tipo de problemas. Esta página se encuentra orientada
          para todo publico, tanto profesionales como principiantes. Se presenta el siguiente link:
        </p>
        <ul>
          <li><a href="https://jramosp14.wixsite.com/virusinfo4seguridad">Virus Informáticos y Seguridad</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Proyectos;
