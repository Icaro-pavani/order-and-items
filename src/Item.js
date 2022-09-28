export default class Item {
  constructor(category, description, price) {
    if (this.constructor === Item) {
      throw new Error("Abstract classes can't be istantiated!");
    }
    this.category = category;
    this.description = description;
    this.price = price;
  }
}
