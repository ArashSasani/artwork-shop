const Product = require("../models/product");

async function getFeatured() {
  const product = await Product.findOne({ featured: true });
  //console.log(`record fetched: ${product}`);
  return product;
}

async function getTotalCount({ categories = "", price: priceIndex = 4 }) {
  //price filter
  let priceList = [
    { $lt: 20 },
    { $lte: 100, $gte: 20 },
    { $lte: 200, $gt: 100 },
    { $gt: 200 },
    { $gte: 0 }, //all
  ];
  const count = categories
    ? await Product.find({
        category: { $in: categories.split(",") },
      })
        .find({ price: priceList[priceIndex] })
        .countDocuments()
    : await Product.find()
        .find({ price: priceList[priceIndex] })
        .countDocuments();
  //console.log(`total count is: ${count}`);
  return count;
}

async function get({
  page,
  pageSize = 6,
  categories = "",
  price: priceIndex = 4,
  sortItem = 0,
  sortOrder = "asc",
}) {
  //price filter
  let priceList = [
    { $lt: 20 },
    { $lte: 100, $gte: 20 },
    { $lte: 200, $gt: 100 },
    { $gt: 200 },
    { $gte: 0 }, //all
  ];
  //sortItem filter
  let sortItemList = ["name", "price"];
  let selectedSortItem = sortItemList[sortItem];
  //sortOrder filter
  let selectedSortOrder = sortOrder === "asc" ? 1 : -1;

  const products = categories
    ? await Product.find({
        category: { $in: categories.split(",") },
      })
        .find({ price: priceList[priceIndex] })
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .sort({ [selectedSortItem]: selectedSortOrder })
    : await Product.find({ price: priceList[priceIndex] })
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .sort({ [selectedSortItem]: selectedSortOrder });
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
