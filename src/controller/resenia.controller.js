import { getReview } from "../model/resenia.model.js";

export const getAllReviews = async(req, res) => {
    try {

        let review = await getReview();
        res
        .status(200)
        .send(review);

    } catch (error) {
        res
        .status(500)
        .send('Error interno del servidor');
    }
}

export const getReviewByID = (req, res) => {
  let {id} = req.params;
  res
    .status(200)
    .send(`Usted ha ingresado la reseña con ID: ${id}`);
  let numero = Number(id);
  console.log(typeof numero);
}

export const createReview = (req, res) => {
  res
    .status(201)
    .send('Crear una nueva reseña');
}

export const updateReviewByID = (req, res) => {
  res
    .status(200)
    .send(`Actualizar la reseña con ID: ${req.params.id}`);
}

export const deleteReview = (req, res) => {
  res
    .status(200)
    .send(`Eliminar la reseña con ID: ${req.params.id}`);
}