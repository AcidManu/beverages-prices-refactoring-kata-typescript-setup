import { Beverage } from "../Beverage.js"

export class Tea implements Beverage {
  price(): number {
    return 1.5
  }
}
