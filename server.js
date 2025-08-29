import app from "./app.js"
import db from "./models/index.js"
import 'dotenv/config'

const PORT = process.env.SERVER_PORT || 3002

db.sequelize.authenticate()
  .then(() => {
    console.log("Database connection established successfully.")
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err)
  })