import { HotChocolate } from "./beverages/HotChocolate.js"
import { Complement } from "./complements/Complement.js"
import { Cream } from "./complements/Cream.js"

export class HotChocolateOrder {
  private complements: Complement[] = []

  price() {
    const hotChocolate = new HotChocolate()

    const complementsPrices = this.complements.reduce(
      (complementsSum, nextComplement) => complementsSum + nextComplement.price(),
      0,
    )

    return hotChocolate.price() + complementsPrices
  }

  withCream() {
    this.complements.push(new Cream())
  }
}
