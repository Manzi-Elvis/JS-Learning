function chunkArray(arr, size) {
  if (size <= 0) return [];
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log(chunkArray([1, 2, 4, 4, 5, 6, 7], 3));
console.log(chunkArray([1, 2, 3, 4, 5], 2));
console.log(chunkArray([1, 2, 3], 0));