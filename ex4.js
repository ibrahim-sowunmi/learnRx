// Exercise 4: Implement map()
// To make projections easier, let's add a map() function to the Array type. Map accepts the projection function to be applied to each item in the source array, and returns the projected array.

Array.prototype.map = function(projectionFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		results.push(projectionFunction(itemInArray));

	});

	return results;
};

// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'
		