import express from "express";
import * as cartsItemsController from "../controllers/cartsItemsController.js";

const router = express.Router();

router.get("/", cartsItemsController.getAllCartsItems);
router.get("/:id", cartsItemsController.getCartItemsById);
router.post("/", cartsItemsController.createCartItems);
router.delete("/:id", cartsItemsController.deleteCartItems);

export default router;
