export default class OrderItem {
    private _name: string;
    private _price: number;
    private _isTodaysDeal: boolean;

    constructor(name: string, price: number, isTodaysDeal: boolean) {
        this._name = name;
        this._price = price;
        this._isTodaysDeal = isTodaysDeal;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    get isTodaysDeal() {
        return this._isTodaysDeal;
    }
}
