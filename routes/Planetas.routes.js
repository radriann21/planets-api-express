import express from "express";
import { PlanetController } from "../controllers/Planet.controller.js";

const router = express.Router()

router.get("/", PlanetController.getAllPlanets)
router.get("/id/:id", PlanetController.getPlanetById)
router.get("/name/:name", PlanetController.getPlanetByName)

export default router
