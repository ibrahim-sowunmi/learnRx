const replaceWith = (string, i, j) => {
    return string.replace(RegExp(i, "g"), j);
}

const acceptNumbersOnly = (...params) => [...params].every(elem => typeof elem == 'number' && !isNaN(elem));

const mergeArrays = (arr, arr1) => arr.concat(arr1).sort();

const mergeObjects = (obj1, obj2) => {
  let emptyObj = {};
  for (let property in obj1) {
    emptyObj[property] = obj1[property];
  }
  for (let property in obj2) {
    emptyObj[property] = obj2[property];
  }
  return emptyObj;
}

describe("Replace a letter", function() {
    it("replaces a letter in awesome", function() {
        expect(replaceWith("awesome", "e", "z")).toEqual("awzsomz");
    });
});

describe("accepts numbers only", function() {
    it("uses a string", function() {
        expect(acceptNumbersOnly(1, "foo")).toEqual(false);
    });
    it("true", function() {
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).toEqual(true);
    });
    it("does not accept NaN", function() {
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).toEqual(false);
    });
});

describe("merge arrays", function () {
    it("and sorts", function () {
       expect(mergeArrays([2,1],[3,4])).toEqual([1,2,3,4]);
    });
});

describe("Merge Objects", function () {
    var obj1 = {
      name: "Foo",
      num: 33
    };
    var obj2 = {
        test: "thing",
        num: 55
    };
    it("merge two objects", function () {
      expect(mergeObjects(obj1, obj2)).toEqual({
        name: "Foo",
        test: "thing",
        num: 55
    });
  });
});