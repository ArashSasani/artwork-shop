const mongoose = require("mongoose");
const { categorySchema } = require("../models/category");

const RecommendationSchema = new mongoose.Schema({
  src: { type: String },
  alt: { type: String },
});

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: categorySchema, required: true },
    price: { type: mongoose.Schema.Types.Number, required: true },
    currency: { type: String, required: true, enum: ["$", "€"] },
    image: {
      src: { type: String },
      alt: { type: String },
    },
    bestseller: { type: Boolean },
    featured: { type: Boolean },
    details: {
      dimmentions: {
        width: { type: mongoose.Schema.Types.Number },
        height: { type: mongoose.Schema.Types.Number },
      },
      size: { type: mongoose.Schema.Types.Number },
      description: {
        type: String,
        validator: function (v) {
          return v && v.length > 10;
        },
        message: "A product should have at least a 10 characters description",
      },
      recommendations: [RecommendationSchema],
    },
  })
);

module.exports = Product;
