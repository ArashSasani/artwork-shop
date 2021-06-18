const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const categories = require("../routes/categoies");
const products = require("../routes/products");
const shoppingCart = require("../routes/shoppingCart");
const errorMiddleware = require("../middlewares/error");

module.exports = function (app) {
  app.use(express.json());
  app.use(helmet());
  app.use(cors());
  app.use("/api/categories", categories);
  app.use("/api/products", products);
  app.use("/api/shoppingcart", shoppingCart);
  app.use(errorMiddleware);
};
