const express = require("express");

const cartsController = require("../controllers/cartsController.js");

const router = express.Router();

router.get("/", cartsController.getAllCarts);
router.get("/:id", cartsController.getCartById);
router.post("/", cartsController.createCart);
router.delete("/:id", cartsController.deleteCart);

module.exports = router;
