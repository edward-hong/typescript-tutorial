// classes
var Invoice = /** @class */ (function () {
    // readonly client: string
    // private details: string
    // public amount: number
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
export { Invoice };
