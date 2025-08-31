import db from "../models/index.js";
const { Moon } = db;

export const MoonService = {
  getAllMoons: async () => {
    try {
      const moons = await Moon.findAll();
      if (moons.length === 0) throw new Error("No moons found");
      return moons;
    } catch (err) {
      throw new Error("Error fetching moons")
    }
  },
  getMoonById: async (id) => {
    try {
      const moon = await Moon.findByPk(id);
      if (!moon) throw new Error("Moon not found");
      return moon;
    } catch (err) {
      throw new Error("Error fetching moon by ID")
    }
  },
  getMoonByName: async (name) => {
    try {
      const moon = await Moon.findOne({ where: { name } });
      if (!moon) throw new Error("Moon not found");
      return moon;
    } catch (err) {
      throw new Error("Error fetching moon by name")
    }
  }
}