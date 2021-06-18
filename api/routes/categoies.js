const express = require("express");
const router = express.Router();

const { get } = require("../services/category");

router.get("/", async (req, res) => {
  const categories = await get();
  res.send(categories);
});

module.exports = router;
