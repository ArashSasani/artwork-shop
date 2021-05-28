const mongoose = require("mongoose");
const { Category } = require("../models/category");
const { create: createProduct } = require("../services/product");

//db connection
mongoose
  .connect("mongodb://localhost/artwork-shop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("[seed] Connection established to MongoDB"))
  .catch((error) => console.error("Could not connect to MongoDB. ", error));

const peopleCategory = new Category({ name: "people" });
const foodCategory = new Category({ name: "food" });
const landmarksCategory = new Category({ name: "landmarks" });

createProduct({
  name: "Red Bench",
  category: peopleCategory,
  price: 3.89,
  currency: "$",
  image: {
    src: "https://picsum.photos/800/400",
    alt: "",
  },
  bestseller: true,
  featured: false,
  details: null,
});
createProduct({
  id: 2,
  name: "Egg Balloon",
  category: foodCategory,
  price: 93.89,
  currency: "$",
  image: {
    src: "https://picsum.photos/800/400",
    alt: "",
  },
  bestseller: false,
  featured: false,
  details: null,
});
createProduct({
  id: 3,
  name: "Man",
  category: peopleCategory,
  price: 100,
  currency: "$",
  image: {
    src: "https://picsum.photos/800/400",
    alt: "",
  },
  bestseller: false,
  featured: false,
  details: null,
});
createProduct({
  id: 4,
  name: "Architecture",
  category: landmarksCategory,
  price: 101,
  currency: "$",
  dimmentions: {
    width: 1020,
    height: 1020,
  },
  image: {
    src: "https://picsum.photos/800/400",
    alt: "",
  },
  bestseller: false,
  featured: false,
  details: null,
});
createProduct({
  id: 5,
  name: "Samurai King Restling",
  category: landmarksCategory,
  price: 101,
  currency: "$",
  image: {
    src: "https://picsum.photos/800/400",
    alt: "",
  },
  bestseller: false,
  featured: true,
  details: {
    dimmentions: {
      width: 1020,
      height: 1020,
    },
    size: 15000,
    description:
      "So how did the classical Latin become so incoherent? According to McClintock",
    recommendations: [
      {
        src: "https://picsum.photos/150/200",
        alt: "recom 1",
      },
      {
        src: "https://picsum.photos/150/200",
        alt: "recom 2",
      },
      {
        src: "https://picsum.photos/150/200",
        alt: "recom 3",
      },
    ],
  },
});
