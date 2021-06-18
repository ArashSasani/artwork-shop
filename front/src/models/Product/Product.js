import Base from "./../Base";
import Details from "./Details";
import Category from "./../Category/Category";
import Image from "./Image";

export default class Product extends Base {
  constructor(data) {
    super(data);

    if (data.name) {
      this.name = data.name;
    }
    if (data.price) {
      this.price = data.price;
    }
    if (data.currency) {
      this.currency = data.currency;
    }
    if (data.bestseller) {
      this.bestseller = data.bestseller;
    }
    if (data.featured) {
      this.featured = data.featured;
    }
    if (data.category) {
      this.category = new Category(data.category);
    }
    if (data.details) {
      this.details = new Details(data.details);
    }
    if (data.image) {
      this.image = new Image(data.image);
    }
  }
}
