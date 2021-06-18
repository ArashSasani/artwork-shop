import Base from "../Base";
export default class Category extends Base {
  constructor(data) {
    super(data);

    if (data.name) {
      this.name = data.name;
    }
  }
}
