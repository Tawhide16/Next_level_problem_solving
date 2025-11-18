type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number; // optional
};

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => {

    let productTotal = product.price * product.quantity;

    if (product.discount) {
      productTotal = productTotal * (1 - product.discount / 100);
    }

    return total + productTotal;
  }, 0);
}

const products = [
  { name: 'Mouse', price: 1200, quantity: 1 },
  { name: 'KeyBoard', price: 5500, quantity: 1, discount: 10 },
  { name: 'Bag', price: 1100, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
