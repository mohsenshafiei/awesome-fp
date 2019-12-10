const compact = (arr) => arr.reduce((res, el) => (el ? [...res, el] : res), []);
console.log(compact([0, 1, false, 2, '', 3]));
