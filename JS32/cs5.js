function calculateMedian(numbers) {
  if (numbers.length === 0) return null; 
  const sorted = numbers.slice().sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 !== 0) {
    return sorted[mid];
  } else {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
}
console.log(calculateMedian([5, 2, 9, 1, 7]));
console.log(calculateMedian([4, 2, 8, 6]));
console.log(calculateMedian([]));  