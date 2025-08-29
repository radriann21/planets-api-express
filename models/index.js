import { Sequelize } from "sequelize";
import { config } from "../config/database.js";

// MODELS
import Moon from "./Moon.model.js";
import Planet from "./Planet.model.js";

const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect
  }
)

const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize

// INITIALIZE MODELS
db.Planet = Planet(sequelize)
db.Moon = Moon(sequelize)

// DEFINE RELATIONSHIP

/* Moon only can have one planet  */
db.Planet.hasMany(db.Moon, { foreignKey: "planet_id", as: "moons" })
db.Moon.belongsTo(db.Planet, { foreignKey: "planet_id", as: "planet" })

export default db