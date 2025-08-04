import { Router } from "express";
import { getAllLoans, getLoanByID, getLoanByUserID, getLoanByBookID, createLoan, updateLoanByID, deleteLoan } from "../controller/prestamo.controller.js";
const router = Router();

router.get("/prestamos", getAllLoans);
router.get("/prestamos/:id", getLoanByID);
router.get("/prestamos/usuario/:id_usuario", getLoanByUserID);
router.get("/prestamos/libro/:id_libro", getLoanByBookID);
router.post("/prestamos", createLoan);
router.put("/prestamos/:id", updateLoanByID);
router.delete("/prestamos/:id", deleteLoan);

export default router;