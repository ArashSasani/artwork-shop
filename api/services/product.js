const Product = require("../models/product");

//price filter
let priceList = [
  { $lt: 20 },
  { $lte: 100, $gte: 20 },
  { $lte: 200, $gt: 100 },
  { $gt: 200 },
  { $gte: 0 }, //all
];

async function getFeatured() {
  const product = await Product.findOne({ featured: true });
  //console.log(`record fetched: ${product}`);
  return product;
}

async function getTotalCount({
  categories = "",
  price: priceIndex = priceList.length - 1,
}) {
  //query
  let query = Product.find({ price: priceList[priceIndex] });
  //filter
  if (categories) {
    query = query.find({ "category.name": { $in: categories.split(",") } });
  }
  query = query.countDocuments();
  //console.log(`total count is: ${count}`);
  return count;
}

async function get({
  page,
  pageSize,
  categories = "",
  price: priceIndex = priceList.length - 1,
  sortItem = 0,
  sortOrder = "asc",
}) {
  //sortItem filter
  let sortItemList = ["name", "price"];
  let selectedSortItem = sortItemList[sortItem];
  //sortOrder filter
  let selectedSortOrder = sortOrder === "asc" ? 1 : -1;

  //query
  let query = Product.find({ price: priceList[priceIndex] });
  //filter
  if (categories) {
    query = query.find({ "category.name": { $in: categories.split(",") } });
  }

  query = query
    .skip((page - 1) * pageSize)
    .limit(parseInt(pageSize))
    .sort({ [selectedSortItem]: selectedSortOrder });

  const products = await query;
  //console.log(`records fetched: ${products}`);
  return products;
}

async function getById(id) {
  const product = await Product.findById(id);
  //console.log(`record fetched: ${product}`);
  return product;
}

async function create(productProps) {
  const product = new Product({
    ...productProps,
  });

  const result = await product.save();
  //console.log(`record created: ${result}`);
  return result;
}

module.exports = {
  getFeatured,
  getTotalCount,
  get,
  getById,
  create,
};
