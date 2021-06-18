import Base from "./../Base";

export default class Recommendation extends Base {
  constructor(data) {
    super(data);

    if (data.src) {
      this.src = data.src;
    }
    if (data.alt) {
      this.alt = data.alt;
    }
  }
}
