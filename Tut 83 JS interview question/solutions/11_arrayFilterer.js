let products=[
  { name: "Laptop", price: 999, category: "Electronics" },
  { name: "Smartphone", price: 699, category: "Electronics" },
  { name: "Coffee Maker", price: 99, category: "Home Appliances" },
  { name: "Blender", price: 49, category: "Home Appliances" },
  { name: "Desk", price: 199, category: "Furniture" },
  { name: "Chair", price: 89, category: "Furniture" },
  { name: "Book", price: 19, category: "Books" },
  { name: "Pen", price: 2, category: "Stationery" },
  { name: "Notebook", price: 5, category: "Stationery" },
  { name: "Headphones", price: 149, category: "Electronics" },
  { name: "Smartwatch", price: 299, category: "Electronics" },
  { name: "Tablet", price: 399, category: "Electronics" },
  { name: "Monitor", price: 199, category: "Electronics" },
  { name: "Mouse", price: 25, category: "Electronics" },
  { name: "Keyboard", price: 30, category: "Electronics" },
    { name: "Printer", price: 150, category: "Electronics" },
    { name: "Router", price: 80, category: "Electronics" },
    { name: "Speaker", price: 120, category: "Electronics" },
    { name: "Camera", price: 499, category: "Electronics" },
    { name: "Smart TV", price: 799, category: "Electronics" }
];
let filteredProducts = products.filter(product => product.price < 100 && product.category === "Electronics");
console.log(filteredProducts);