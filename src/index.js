"use strict";
const express = require("express");
const cors = require("cors");
const { connectDatabase } = require("./database/config");

// Create an Express application
const app = express();

// Use CORS and JSON body parsing middleware
app.use(cors());
app.use(express.json());

// Define a simple GET endpoint
app.get("/", (req, res) => {
  res.send({ working: true });
});

(async () => {
  await connectDatabase();
  app.listen(4000, () => {
    console.log("Server is running on port 4000");
  });
})();

// Export the `app` instance for testing or other purposes
module.exports = { app };
