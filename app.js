const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

// Create the Express app
const app = express();

// Swagger setup
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Hello World API",
            version: "1.0.0",
            description: "A simple API that returns 'Hello, world!'",
        },
    },
    apis: ["./app.js"], // Path to the file with your endpoint annotations
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Define the endpoint
/**
* @swagger
* /:
*   get:
*     summary: Returns a Hello World message.
*     responses:
*       200:
*         description: A JSON object with a Hello World message.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*                   example: Hello, world!
*/
app.get("/", (req, res) => {
    res.json({ message: "Hello, Idemia!" });
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
});
