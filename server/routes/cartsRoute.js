import express from "express";

import * as cartsController from "../controllers/cartsController.js";

const router = express.Router();

router.get("/", cartsController.getAllCarts);
router.get("/:id", cartsController.getCartById);
router.post("/", cartsController.createCart);
router.delete("/:id", cartsController.deleteCart);

export default router;
