const difference = (arr1, arr2) => arr1.filter(el => !arr2.includes(el));
console.log(difference([2, 1, 3, 4], [2, 3]));
