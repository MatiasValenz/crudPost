const Sequelize = require("sequelize");
require("dotenv").config();

const dataBase = new Sequelize(
  process.env.DATABASE,
  "postgres",
  process.env.JWT_SECRET,
  {
    host: process.env.HOST,
    dialect: "postgres",
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: false,
  }
);

module.exports = dataBase;
