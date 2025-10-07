function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = [];
  for (let val of set1) {
    if (!set2.has(val)) {
      result.push(val);
    }
  }
  for (let val of set2) {
    if (!set1.has(val)) {
      result.push(val);
    }
  }
  return result;
}
console.log(symmetricDifference([1, 2, 3], [3, 4, 5])); 
console.log(symmetricDifference([10, 20, 30], [20, 40])); 