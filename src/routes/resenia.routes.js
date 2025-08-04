import { Router } from "express";
import { getAllReviews, getReviewByID, createReview, updateReviewByID, deleteReview } from "../controller/resenia.controller.js";
const router = Router();

router.get("/resenias", getAllReviews);
router.get("/resenias/:id", getReviewByID);
router.post("/resenias", createReview);
router.put("/resenias/:id", updateReviewByID);
router.delete("/resenias/:id", deleteReview);

export default router;