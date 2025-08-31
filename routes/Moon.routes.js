import { MoonController } from "../controllers/Moon.controller.js";
import express from "express";

const router = express.Router()

router.get("/", MoonController.getAllMoons)
router.get("/id/:id", MoonController.getMoonById)
router.get("/name/:name", MoonController.getMoonByName)

export default router
