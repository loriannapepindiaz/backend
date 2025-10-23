const express = require('express'); 
const cors = require('cors');
const app = express();
const port = 3000;

// router
const userRouter = require('./routes/users');

app.use(express.json());

// Configuración de CORS público
app.use(cors({
  origin: '*', // Permite todas las origenes
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/users', userRouter); // ruta final: /users

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en: http://localhost:${port}`);
});
