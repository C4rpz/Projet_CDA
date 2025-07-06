import express from "express";
import * as animalsService from "../services/animalsService.js";

const router = express.Router();

router.get("/", animalsService.getAllAnimals);
router.get("/:id", animalsService.getAnimalById);
router.post("/", animalsService.createAnimal);
router.put("/:id", animalsService.updateAnimal);
router.delete("/:id", animalsService.deleteAnimal);
router.get("/fourLast", animalsService.fourLast);

export default router;
