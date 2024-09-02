import { useState, useMemo } from "react";
import { DiscountStrategy } from "@/types/DiscountStrategyTypes";

export default function useSelfPickUp(amount: number, strategy: DiscountStrategy) {
    const [selfPickUp, setSelfPickup] = useState<boolean>(false);

    const {total, discount} = useMemo(
        () => ({
            total: selfPickUp ? amount - strategy.getDiscount(amount) : amount,
            discount: strategy.getDiscount(amount),
        }),
        [amount, selfPickUp, strategy]
    );

    const updateSelfPickUp = () => {
        setSelfPickup((selfPickUp) => !selfPickUp);
    };

    return {
        total,
        discount,
        selfPickUp,
        updateSelfPickUp,
    };
};
