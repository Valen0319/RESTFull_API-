import { Router } from "express";
import { getAllBooks, getBooksByID, createBook, updateBookByID, updateExistenceByID, deleteBook } from "../controller/libro.controller.js";
const router = Router();

router.get("/libros", getAllBooks);
router.get("/libros/:id", getBooksByID);
router.post("/libros", createBook);
router.put("/libros/:id", updateBookByID);
router.put("/libros/:id/existencia", updateExistenceByID);
router.delete("/libros/:id", deleteBook);

export default router;