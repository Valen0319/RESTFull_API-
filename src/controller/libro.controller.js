import { getBook } from "../model/libro.model.js";

export const getAllBooks = async(req, res) => {
    try {

        let books = await getBook();
        res
        .status(200)
        .send(books);

    } catch (error) {
        res
        .status(500)
        .send('Error interno del servidor');
    }
}

export const getAvaibleBooks = (req, res) => {
    res
    .status(200)
    .send("Obtener los libros disponibles");
}

export const getBooksByID = (req, res) => {
    res
    
    .status(200)
    .send(`Obtener un libro por su id_libro: ${req.params.id}`);
}

export const createBook = (req, res) => {
    res
    .status(201)
    .send("Crear un nuevo libro");
}

export const updateBookByID = (req, res) => {
    res
        .status(200)
        .send(`Actualizar los datos de un libro con id: ${req.params.id}`);
}

export const updateExistenceByID = (req, res) => {
    res
        .status(200)
        .send(`Actualizar la existencia del libro con id: ${req.params.id}`);
}

export const deleteBook = (req, res) => {
    res
    .status(200)
    .send(`Eliminar un libro con id: ${req.params.id}`);
}