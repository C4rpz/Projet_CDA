import express from "express";

import * as categoriesService from "../services/categoriesService.js";

const router = express.Router();

router.get("/", categoriesService.getAllCategories);
router.get("/:id", categoriesService.getCategoryById);
router.post("/", categoriesService.createCategory);

export default router;
