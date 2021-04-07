const { urlencoded } = require("express");
const express = require("express");
const pool = require("./utils/pool.js");
const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use("/api/foods", require("./controllers/foods.js"));

app.use(require("./middleware/error.js"));

module.exports = app;
