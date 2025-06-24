const express = require("express");

const animalsController = require("../controllers/animalsController.js");

const router = express.Router();

router.get("/", animalsController.getAllAnimals);
router.get("/:id", animalsController.getAnimalById);
router.post("/", animalsController.createAnimal);
router.put("/:id", animalsController.updateAnimal);
router.delete("/:id", animalsController.deleteAnimal);
router.get("/fourLast", animalsController.fourLast);

module.exports = router;
