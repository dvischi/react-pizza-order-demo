import OrderItem from "@/models/OrderItem";
import { PizzaOffer } from "@/types/PizzaOfferTypes";

const convertPizzaOffers = (offers: PizzaOffer[]) => {
    const orderItems: OrderItem[] = offers.map(
        (offer) => new OrderItem(offer.name, offer.price, offer.isTodaysDeal)
    );

    return orderItems;
};

export default async function fetchPizzaOrderItems () {
    const url = "https://react-pizza-order.demo/api/offers";
    const offers: PizzaOffer[] = await fetch(url)
        .then(response => response.json())
        .catch(error => [
            {name: "Pizza Margherita", description: "...", price: 10, rating: 5, isTodaysDeal: true},
            {name: "Pizza Prosciutto", description: "...", price: 14, rating: 4.5, isTodaysDeal: false},
            {name: "Pizza Hawaiian", description: "...", price: 15, rating: 3.5, isTodaysDeal: false},
        ]) as PizzaOffer[];

    return convertPizzaOffers(offers)
}
