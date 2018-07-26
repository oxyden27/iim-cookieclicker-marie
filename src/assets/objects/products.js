import uuid from "uuid/v4";

// List of products
export default {
  products: [
    {
      id: uuid(),
      name: "Cursor",
      price: 50,
      cookiePerSeconds: 1,
      purchased: 0
    },
    {
      id: uuid(),
      name: "Grandma",
      price: 100,
      cookiePerSeconds: 5,
      purchased: 0
    },
    {
      id: uuid(),
      name: "Farmer",
      price: 500,
      cookiePerSeconds: 20,
      purchased: 0
    },
    {
      id: uuid(),
      name: "Tree",
      price: 1500,
      cookiePerSeconds: 100,
      purchased: 0
    }
  ]
};
