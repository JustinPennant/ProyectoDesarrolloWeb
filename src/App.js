import React, { useState, useEffect } from 'react';
// Para agregar animaciones
import 'animate.css';
import 'animate.css/animate.min.css';
// Para el Menu que movilizará entre paginas
import Menu from './Componentes/Menu';
// Para cada una de las páginas y mostrar su contenido
import Inicio from './Paginas/Inicio';
import SobreMi from './Paginas/SobreMi';
import Proyectos from './Paginas/Proyectos';
import Contacto from './Paginas/Contacto';
// Importación de CSS e Imagenes
import './App.css';
// Imagenes para INICIO
import FotoPerfil from './Imagenes/Foto_Perfil.jpg';
import FotoProyect from './Imagenes/IntroProyecto.jpg';
import FotoContact from './Imagenes/IntroContacto.jpg';
// Imagenes para CONTACTO
import FotoLinke from './Imagenes/linkedin.jpg';
import FotoInsta from './Imagenes/instagram.jpg';
import FotoTwitter from './Imagenes/twitter.jpg';
import FotoGithub from './Imagenes/github.jpg';

function App() {
  const [currentPage, setCurrentPage] = useState('Inicio');

  const changePage = (pageName) => {
    setCurrentPage(pageName);
  };

  useEffect(() => {
    document.body.classList.add('animate__animated', 'animate__fadeIn');
    const timer = setTimeout(() => {
      document.body.classList.remove('animate__animated', 'animate__fadeIn');
    }, 1000); // Ajusta el tiempo según la duración de tu animación
    return () => clearTimeout(timer);
  }, [currentPage]);

  return (
    <div>
      {/* Llamado al Componente de Menu */}
      <Menu changePage={changePage} />
      {/* Listado de todas las páginas a visitar */}
      <div className="content">
        {currentPage === 'Inicio' && <Inicio ImagenPerfil={FotoPerfil} ImagenProyecto={FotoProyect} ImagenContacto={FotoContact} />}
        {currentPage === 'SobreMi' && <SobreMi />}
        {currentPage === 'Proyectos' && <Proyectos />}
        {currentPage === 'Contacto' && (
          <Contacto linkedinIcon={FotoLinke} twitterIcon={FotoTwitter} instagramIcon={FotoInsta} githubIcon={FotoGithub} />
        )}
      </div>
    </div>
  );
}

export default App;