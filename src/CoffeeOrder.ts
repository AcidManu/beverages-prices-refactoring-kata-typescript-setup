import { Coffee } from "./Coffee.js"

export class CoffeeOrder {
  price() {
    const coffee = new Coffee()
    return coffee.price()
  }
}
