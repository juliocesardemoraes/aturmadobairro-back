const Sequelize = require("sequelize");
const sequelize = require("./database");
const USER = sequelize.define(
  "User",
  {
    user_id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    nome_user: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    pass: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "user",
    schema: "public",
    timestamps: false,
  }
);

module.exports = USER;
