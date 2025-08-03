import { getUser } from "../model/usuario.model.js";

export const getAllUsers = async(req, res) => {
    try {

        let users = await getUser();
        res.status(200).send(users);

    } catch (error) {
        res.status(500).send('Error interno del servidor');
    }
}

export const getUserById = (req, res) => {
  let {id} = req.params;
  res
    .status(200)
    .send(`Usted ha ingresado el usuario con ID: ${id}`);
  let numero = Number(id);
  console.log(typeof numero);
}

export const createUser = (req, res) => {
  res
    .status(201)
    .send('Crear un nuevo usuario');
}

export const updateUserByID = (req, res) => {
  res
    .status(200)
    .send(`Actualizar el usuario con ID: ${req.params.id}`);
}

export const deleteUser = (req, res) => {
  res
    .status(200)
    .send(`Eliminar el usuario con ID: ${req.params.id}`);
}