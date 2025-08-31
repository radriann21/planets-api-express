import { MoonController } from "../controllers/Moon.controller.js";
import express from "express";

const router = express.Router()


/**
 * @swagger
 * /moons:
 *   get:
 *     summary: Get all moons
 *     tags:
 *       - Moons
 *     responses:
 *       200:
 *         description: A list of moons
 */
router.get("/", MoonController.getAllMoons)

/**
 * @swagger
 * /moons/id/{id}:
 *   get:
 *     summary: Get a moon by ID
 *     tags:
 *       - Moons
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the moon
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A moon object
 *       404:
 *         description: Moon not found
 */
router.get("/id/:id", MoonController.getMoonById)

/**
 * @swagger
 * /moons/name/{name}:
 *   get:
 *     summary: Get a moon by name
 *     tags:
 *       - Moons
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: The name of the moon
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A moon object
 *       404:
 *         description: Moon not found
 */
router.get("/name/:name", MoonController.getMoonByName)

export default router
