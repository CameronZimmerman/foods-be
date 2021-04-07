const express = require("express");
const router = express.Router();

router.post("/", async (req, res, next) => {
  //stuff

  res.json(rows[0]);
});

module.exports = router;
