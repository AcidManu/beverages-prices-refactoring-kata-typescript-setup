import { Tea } from "./beverages/Tea.js"

export class TeaWithMilk extends Tea {
  price(): number {
    return super.price() + 0.1
  }
}
