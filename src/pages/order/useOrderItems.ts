import { useEffect, useState } from "react";
import OrderItem from "@/models/OrderItem";
import fetchPizzaOrderItems from "@/services/PizzaService";

export default function useOrderItems () {
    const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

    useEffect(() => {
        fetchPizzaOrderItems().then(orderItems => setOrderItems(orderItems))
    }, []);

    return {orderItems};
};
