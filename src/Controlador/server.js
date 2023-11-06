const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000; // Cambia el puerto a 3000 o cualquier otro libre

// Habilitar CORS para permitir solicitudes desde otros dominios
app.use(cors());

// Conectar a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/miBaseProyecto', {
  useFindAndModify: false,
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definir un modelo de datos para los mensajes de contacto (usando mongoose)
const Message = mongoose.model('Mensajes', {
  Nombre: String,
  Email: String,
  Mensaje: String,
});

// Configurar rutas para enviar y recibir mensajes
app.post('/enviar-mensaje', async (req, res) => {
  try {
    const nuevoMensaje = new Message(req.body);
    await nuevoMensaje.save();
    res.send('Mensaje enviado con éxito');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al enviar el mensaje');
  }
});

app.get('/mensajes', async (req, res) => {
  try {
    const mensajes = await Message.find();
    res.json(mensajes);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al recuperar los mensajes');
  }
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
