import { Coffee } from "./Coffee.js"
import { Milk } from "./complements/Milk.js"

export class CoffeeOrder {
  private hasMilk: boolean = false

  price() {
    const coffee = new Coffee()

    const milk = this.hasMilk ? new Milk() : undefined

    return coffee.price() + (milk ? milk.price() : 0)
  }

  withMilk() {
    this.hasMilk = true
  }
}
