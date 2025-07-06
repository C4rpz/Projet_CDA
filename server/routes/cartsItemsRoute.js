import express from "express";
import * as cartsItemsService from "../services/cartsItemsService.js";

const router = express.Router();

router.get("/", cartsItemsService.getAllCartsItems);
router.get("/:id", cartsItemsService.getCartItemsById);
router.post("/", cartsItemsService.createCartItems);
router.delete("/:id", cartsItemsService.deleteCartItems);

export default router;
