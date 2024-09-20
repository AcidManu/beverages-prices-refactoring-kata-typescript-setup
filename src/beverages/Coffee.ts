import { Beverage } from "../Beverage.js"

export class Coffee implements Beverage {
  price(): number {
    return 1.2
  }
}
