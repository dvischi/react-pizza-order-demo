import React, { useState } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import Checkbox from "@/components/Checkbox";
import DefaultLayout from "@/layouts/DefaultLayout";
import "@/styles/pages/orderpage.scss"
import i18next from "i18next";
import useOrderItems from "./useOrderItems";
import OrderItem from "@/models/OrderItem";
import { DiscountStrategy } from "@/types/DiscountStrategyTypes";
import DiscountStrategyClassic from "@/models/DiscountStrategyClassig";
import useSelfPickUp from "./useSelfPickUp";

const commonCheckboxProps: {className: string, type: "checkbox" | "radio", name: string} = {
    className: "order-item", type: "radio", name: "order-item"
};

const formatOrderItemLabel = (t: typeof i18next.t, orderItem: OrderItem) => {
    return `${orderItem.name} ($${orderItem.price}) ` + (orderItem.isTodaysDeal ? t('deal') : "");
};

const formatCheckboxLabel = (t: typeof i18next.t, selfPickUp: boolean, discount: number) => {
    return t('delivery', {context: selfPickUp ? "self_pick_up" : "", discount: discount});
};

const formatButtonLabel = (t: typeof i18next.t, total: number) => {
    return t('order', {total: total});
};

interface OrderPageProps extends WithTranslation {
    selfPickUpDiscountStrategy?: DiscountStrategy;
}

export function OrderPage({ selfPickUpDiscountStrategy=new DiscountStrategyClassic(), t }: OrderPageProps) {
    const [amount, setAmount] = useState<number>(0);
    const {orderItems} = useOrderItems();
    const {total, discount, selfPickUp, updateSelfPickUp} = useSelfPickUp(amount, selfPickUpDiscountStrategy);

    return (
        <DefaultLayout>
            <div className="order-page">
                <h3>{t("header")}</h3>
                <div className="content">
                    <div className="order-items">
                        {orderItems.map((orderItem) => (
                            <div key={`order-item-${orderItem.name}`}>
                                <Checkbox {...commonCheckboxProps}
                                    label={formatOrderItemLabel(t, orderItem)}
                                    value={orderItem.name}
                                    onChange={() => setAmount(orderItem.price)}
                                />
                            </div>
                        ))}
                    </div>
                    <div>
                        <hr />
                    </div>
                    <Checkbox
                        label={formatCheckboxLabel(t, selfPickUp, discount)}
                        checked={selfPickUp}
                        onChange={updateSelfPickUp}
                    />
                    <div>
                        <button>{formatButtonLabel(t, total)}</button>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default withTranslation('order')(OrderPage);
