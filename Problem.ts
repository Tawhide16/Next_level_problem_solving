function format(value: string | number | boolean) 
{
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  if (typeof value === "boolean") {
    return !value;
  }


  return value;
}




function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  }

  if (Array.isArray(value)) {
    return value.length;
  }


  return 0;
}





class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person("janker", 30);
const person2 = new Person("mahamud", 25);



type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Atomic habit", rating: 4.5 },
  { title: "Habits power", rating: 3.2 },
  { title: "48 of low", rating: 5.0 },
];





type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive);
}

const users = [
  { id: 1, name: 'Tawhide', email: 'tawhide@gmail.com', isActive: true },
  { id: 2, name: 'Hasan', email: 'hasan@gmail.com', isActive: false },
  { id: 3, name: 'Bejoy', email: 'bejoy@gmail.com', isActive: true },
];





interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
}

const Book: Book = {
  title: 'Atomic Habits',
  author: 'James Clear',
  publishedYear: 2000,
  isAvailable: true,
};

printBookDetails(Book);



function getUniqueValues(arr1: (number | string)[], arr2: (number | string)[]) {
  return Array.from(new Set([...arr1, ...arr2]));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];





type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
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

