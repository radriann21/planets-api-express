import express from "express";
import { PlanetController } from "../controllers/Planet.controller.js";

const router = express.Router()

/**
 * @swagger
 * /planets:
 *   get:
 *     summary: Get all planets
 *     tags:
 *       - Planets
 *     responses:
 *       200:
 *         description: A list of planets
 */
router.get("/", PlanetController.getAllPlanets)


/**
 * @swagger
 * /planets/id/{id}:
 *   get:
 *     summary: Get a planet by ID
 *     tags:
 *       - Planets
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the planet
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A planet object
 *       404:
 *         description: Planet not found
 */
router.get("/id/:id", PlanetController.getPlanetById)

/**
 * @swagger
 * /planets/name/{name}:
 *   get:
 *     summary: Get a planet by name
 *     tags:
 *       - Planets
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: The name of the planet
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A planet object
 *       404:
 *         description: Planet not found
 */
router.get("/name/:name", PlanetController.getPlanetByName)

export default router
