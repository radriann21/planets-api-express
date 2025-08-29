import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import { rateLimit } from "express-rate-limit"
dotenv.config()

const app = express()
app.use(cors({
  methods: ["GET"],
  origin: "*"
}))
app.use(express.json())
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}))

export default app;