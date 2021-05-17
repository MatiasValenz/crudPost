const Sequelize = require("sequelize");
const dataBase = require("../database/database");

//Definir modelo
const Post = dataBase.define("posts", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
});

module.exports = Post;
