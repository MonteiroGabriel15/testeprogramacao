function mergeArrays(array1, array2) {
    const merged = {};

    array1.forEach(obj => {
        merged[obj.id] = { ...obj };
    });

    array2.forEach(obj => {
        if (merged[obj.id]) {
            merged[obj.id] = { ...merged[obj.id], ...obj };
        } else {
            merged[obj.id] = { ...obj };
        }
    });

    return Object.values(merged);
}

const array1 = [
  { id: 1, name: 'Lionel Messi', age: 36 },
  { id: 2, name: 'Cristiano Ronaldo', age: 38 }
];

const array2 = [
  { id: 1, age: 36, email: 'messi@example.com' },
  { id: 3, name: 'Antoine Griezmann', age: 33 }
];

const result = mergeArrays(array1, array2);
console.log(result);
