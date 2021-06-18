export default class Image {
  constructor(data) {
    if (data.src) {
      this.src = data.src;
    }
    if (data.alt) {
      this.alt = data.alt;
    }
  }
}
