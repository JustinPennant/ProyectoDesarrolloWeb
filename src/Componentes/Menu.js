import React from 'react';
// Importación de CSS e Imagenes
import './Menu.css';

function Menu({ changePage }) {
  return (
    <div className="menu">
      <ul>
        <li>
          <button onClick={() => changePage('Inicio')}>Inicio</button>
        </li>
        <li>
          <button onClick={() => changePage('SobreMi')}>Sobre Mi</button>
        </li>
        <li>
          <button onClick={() => changePage('Proyectos')}>Proyectos</button>
        </li>
        <li>
          <button onClick={() => changePage('Contacto')}>Contacto</button>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
