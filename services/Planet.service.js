import db from "../models/index.js";
const { Planet } = db;

export const PlanetService = {
  getAllPlanets: async () => {
    try {
      const planets = await Planet.findAll()
      if (planets.length === 0) {
        throw new Error("No planets found")
      }
      return planets
    } catch (error) {
      throw new Error("Error fetching planets")
    }
  },
  getPlanetById: async (id) => {
    try {
      const planet = await Planet.findByPk(id)
      if (!planet) {
        throw new Error("Planet not found")
      }
      return planet
    } catch (error) {
      throw new Error("Error fetching planet")
    }
  },
  getPlanetByName: async (name) => {
    try {
      const planet = await Planet.findOne({ where: { name } })
      if (!planet) {
        throw new Error("Planet not found")
      }
      return planet
    } catch (err) {
      throw new Error("Error fetching planet by name")
    }
  }
}