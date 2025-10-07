function objectReduce(obj, callback, initialValue) {
  let accumulator = initialValue;
  let isFirst = initialValue === undefined;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (isFirst) {
        accumulator = obj[key];
        isFirst = false;
      } else {
        accumulator = callback(accumulator, obj[key], key, obj);
      }
    }
  }
  return accumulator;
}
const data = { a: 1, b: 2, c: 3 };
const sum = objectReduce(data, (acc, value) => acc + value, 0);
console.log(sum); // 6
const keysConcat = objectReduce(data, (acc, value, key) => acc + key, "");
console.log(keysConcat); // "abc" 
const valuesArray = objectReduce(data, (acc, value, key) => {
  acc.push({ [key]: value });
  return acc;
}, []);
console.log(valuesArray); // [ {a:1}, {b:2}, {c:3} ] 