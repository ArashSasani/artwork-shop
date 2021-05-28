const { ShoppingCart } = require("../models/shoppingCart");

async function get() {
  const cartItems = await ShoppingCart.find()
    .sort({ dateAdded: 1 })
    .populate("product", "name category -_id")
    .select("quantity product");
  //console.log(`records fetched: ${cartItems}`);
  return cartItems;
}

async function getById(id) {
  const cartItem = await ShoppingCart.findById(id);
  //console.log(`record fetched: ${cartItem}`);
  return cartItem;
}

async function save({ quantity, product }) {
  const cartItem = await ShoppingCart.findOne({ product });
  let result;
  if (!cartItem) {
    result = await create(quantity, product);
  } else {
    result = await update(cartItem._id, cartItem.quantity + quantity);
  }
  return result;
}

async function remove(id) {
  const cartItem = await ShoppingCart.findById(id);
  let result;
  if (cartItem.quantity > 1) {
    result = await update(cartItem._id, cartItem.quantity - 1);
  } else {
    result = await ShoppingCart.findByIdAndRemove({ _id: id });
    //console.log(`record deleted: ${result}`);
  }
  return result;
}

async function removeAll() {
  const result = await ShoppingCart.deleteMany({});
  //console.log(`result of records deleted: ${result}`);
  return result;
}

//private
async function create(quantity, product) {
  const shoppingCart = new ShoppingCart({
    quantity,
    product,
  });
  const result = await shoppingCart.save();
  //console.log(`record created: ${result}`);
  return result;
}

//private
async function update(id, quantity) {
  const result = await ShoppingCart.findByIdAndUpdate(
    id,
    {
      $set: {
        quantity,
      },
    },
    { new: true } //retrieve the updated
  );
  //console.log(`record updated to: ${result}`);
  return result;
}

module.exports = {
  get,
  getById,
  save,
  remove,
  removeAll,
};
