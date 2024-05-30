export function getProduct(productId) {
  let matchProduct;
  products.forEach((product) => {
    if (product.id === productId) {
      matchProduct = product;
    }
  });
  return matchProduct;
}
export const products = [
  {
    id: "1",
    image: "images/mobile/1 (1).jpg",
    name: "Iphone 15",
    color: "green",
    priceCents: "129900",
  },
  {
    id: "2",
    name: "Tablet A2",
    image: "images/tablet/1 (1).jpg",
    color: "green",
    priceCents: "50000",
  },
  {
    id: "3",
    name: "T-shirt ",
    image: "images/shaatiyasha/1 (1).jpg",
    color: "green",
    priceCents: "2500",
  },
  {
    id: "4",
    name: "HP Levona",
    image: "images/redmi/1 (1).jpg",
    color: "green",
    priceCents: "60000",
  },
  {
    id: "5",
    name: "Pro 15",
    image: "images/oppo/1 (1).jpg",
    color: "green",
    priceCents: "1000",
  },

  {
    id: "6",
    name: "John",
    image: "images/shaati/IMG-20221220-WA0131.jpg",
    color: "green",
    priceCents: "1900",
  },
  {
    id: "7",
    name: "John",
    image: "images/fanaanad/1 (1).jpg",
    color: "green",
    priceCents: "30000",
  },
  {
    id: "8",
    name: "John",
    image: "images/samsung/1 (10).jpg",
    color: "green",
    priceCents: "90000",
  },
  {
    id: "9",
    name: "John",
    image: "images/headPhones/1 (10).jpg",
    color: "green",
    priceCents: "70000",
  },
  {
    id: "10",
    name: "John",
    image: "images/airpots/1 (1).jpg",
    color: "green",
    priceCents: "2000",
  },
  {
    id: "11",
    name: "John",
    image: "images/laptop/1 (1).jpg",
    color: "green",
    priceCents: "1200",
  },
  {
    id: "12",
    name: "John",
    image: "images/shaatiyasha/1 (2).jpg",
    color: "green",
    priceCents: "2500",
  },
];
