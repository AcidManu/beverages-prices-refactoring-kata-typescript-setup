import { Coffee } from "./Coffee.js"
import { Cream } from "./complements/Cream.js"
import { Milk } from "./complements/Milk.js"

export class CoffeeOrder {
  private hasMilk: boolean = false
  private hasCream: boolean = false

  price() {
    const coffee = new Coffee()

    const milk = this.hasMilk ? new Milk() : undefined
    const cream = this.hasCream ? new Cream() : undefined

    return coffee.price() + (milk ? milk.price() : 0) + (cream ? cream.price() : 0)
  }

  withMilk() {
    this.hasMilk = true
  }

  withMilkAndCream() {
    this.hasMilk = true
    this.hasCream = true
  }
}
