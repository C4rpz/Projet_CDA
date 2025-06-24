const express = require("express");

const categoriesController = require("../controllers/categoriesControllers.js");

const router = express.Router();

router.get("/", categoriesController.getAllCategories);
router.get("/:id", categoriesController.getCategoryById);
router.post("/", categoriesController.createCategory);

module.exports = router;
