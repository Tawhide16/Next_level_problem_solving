function getUniqueValues(arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] {
  const result: (number | string)[] = [];
  const combined = [...arr1, ...arr2];

  for (let i = 0; i < combined.length; i++) {
    let isUnique = true;
    for (let j = 0; j < result.length; j++) {
      if (combined[i] === result[j]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique && combined[i] !== undefined) {
      result.push(combined[i] as number | string);
    }
  }

  return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(getUniqueValues(array1, array2));
