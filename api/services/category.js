const { Category } = require("../models/category");

async function get() {
  const categories = await Category.find();
  //console.log(`records fetched: ${categories}`);
  return categories;
}

async function create(category) {
  const result = await category.save();
  //console.log(`record created: ${result}`);
  return result;
}

module.exports = {
  get,
  create,
};
