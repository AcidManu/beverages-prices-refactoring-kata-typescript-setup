import { Coffee } from "./Coffee.js"

export class CoffeeOrder {
  private hasMilk: boolean = false

  price() {
    const coffee = new Coffee()
    return coffee.price() + (this.hasMilk ? 0.1 : 0)
  }

  withMilk() {
    this.hasMilk = true
  }
}
