import Dimension from "./Dimension";
import Recommendation from "./Recommendation";

export default class Details {
  constructor(data) {
    this.recommendations = [];

    if (data.size) {
      this.size = data.size;
    }
    if (data.description) {
      this.description = data.description;
    }
    if (data.dimmentions) {
      this.dimension = new Dimension(data.dimmentions);
    }
    if (data.recommendations) {
      for (let index = 0; index < data.recommendations.length; index++) {
        this.recommendations.push(
          new Recommendation(data.recommendations[index])
        );
      }
    }
  }
}
