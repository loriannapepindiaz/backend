const express = require('express'); 
const cors = require('cors');   // 👈 importar cors
const app = express();
const port = 3000;

// router
const userRouter = require('./routes/users');

app.use(express.json());
app.use(cors()); 

app.use('/users', userRouter); // ruta final: /users

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en: http://localhost:${port}`);
});
