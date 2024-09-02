import { DiscountStrategy } from "@/types/DiscountStrategyTypes";

export default class DiscountStrategyClassic implements DiscountStrategy {
    get validUFrom(): Date {
        return new Date(1970, 0, 1);
    }

    get validUntil(): Date {
        return new Date(2030, 0, 1);
    }

    getDiscount(amount: number): number {
        const today = new Date();
        if (today > this.validUFrom && today < this.validUntil) {
            return parseFloat((amount * 0.1).toPrecision(10));
        }
        return amount;
    }
  }
  