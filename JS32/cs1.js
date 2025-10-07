function flattenDeep(input) {
  const out = [];
  function helper(value) {
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) helper(value[i]);
    } else {
      out.push(value);
    }
  }
  helper(input);
  return out;
}
console.log(flattenDeep([1, [2, [3, [4]], 5]]));
console.log(flattenDeep([[1, 2], [], [3, [4, [5]]]]));