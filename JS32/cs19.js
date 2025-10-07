function isSubset(mainObj, subsetObj) {
  if (typeof subsetObj !== "object" || subsetObj === null) {
    return mainObj === subsetObj;
  }
  for (let key in subsetObj) {
    if (!(key in mainObj)) {
      return false;
    }
    if (!isSubset(mainObj[key], subsetObj[key])) {
      return false;
    }
  }
  return true;
}
const main = {
  name: "Elvis",
  age: 21,
  details: {
    city: "Kigali",
    skills: ["JS", "Python"]
  }
};
const subset1 = {
  name: "Elvis",
  details: { city: "Kigali" }
};
const subset2 = {
  name: "Elvis",
  details: { city: "Nairobi" }
};
console.log(isSubset(main, subset1)); // true 
console.log(isSubset(main, subset2)); // false 