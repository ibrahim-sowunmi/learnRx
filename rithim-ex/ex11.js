var fetchPlanetNames = function(arr) {
	return Promise.all(arr.map(url => { // return the Promise returned by Promise.all(...).then(...)
     // ^^^^^^
		return fetch(url)
		.then(res => res.json())
		.then(planet => planet.name);
	}))
	.then(data => {
		console.log(data);
		return data; // Remember to return `data`, otherwise undefined will be dlivered.
	     // ^^^^^^^^^^^^
	});
};

var promiseList = [];
for (let number = 1; number < 8; number ++) {
	promiseList.push(fetch(`https://swapi.co/api/films/${number}/`).then(res => res.json()));
}

Promise.all(promiseList)
.then(films => {
	return Promise.all(films.map(film => {
		// Here, a nested Promise chain allows `film` to remain in scope at the point where 'planets' become available.
		return fetchPlanetNames(film.planets)
		.then(planets => {
			return {
				'title': film.title,
				'planets': planets,
				'opening_crawl': film.opening_crawl
			};
		});
	}));
})
.then(data => console.log(data));