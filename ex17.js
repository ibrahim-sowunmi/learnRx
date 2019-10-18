// Exercise 17: Retrieve the largest rating.
// Let's use our new reduce function to isolate the largest value in an array of ratings.

var ratings = [2, 3, 1, 4, 5];

const reducer = (biggestVal, currentVal) => {
    return (currentVal > biggestVal) ? currentVal : biggestVal
}

// You should return an array containing only the largest rating. Remember that reduce always
// returns an array with one item.
return ratings.reduce(reducer)   // Complete this expression
