const express = require("express");
const router = express.Router();
const Food = require("../models/Food.js");

router
  .post("/", async (req, res, next) => {
    const food = await Food.Insert(req.body);
    res.json(food);
  })
  .get("/:id", async (req, res, next) => {
    const food = await Food.GetById(req.params.id);
    res.json(food);
  })
  .get("/", async (req, res, next) => {
    const foods = await Food.GetAll();
    res.json(foods);
  })
  .put("/:id", async (req, res, next) => {
    const food = await Food.Update(req.params.id, req.body);
    res.json(food);
  });

module.exports = router;
