import TaxItem from "./TaxItem";

export default class Eletronics extends TaxItem {
  constructor(category, description, price) {
    super(category, description, price);
    this.tax = 0.3;
  }

  getTax() {
    return this.tax;
  }
}
