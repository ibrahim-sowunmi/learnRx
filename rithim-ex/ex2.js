var nestedArr = [[1, 2], [3, 4], [5, 6]];

nestedArr = nestedArr.reduce((acc, curr) => {
  return acc + curr.reduce((acc, curr) => acc + curr);
}, 0)

console.log(nestedArr)

var arr = [];
Array.isArray(arr);
Array.isArray("Hello");

var nestedArr = [
  "Elie",
  ["Matt", ["Tim"]],
  ["Colt", ["Whisky", ["Janey"], "Tom"]],
  "Lorien"
];

const countVowels = nArr => {
  let i = 0;
  nArr.forEach(obj => {
    if (Array.isArray(obj)) {
      i += countVowels(obj)
    } else {
      i += vowelInWord(obj);
    }
  })
  return i;
}


const vowelInWord = word => {
  let i = 0;
   [...word].forEach(c => {
     if ((/a|e|i|o|u/).test(c)) i++;
   });
   console.log("word and count: " + word + " " + i)
   return i;
}


console.log(countVowels(nestedArr));