import express from 'express';

const app = express();
const PORT = 8080;

// Middleware para poder leer JSON
app.use(express.json());

// Ruta simple de prueba
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

//-----------------------------------------------------------------------------------------------------------//

// Usuarios

app.get('/usuarios', (req, res) => {
  res.json('Lista de usuarios');
});


app.get('/usuarios/:id', (req, res) => {
  // console.log('Ruta /usuarios/:id llamada');
  const id = req.params.id;
  res.send(`Mostrando usuario con ID ${id}`);
});

app.post('/usuarios', (req, res) => {
  const nuevoUsuario = req.body;
  res.send(`Usuario creado: ${JSON.stringify(nuevoUsuario)}`);
});

app.put('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  res.send(`Usuario ${id} actualizado con: ${JSON.stringify(datosActualizados)}`);
});

app.delete('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Usuario con ID ${id} eliminado`);
});

//-----------------------------------------------------------------------------------------------------------//

// Libros

app.get('/libros', (req, res) => {
  res.send('Lista de libros');
});

app.get('/libros/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Mostrando el libro con ID: ${id}`);
});

app.get('/libros/disponibles', (req, res) => {
  const disponibles = libros.filter(libro => libro.existencia > 0);
  res.json(disponibles);
});

app.post('/libros', (req, res) => {
  const nuevoLibro = req.body;
  res.send(`Libro creado: ${JSON.stringify(nuevoLibro)}`);
});

app.put('/libros/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  res.send(`Libro ${id} actualizado con: ${JSON.stringify(datosActualizados)}`);
});

app.put('/libros/:id/existencia', (req, res) => {
  const id = req.params.id;
  const { existencia } = req.body;
  res.send(`Existencia del libro ${id} actualizada a: ${existencia}`);
});

app.delete('/libros/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Libro con ID ${id} eliminado`);
});

//-----------------------------------------------------------------------------------------------------------//

// Prestamos

app.get('/prestamos', (req, res) => {
  res.send('Lista de préstamos');
});

app.get('/prestamos/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Mostrando préstamo con ID: ${id}`);
});

app.post('/prestamos', (req, res) => {
  const nuevoPrestamo = req.body;
  res.send(`Préstamo creado: ${JSON.stringify(nuevoPrestamo)}`);
});

app.put('/prestamos/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  res.send(`Préstamo ${id} actualizado con: ${JSON.stringify(datosActualizados)}`);
});

app.delete('/prestamos/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Préstamo con ID ${id} eliminado`);
});

//-----------------------------------------------------------------------------------------------------------//

// Resenas

app.get('/resenias', (req, res) => {
  res.send('Lista de reseñas');
});

app.get('/resenias/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Mostrando reseña con ID: ${id}`);
});

app.get('/resenias/libro/:libroId', (req, res) => {
  const libroId = req.params.libroId;
  res.send(`Mostrando reseñas del libro con ID: ${libroId}`);
});

app.post('/resenias', (req, res) => {
  const nuevaResenia = req.body;
  res.send(`Reseña creada: ${JSON.stringify(nuevaResenia)}`);
});

app.put('/resenias/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  res.send(`Reseña ${id} actualizada con: ${JSON.stringify(datosActualizados)}`);
});

app.delete('/resenias/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Reseña con ID ${id} eliminada`);
});

//-----------------------------------------------------------------------------------------------------------//

// Logicas especificas

app.get('/libros/disponibles', (req, res) => {
  const disponibles = libros.filter(libro => libro.existencia > 0);
  res.json(disponibles);
});

app.get('/prestamos/usuario/:id_usuario', (req, res) => {
  const id_usuario = parseInt(req.params.id_usuario);
  const resultado = prestamos.filter(p => p.id_usuario === id_usuario);
  res.json(resultado);
});

app.get('/prestamos/libro/:id_libro', (req, res) => {
  const id_libro = parseInt(req.params.id_libro);
  const resultado = prestamos.filter(p => p.id_libro === id_libro);
  res.json(resultado);
});
