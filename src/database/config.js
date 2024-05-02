"use strict";

const Sequelize = require("sequelize");

// Import the sequelize instance using CommonJS `require`

// Define the database connection function
const connectDatabase = async () => {
  console.log("Conectando a database");

  try {
    // Authenticate with the database

    const sequelize = new Sequelize({
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
    });
    await sequelize.authenticate();
    console.log("Database Conectada!!");
  } catch (error) {
    // Log and exit process on error
    console.log("ERROR", error);
    process.exit(1);
  }
};

// Export the `connectDatabase` function for use in other modules
module.exports = { connectDatabase };
