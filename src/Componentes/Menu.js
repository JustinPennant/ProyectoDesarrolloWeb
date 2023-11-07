import React from 'react';
// Importación de CSS e Imagenes
import './Menu.css';

function Menu({ changePage }) {
  return (
    <div className="menu">
      <ul>
        <li>
          <button onClick={() => changePage('Inicio')} className="animate__animated animate__pulse animate__infinite">
            Inicio
          </button>
        </li>
        <li>
          <button onClick={() => changePage('SobreMi')} className="animate__animated animate__pulse animate__infinite">
            Sobre Mi
          </button>
        </li>
        <li>
          <button onClick={() => changePage('Proyectos')} className="animate__animated animate__pulse animate__infinite">
            Proyectos
          </button>
        </li>
        <li>
          <button onClick={() => changePage('Contacto')} className="animate__animated animate__pulse animate__infinite">
            Contacto
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Menu;