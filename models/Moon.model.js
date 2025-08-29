import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Moon = sequelize.define("Moon", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    radius_km: {
      type: DataTypes.DECIMAL(10, 3),
      allowNull: false
    },
    radius_miles: {
      type: DataTypes.DECIMAL(10, 3),
      allowNull: false
    },
    orbital_period_days: {
      type: DataTypes.DECIMAL(10, 4),
      allowNull: false
    },
    image_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    planet_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: "moons",
    timestamps: false,
    underscored: true
  })
  return Moon
}