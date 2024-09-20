import { Coffee } from "./beverages/Coffee.js"
import { Complement } from "./complements/Complement.js"
import { Cream } from "./complements/Cream.js"
import { Milk } from "./complements/Milk.js"

export class CoffeeOrder {
  private hasMilk: boolean = false
  private hasCream: boolean = false

  private complements: Complement[] = []

  price() {
    const coffee = new Coffee()

    const milk = this.hasMilk ? new Milk() : undefined
    const cream = this.hasCream ? new Cream() : undefined

    const complementsPrices = this.complements.reduce(
      (complementsSum, nextComplement) => complementsSum + nextComplement.price(),
      0,
    )

    return coffee.price() + complementsPrices
  }

  withMilk() {
    this.complements.push(new Milk())
    this.hasMilk = true
  }

  withMilkAndCream() {
    this.complements.push(new Milk())
    this.complements.push(new Cream())
    this.hasMilk = true
    this.hasCream = true
  }
}
