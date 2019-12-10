const chunk = (arr, len) => [[...arr].splice(0, len), [...arr].splice(len, arr.length - 1)]

const x = [1,2,3,4,5];
console.log(chunk(x, 3));
