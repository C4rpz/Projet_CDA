import express from "express";

import * as cartsService from "../services/cartsService.js";

const router = express.Router();

router.get("/", cartsService.getAllCarts);
router.get("/:id", cartsService.getCartById);
router.post("/", cartsService.createCart);
router.delete("/:id", cartsService.deleteCart);

export default router;
