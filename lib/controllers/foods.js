const express = require("express");
const router = express.Router();
const Food = require("../models/Food.js");

router.post("/", async (req, res, next) => {
  const newFood = await Food.Insert(req.body);
  res.json(newFood);
});

module.exports = router;
