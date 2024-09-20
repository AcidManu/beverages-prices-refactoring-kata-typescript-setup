import { Beverage } from "../Beverage.js"

export class HotChocolate implements Beverage {
  price(): number {
    return 1.45
  }
}
