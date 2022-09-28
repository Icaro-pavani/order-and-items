import Item from "./Item";

export default class TaxItem extends Item {
  constructor(category, description, price) {
    super(category, description, price);
    if (this.constructor === TaxItem) {
      throw new Error("Abstract classes can't be istantiated!");
    }
  }

  getTax() {
    throw new Error("Method 'getTax()' must be implemented");
    // return this.tax ? this.tax : 0;
  }

  calculateTax() {
    return this.price * this.getTax();
  }
}
