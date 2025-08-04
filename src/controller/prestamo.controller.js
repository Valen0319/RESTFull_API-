import { getLoan } from '../model/prestamo.model.js';

export const getAllLoans = async(req, res) => {
    try {

        let loans = await getLoan();
        res.status(200).send(loans);

    } catch (error) {
        res.status(500).send('Error interno del servidor');
    }
}

export const getLoanByID = (req, res) => {
    res
        .status(200)
        .send(`Obtener un préstamo por su id_prestamos: ${req.params.id}`);
}

export const createLoan = (req, res) => {
    res.status(201).send("Crear un nuevo préstamo (reserva de un libro)");
}

export const updateLoanByID = (req, res) => {
    res
        .status(200)
        .send(`Actualizar los datos de un préstamo con id: ${req.params.id}`);
}

export const deleteLoan = (req, res) => {
    res.status(200).send(`Eliminar un préstamo con id: ${req.params.id}`);
}