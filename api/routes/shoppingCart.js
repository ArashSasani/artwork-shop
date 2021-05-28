const express = require("express");
const router = express.Router();

const {
  get,
  getById,
  save,
  remove,
  removeAll,
} = require("../services/shoppingCart");
const { getById: getProduct } = require("../services/product");
const { validate } = require("../models/shoppingCart");
const errors = require("../constants/errors");

router.get("/", async (req, res) => {
  const cartItems = await get();
  res.send(cartItems);
});

router.post("/", async (req, res) => {
  //input validation
  const error = validate(req.body);
  if (error) return res.status(400).send(error);
  //content validation
  const product = await getProduct(req.body.productId);
  if (!product)
    return res.status(404).send(`${errors[404]}: product id is invalid`);

  //new item
  let cartItem = {
    product: product._id,
    quantity: req.body.quantity,
  };
  const result = await save(cartItem);
  if (!result) return res.status(500).send(`${errors[500]}`);
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  //content validation
  const id = req.params.id;
  const cartItem = await getById(id);
  if (!cartItem)
    return res.status(404).send(`${errors[404]}: cartItem id is invalid`);

  const result = await remove(id);
  if (!result) return res.status(500).send(`${errors[500]}`);
  res.send(result);
});

router.delete("/", async (req, res) => {
  const result = await removeAll();
  if (!result) return res.status(500).send(`${errors[500]}`);
  res.send(result);
});

module.exports = router;
