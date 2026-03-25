var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function dataSort(masiv, criterii) {
    var tiketi = masiv.map(function (ticket) {
        var _a = ticket.split('|'), destination = _a[0], price = _a[1], status = _a[2];
        return new Ticket(destination, Number(price), status);
    });
    return tiketi.sort(function (a, b) {
        var aValue = a[criterii];
        var bValue = b[criterii];
        if (typeof aValue === 'number' && typeof bValue === 'number') {
            return aValue - bValue;
        }
        return aValue.toString().localeCompare(bValue.toString());
    });
}
var masiv = [
    'Philadelphia|94.20|available',
    'New York City|95.98|available',
    'New York City|95.97|sold',
    'Boston|126.20|departed'
];
var criterii = "price";
var result = dataSort(masiv, criterii);
console.log(result);
// return tickets.sort((a, b) => {
//   const aValue = a[criterii];
//   const bValue = b[criterii];
//   if (typeof aValue === "number" && typeof bValue === "number") {
//     return aValue - bValue;
//   }
//   return aValue.toString().localCompare(bValue.toString());
// });
