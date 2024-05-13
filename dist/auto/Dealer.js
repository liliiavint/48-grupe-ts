export class Dealer {
    currency;
    constructor(name, currency) {
        this.currency = currency;
        console.log(`Hi, my name is ${name}!`);
    }
    formatedPrice(price) {
        let priseString = '' + price;
        if (priseString.length > 4) {
            return +priseString.slice(0, -3) + "." + priseString.slice(-3)+ ' ' + this.currency;
        }
        else {// 5 -> 5 Eur
            // 50 -> 50 Eur
            // 500 -> 500 Eur
            // 1500 -> 1.500 Eur
            // 1050 -> 1.050 Eur
            // 1005 -> 1.005 Eur
            return price + ' ' + this.currency;
        }
    }
    getCar(model, price) {
        return `New car everyone! ${model} for only ${this.formatedPrice(price)}!`;
    }
}
