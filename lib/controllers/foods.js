const express = require("express");
const router = express.Router();
const Food = require("../models/Food.js");

router
  .post("/", async (req, res, next) => {
    try {
      const food = await Food.Insert(req.body);
      res.json(food);
    } catch (err) {
      next(err);
    }
  })
  .get("/:id", async (req, res, next) => {
    try {
      const food = await Food.GetById(req.params.id);
      res.json(food);
    } catch (err) {
      next(err);
    }
  })
  .get("/", async (req, res, next) => {
    try {
      const foods = await Food.GetAll();
      res.json(foods);
    } catch (err) {
      next(err);
    }
  })
  .put("/:id", async (req, res, next) => {
    try {
      const food = await Food.Update(req.params.id, req.body);
      res.json(food);
    } catch (err) {
      next(err);
    }
  })
  .delete("/:id", async (req, res, next) => {
    try {
      const food = await Food.DeleteById(req.params.id);
      res.json(food);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
