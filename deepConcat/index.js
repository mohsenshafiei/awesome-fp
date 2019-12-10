const deepConcat = (arr, ...args) => args.reduce((res, arg) => Array.isArray(arg) ? [...res, ...deepConcat([], ...arg)] : [...res, arg], [...arr])
console.log(deepConcat([1], 2, [3], [[4]]));
console.log(deepConcat([1], 2, [3], [[[[[[[[[[[6]]]]]]]]]]], [[4]]));
