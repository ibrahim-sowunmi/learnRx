
const sumEvenArguments = (...params) => params.reduce((acc, curr) => {
  if (curr % 2 == 0) return acc + curr;
  return acc;
}, 0);  

const invokeMax = (fn, max) => {
  let maxVal = max;
  return fn.bind(this);
}

describe("Takes all arguments passed to a function and return the sum of the even ones", function() {
  it("ignores all odd numbers", function() {
    expect(sumEvenArguments(1, 3, 5)).toEqual(0);
  });
  it("works with all even numbers", function() {
    expect(sumEvenArguments(2, 4, 6)).toEqual(12);
  });
  it("works with a mixture of odd and even numbers", function() {
    expect(sumEvenArguments(1, 4, 5, 4)).toEqual(8);
  });
});

describe("accepts a function and a max amount", function() {
  function add (a, b) => a + b; 
  it("is maxed out for negatives", function() {
    let addForNeg = invokeMax(add, -1);
    
  })
  it("addOnlyThree times", function () {
    let addForThree = invokeMax(add, -1);
    
  });
  it("addsOne time", function() {
    let addForOne = invokeMax(add, -1);
    
  });
});