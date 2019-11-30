let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}


var arrayToList = arr => {
  if (arr.length == 1) return {value: arr.shift(), rest: null};
  return {
    value: arr.shift(),
    rest: arrayToList(arr),
  }
}
 

var ListToArray = (list, arr) => {
  let {value, rest} = list;
  arr.push(value);
  if (rest == null) return arr;
  return ListToArray(rest, arr);
}

var prepend = (elem, list) => {
  return {
    value: elem,
    rest: list
  }
}

var nth = (num, list) => {
  if (num == 0) return list || undefined;
  return (nth(num - 1, list.rest))
}

