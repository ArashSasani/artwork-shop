export default class Dimmention {
  constructor(data) {
    if (data.width) {
      this.width = data.width;
    }
    if (data.height) {
      this.height = data.height;
    }
  }
}
