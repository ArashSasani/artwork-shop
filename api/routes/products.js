const express = require("express");
const router = express.Router();

const {
  getFeatured,
  getTotalCount,
  get,
  getById,
} = require("../services/product");
const errors = require("../constants/errors");

router.get("/featured/", async (req, res) => {
  const product = await getFeatured();
  res.send(product);
});

router.get("/count/", async (req, res) => {
  let queryStrings = req.query;
  // console.log(queryStrings);

  const count = await getTotalCount(queryStrings);
  res.send({ totalCount: count });
});

router.get("/", async (req, res) => {
  let queryStrings = req.query;
  // console.log(queryStrings);

  const items = await get(queryStrings);
  if (!items) return res.status(404).send(errors[404]);
  res.send(items);
});

router.get("/details/:id", async (req, res) => {
  const id = req.params.id;
  let product = await getById(id);
  if (!product) return res.status(404).send(errors[404]);
  res.send(product);
});

module.exports = router;
