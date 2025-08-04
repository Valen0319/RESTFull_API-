import { Router } from "express";
import { getAllLoans, getLoanByID, createLoan, updateLoanByID, deleteLoan } from "../controller/prestamo.controller.js";
const router = Router();

router.get("/prestamos", getAllLoans);
router.get("/prestamos/:id", getLoanByID);
router.post("/prestamos", createLoan);
router.put("/prestamos/:id", updateLoanByID);
router.delete("/prestamos/:id", deleteLoan);

export default router;