import { Tea } from "./beverages/Tea.js"
import { Complement } from "./complements/Complement.js"
import { Milk } from "./complements/Milk.js"

export class TeaOrder {
  private complements: Complement[] = []

  price() {
    const tea = new Tea()

    const complementsPrices = this.complements.reduce(
      (complementsSum, nextComplement) => complementsSum + nextComplement.price(),
      0,
    )
    return tea.price() + complementsPrices
  }

  withMilk() {
    this.complements.push(new Milk())
  }
}
