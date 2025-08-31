import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express"

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Planets API",
    version: "1.0.0",
    description: "API for managing planets and their moons"
  },
  servers: [
    {
      url: "http://localhost:3002/api"
    }
  ]
}

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"]
}

export const swaggerSpec = swaggerJSDoc(options)
export { swaggerUi }