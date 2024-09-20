import { Coffee } from "./beverages/Coffee.js"
import { Cinnamon } from "./complements/Cinnamon.js"
import { Complement } from "./complements/Complement.js"
import { Cream } from "./complements/Cream.js"
import { Milk } from "./complements/Milk.js"

export class CoffeeOrder {
  private complements: Complement[] = []

  price() {
    const coffee = new Coffee()

    const complementsPrices = this.complements.reduce(
      (complementsSum, nextComplement) => complementsSum + nextComplement.price(),
      0,
    )

    return coffee.price() + complementsPrices
  }

  withMilk() {
    this.complements.push(new Milk())
  }

  withMilkAndCream() {
    this.complements.push(new Milk())
    this.complements.push(new Cream())
  }

  withCinnamon() {
    this.complements.push(new Cinnamon())
  }
}
