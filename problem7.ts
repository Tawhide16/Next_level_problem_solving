function getUniqueValues(arr1: (number | string)[], arr2: (number | string)[]) {
  return Array.from(new Set([...arr1, ...arr2]));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

