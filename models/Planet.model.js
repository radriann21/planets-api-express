import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Planet = sequelize.define("Planet", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mass_kg: {
      type: DataTypes.DECIMAL(30, 10),
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
    gravity_ms2: {
      type: DataTypes.DECIMAL(6, 3),
      allowNull: false
    },
    rotation_period_days: {
      type: DataTypes.DECIMAL(10, 4),
      allowNull: false
    },
    orbital_period_days: {
      type: DataTypes.DECIMAL(10, 4),
      allowNull: false
    },
    min_temp_celsius: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },
    max_temp_celsius: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },
    min_temp_fahrenheit: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },
    max_temp_fahrenheit: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },
    atmosphere_components: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    rings: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    discoverer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    discovery_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_url: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: "planets",
    timestamps: false,
    underscored: true
  })
  return Planet;
}