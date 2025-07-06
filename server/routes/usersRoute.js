import express from "express";

import * as usersService from "../services/usersService.js";

const router = express.Router();

router.get("/", usersService.getAllUsers);
router.get("/:id", usersService.getUserById);
router.get("/email/:email", usersService.getUserByEmail);
router.post("/", usersService.createUser);
router.put("/:id", usersService.updateUser);
router.delete("/:id", usersService.deleteUser);
router.post("/login", usersService.checkUser);

export default router;
