import { HotChocolate } from "./beverages/HotChocolate.js"
import { Cream } from "./complements/Cream.js"

export class HotChocolateOrder {
  private hasCream: boolean = false

  price() {
    const hotChocolate = new HotChocolate()

    const cream = this.hasCream ? new Cream() : undefined

    return hotChocolate.price() + (cream ? cream.price() : 0)
  }

  withCream() {
    this.hasCream = true
  }
}
