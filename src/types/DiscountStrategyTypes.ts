export interface DiscountStrategy {
    validUFrom: Date;
    validUntil: Date;
    getDiscount(amount: number): number;
}
