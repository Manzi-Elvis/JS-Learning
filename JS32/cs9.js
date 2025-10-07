function deepEqualArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {}
  return true;
}
console.log(deepEqualArrays([1, [2, 3], 4], [1, [2, 3], 4]));
console.log(deepEqualArrays([1, [2, 3], 4], [1, [2, 4], 4]));
console.log(deepEqualArrays([1, 2, 3], [1, 2, 3]));
console.log(deepEqualArrays([1, [2, [3]]], [1, [2, [3]]]));
console.log(deepEqualArrays([1, [2, [3]]], [1, [2, [4]]]));