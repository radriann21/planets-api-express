import { PlanetService } from "../services/Planet.service.js";

export const PlanetController = {
  getAllPlanets: async (req, res) => {
    try {
      const planets = await PlanetService.getAllPlanets()
      res.json(planets)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  getPlanetById: async (req, res) => {
    const { id } = req.params
    try {
      const planet = await PlanetService.getPlanetById(id)
      res.json(planet)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  },
  getPlanetByName: async (req, res) => {
    const { name } = req.params
    try {
      const planet = await PlanetService.getPlanetByName(name)
      res.json(planet)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }
}

