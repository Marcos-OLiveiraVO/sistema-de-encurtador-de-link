require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const urlRoutes = require("./Routers/urlRoutes");

app.use("/", urlRoutes);

mongoose
  .connect(process.env.MONGO_CONNECTION_URL)
  .then((db) => console.log(`Database Connected`))
  .catch((err) => console.log(`An error ocorried ${err}`));

app.listen(process.env.PORT, () => console.log(`Server is running...`));
