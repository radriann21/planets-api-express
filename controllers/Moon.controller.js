import { MoonService } from "../services/Moon.service.js";

export const MoonController = {
  getAllMoons: async (req, res) => {
    try {
      const moons = await MoonService.getAllMoons();
      if (moons.length === 0) {
        return res.status(404).json({ error: "No moons found" });
      }
      res.json(moons);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getMoonById: async (req, res) => {
    try {
      const moon = await MoonService.getMoonById(req.params.id);
      if (!moon) {
        return res.status(404).json({ error: "Moon not found" });
      }
      res.json(moon);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getMoonByName: async (req, res) => {
    try {
      const moon = await MoonService.getMoonByName(req.params.name);
      if (!moon) {
        return res.status(404).json({ error: "Moon not found" });
      }
      res.json(moon);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}