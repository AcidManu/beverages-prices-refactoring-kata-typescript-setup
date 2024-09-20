import { describe, expect, it } from "vitest"
import { Tea } from "./beverages/Tea.js"
import { CoffeeOrder } from "./CoffeeOrder.js"
import { HotChocolateOrder } from "./HotChocolateOrder.js"
import { TeaOrder } from "./TeaOrder.js"

describe("Beverages Prices", () => {
  describe("base beverage cases", () => {
    it("computes coffee price", () => {
      const coffeeOrder = new CoffeeOrder()
      expect(coffeeOrder.price()).toBeCloseTo(1.2)
    })

    it("computes tea price", () => {
      const tea = new Tea()
      expect(tea.price()).toBeCloseTo(1.5)
    })

    it("computes hot chocolate price", () => {
      const hotChocolateOrder = new HotChocolateOrder()
      expect(hotChocolateOrder.price()).toBeCloseTo(1.45)
    })
  })

  describe("beverages with milk cases (+10 cents)", () => {
    it("computes tea with milk price", () => {
      const teaOrder = new TeaOrder()
      teaOrder.withMilk()

      expect(teaOrder.price()).toBeCloseTo(1.6)
    })

    it("computes coffee with milk price", () => {
      const coffeeOrder = new CoffeeOrder()
      coffeeOrder.withMilk()

      expect(coffeeOrder.price()).toBeCloseTo(1.3)
    })
  })

  describe("beverages with cream cases (+15 cents)", () => {
    it("computes coffee with milk and cream price", () => {
      const coffeeOrder = new CoffeeOrder()
      coffeeOrder.withMilkAndCream()

      expect(coffeeOrder.price()).toBeCloseTo(1.45)
    })

    it("computes hot chocolate with cream price", () => {
      const hotChocolateOrder = new HotChocolateOrder()
      hotChocolateOrder.withCream()
      expect(hotChocolateOrder.price()).toBeCloseTo(1.6)
    })
  })

  describe("Cinnamon cases", () => {
    it("computes coffee with cinnamon", () => {
      const coffeeOrder = new CoffeeOrder()
      coffeeOrder.withCinnamon()

      expect(coffeeOrder.price()).toBeCloseTo(1.25)
    })
  })
})
