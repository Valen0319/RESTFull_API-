import express from 'express';
import usuariosRouter from './src/routes/usuario.routes.js';

const app = express();
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(usuariosRouter);

app.listen(8080, () => {
  console.log(`Servidor corriendo en http://localhost:8080`);});

