function countOccurrences(array) {
    const occurrences = {};
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (occurrences[item] === undefined) {
            occurrences[item] = 1;
        } else {
            occurrences[item]++;
        }
    }

    return occurrences;
}

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const result = countOccurrences(fruits);
console.log(result);
