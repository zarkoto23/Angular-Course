class Ticket {
  destination: string;
  price: number;
  status: string;

  constructor(destination: string, price: number, status: string) {
    this.destination = destination;
    this.price = price;
    this.status = status;
  }
}

function dataSort(masiv: string[], criterii: string): Ticket[] {
  const tiketi = masiv.map((ticket) => {
    let [destination, price, status] = ticket.split("|");

    return new Ticket(destination, Number(price), status);
  });

  return tiketi.sort((a, b) => {
    const aValue = a[criterii];
    const bValue = b[criterii];

    if (typeof aValue === "number" && typeof bValue === "number") {
      return aValue - bValue;
    }

    return aValue.toString().localeCompare(bValue.toString());
  });
}

const masiv = [
  "Philadelphia|94.20|available",

  "New York City|95.98|available",

  "New York City|95.97|sold",

  "Boston|126.20|departed",
];

const criterii = "price";

const result = dataSort(masiv, criterii);
console.log(result);

// return tickets.sort((a, b) => {
//   const aValue = a[criterii];
//   const bValue = b[criterii];

//   if (typeof aValue === "number" && typeof bValue === "number") {
//     return aValue - bValue;
//   }
//   return aValue.toString().localCompare(bValue.toString());
// });
