import express from "express";

import * as usersController from "../controllers/usersController.js";

const router = express.Router();

router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);
router.get("/email/:email", usersController.getUserByEmail);
router.post("/", usersController.createUser);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);
router.post("/login", usersController.checkUser);

export default router;
