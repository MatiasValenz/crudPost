const express = require("express");
const sequelze = require("./database/database");
const cors = require("cors");

const app = express();
require("dotenv").config();

//Middlewares
app.use(cors());
app.use(express.json());

//Database test
const db = require("./database/database");

db.authenticate()
  .then(() => {
    console.log("DB Connet");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

//Routes setup
app.use("/api/post", require("./routes/post"));

//Listen to port
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server in port:${port}`);
});
