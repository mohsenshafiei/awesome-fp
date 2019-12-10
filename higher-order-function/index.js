const withCount = (fn) => {
  let count = 0;
  return (...args) => {
    console.log(`Call Count: ${++count}`);
    return fn(...args);
  }
}

const add = (a, b) => a + b;
const countedAdd = withCount(add);
countedAdd(1, 2);
countedAdd(1, 3);
countedAdd(1, 3);
countedAdd(1, 4);
