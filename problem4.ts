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


