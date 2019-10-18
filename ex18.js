// Exercise 18: Retrieve url of the largest boxart
// Let's try combining reduce() with map() to reduce multiple boxart objects to a single value: the url of the largest box art.


var boxarts = [
    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
    { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
];

return boxarts.
    reduce(function (acc, curr) {
        if (acc.width * acc.height > curr.width * curr.height) {
            return acc;
        }
        else {
            return curr;
        }
    }).
    // the final would not be required outside of Rx as the reduce would be a value rather than a function
    map(function (boxart) {
        return boxart.url;
    });
