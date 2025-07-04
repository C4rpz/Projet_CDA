import express from "express";

import * as categoriesController from "../controllers/categoriesControllers.js";

const router = express.Router();

router.get("/", categoriesController.getAllCategories);
router.get("/:id", categoriesController.getCategoryById);
router.post("/", categoriesController.createCategory);

export default router;
