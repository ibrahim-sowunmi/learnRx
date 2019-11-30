const deepEqual = (a, b) => {
//   console.log("We have " + JSON.stringify(a) + " and we have " + JSON.stringify(b))
  if (a === b) return true;
  
  if (typeof a != "object" || typeof b != "object" ||
     a == null || b == null) return false;
  
  let keysA = Object.keys(a), keysB = Object.keys(b);
//   console.log(KeysA)
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true