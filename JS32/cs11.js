function deepClone(value, seen = new WeakMap()) {
  if (value === null || typeof value !== "object") return value;
  if (typeof value === "function") return value;
  if (seen.has(value)) return seen.get(value);
  if (value instanceof Date) return new Date(value.getTime());
  if (value instanceof RegExp) return new RegExp(value.source, value.flags);
  if (value instanceof Map) {
    const copy = new Map();
    seen.set(value, copy);
    for (const [k, v] of value.entries()) {
      copy.set(deepClone(k, seen), deepClone(v, seen));
    }
    return copy;
  }
  if (value instanceof Set) {
    const copy = new Set();
    seen.set(value, copy);
    for (const v of value.values()) copy.add(deepClone(v, seen));
    return copy;
  }
  if (value instanceof WeakMap || value instanceof WeakSet) return value;
  if (Array.isArray(value)) {
    const arr = [];
    seen.set(value, arr);
    for (let i = 0; i < value.length; i++) arr[i] = deepClone(value[i], seen);
    return arr;
  }
  const proto = Object.getPrototypeOf(value);
  const obj = Object.create(proto);
  seen.set(value, obj);
  for (const key of Reflect.ownKeys(value)) {
    const desc = Object.getOwnPropertyDescriptor(value, key);
    if (!desc) continue;
    if (desc.get || desc.set) {
      Object.defineProperty(obj, key, desc);
    } else {
      desc.value = deepClone(desc.value, seen);
      Object.defineProperty(obj, key, desc);
    }
  }

  return obj;
}
console.log(deepClone({ a: 1, b: { c: 2 } }));
console.log(deepClone([1, 2, [3, 4]]));