import express from "express";
import * as animalsController from "../controllers/animalsController.js";
import authenticateToken from "../middleware/auth.js";

const router = express.Router();

router.get("/", animalsController.getAllAnimals);
router.get("/:id", animalsController.getAnimalById);
router.post("/", authenticateToken, animalsController.createAnimal);
router.put("/:id", animalsController.updateAnimal);
router.delete("/:id", animalsController.deleteAnimal);
router.get("/fourLast", animalsController.fourLast);

export default router;
