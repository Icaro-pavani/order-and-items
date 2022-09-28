import TaxItem from "./TaxItem";

export default class Cigar extends TaxItem {
  constructor(category, description, price) {
    super(category, description, price);
    this.tax = 0.25;
  }

  getTax() {
    return this.tax;
  }
}
