import { PlanetService } from "../services/Planet.service.js";

export const PlanetController = {
  getAllPlanets: async (req, res) => {
    try {
      const planets = await PlanetService.getAllPlanets()
      if (planets.length === 0) {
        return res.status(404).json({ error: "No planets found" });
      }
      res.json(planets)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  getPlanetById: async (req, res) => {
    const { id } = req.params
    try {
      const planet = await PlanetService.getPlanetById(id)
      if (!planet) {
        return res.status(404).json({ error: "Planet not found" });
      }
      res.json(planet)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  getPlanetByName: async (req, res) => {
    const { name } = req.params
    try {
      const planet = await PlanetService.getPlanetByName(name)
      if (!planet) {
        return res.status(404).json({ error: "Planet not found" });
      }
      res.json(planet)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}

