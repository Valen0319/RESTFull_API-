import { Router } from "express";
import { getAllUsers, getUserById, createUser, updateUserByID, deleteUser } from "../controller/usuario.controller.js";
const router = Router();

router.get('/usuarios', getAllUsers);
router.get('/usuarios/:id', getUserById);
router.post('/usuarios', createUser);
router.put('/usuarios/:id', updateUserByID);
router.delete('/usuarios/:id', deleteUser);

export default router;