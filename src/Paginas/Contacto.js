import React, { useState } from 'react';
import axios from 'axios';

// Importación de CSS e Imagenes
import './CSSPaginas.css';

function Contacto({ linkedinIcon, twitterIcon, instagramIcon, githubIcon }) {
  // Define estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crea un objeto con los datos del formulario
    const formData = {
      Nombre: nombre,
      Email: email,
      Mensaje: mensaje,
    };

    try {
      // Realiza una solicitud POST al servidor para enviar el formulario
      const response = await axios.post('http://localhost:3000/enviar-mensaje', formData);

      // Muestra un mensaje de confirmación al usuario
      alert('Mensaje enviado con éxito');
    } catch (error) {
      console.error(error);

      // Muestra un mensaje de error al usuario
      alert('Error al enviar el mensaje');
    }
  };

  return (
    <div className="container">
      <h2>Contacto</h2>

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

      {/* Formulario de contacto */}
      <h3>¡Envía un Mensaje!</h3>
      <div style={{ margin: "20px", padding: "10px", border: "2px solid #007BFF", backgroundColor: "#f0f0f0" }}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            />
          </div>
          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;