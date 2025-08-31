import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import planetsRoutes from "./routes/Planetas.routes.js"
import moonRoutes from "./routes/Moon.routes.js"
import { errorHandler } from "./middlewares/errorHandler.js"
import { rateLimit } from "express-rate-limit"
import { swaggerSpec, swaggerUi } from "./swagger.js"

dotenv.config()

const app = express()
app.use(cors({
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  origin: "*"
}))
app.use(express.json())
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}))

app.use("/api/planets", planetsRoutes);
app.use("/api/moons", moonRoutes);
app.use(errorHandler)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

export default app;