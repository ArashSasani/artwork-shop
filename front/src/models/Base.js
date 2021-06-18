export default class Base {
  constructor(d) {
    let data = d || {};
    if (data._id) {
      this.id = data._id;
    }
  }
}
