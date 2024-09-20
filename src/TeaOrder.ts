import { Tea } from "./beverages/Tea.js"
import { Milk } from "./complements/Milk.js"

export class TeaOrder {
  private hasMilk: boolean = false

  price() {
    const tea = new Tea()

    const milk = this.hasMilk ? new Milk() : undefined

    return tea.price() + (milk ? milk.price() : 0)
  }

  withMilk() {
    this.hasMilk = true
  }
}
