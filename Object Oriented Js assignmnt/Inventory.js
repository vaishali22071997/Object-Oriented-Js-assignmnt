// Product constructor function
function Product(name, category, price, stock) {
  this.name = name;
  this.category = category;
  this.price = price;
  this.stock = stock;
}

// Inventory constructor function
function Inventory() {
  this.products = [];
}

// Method to add a valid Product object to the inventory
Inventory.prototype.addProduct = function (product) {
  if (product instanceof Product) {
    this.products.push(product);
    console.log(`Product '${product.name}' added to the inventory.`);
  } else {
    console.log('Invalid product. Please provide a valid Product object.');
  }
};

// Method to delete a product from the inventory by name
Inventory.prototype.deleteProduct = function (productName) {
  const productIndex = this.products.findIndex((product) => product.name === productName);
  if (productIndex !== -1) {
    this.products.splice(productIndex, 1);
    console.log(`Product '${productName}' has been successfully deleted from the inventory.`);
  } else {
    console.log(`Product '${productName}' not found in the inventory.`);
  }
};

// Example usage:
const inventory = new Inventory();

const product1 = new Product('Laptop', 'Electronics', 999.99, 10);
const product2 = new Product('Headphones', 'Electronics', 49.99, 20);
const product3 = new Product('Book', 'Books', 12.99, 30);

inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);

console.log('Current Inventory:');
console.log(inventory.products);

inventory.deleteProduct('Laptop');
inventory.deleteProduct('Phone'); // Product not found

console.log('Updated Inventory:');
console.log(inventory.products);
