const mongoose = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const minQuantity = 1;
const maxQauntity = 10;

const ShoppingCart = mongoose.model(
  "ShoppingCart",
  new mongoose.Schema({
    quantity: {
      type: mongoose.Schema.Types.Number,
      required: true,
      min: minQuantity,
      max: maxQauntity,
    },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    dateAdded: { type: Date, default: Date.now },
  })
);

const shoppingCartSchema = Joi.object({
  productId: Joi.objectId().required(),
  quantity: Joi.number().min(minQuantity).max(maxQauntity).required(),
});

const validate = (item) => {
  const { error } = shoppingCartSchema.validate(item);
  return error && error.details[0].message;
};

module.exports = {
  ShoppingCart,
  validate,
};
