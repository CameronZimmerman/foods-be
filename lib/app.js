const { urlencoded } = require("express");
const express = require("express");
const pool = require("./utils/pool.js");
const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.post("/api/foods", async (req, res, next) => {
  const {
    rows,
  } = await pool.query(
    `INSERT INTO foods (name, tastiness) VALUES ($1, $2) RETURNING *`,
    [req.body.name, req.body.tastiness]
  );

  res.json(rows[0]);
});

module.exports = app;
