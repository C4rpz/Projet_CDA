const express = require("express");

const cartsItemsController = require("../controllers/cartsItemsController.js");

const router = express.Router();

router.get("/", cartsItemsController.getAllCartsItems);
router.get("/:id", cartsItemsController.getCartItemsById);
router.post("/", cartsItemsController.createCartItems);
router.delete("/:id", cartsItemsController.deleteCartItems);

module.exports = router;
