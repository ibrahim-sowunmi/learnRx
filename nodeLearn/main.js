const fs = require('fs');
const request = require('request');
const prompt = require('prompt');

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

prompt.start();
prompt.get(['joke'], (err, response) => {

    request({
        method: 'GET',
        uri: `https://icanhazdadjoke.com/search?term=${response.joke}`,
        json: true
    }, (err, res, body) => {
        if (!err && res.statusCode == 200) {
            let jokes = body.results;
            let randInt = getRandomInt(jokes.length);

            if (jokes.length) {
                let currJoke = jokes[randInt].joke;
                fs.appendFile('output.txt', currJoke + '\n', err => {
                    if (err) console.log(err);
                });
                const reg = new RegExp(currJoke, 'g');

                fs.readFile('output.txt', (err, data) => {
                    if (err) throw err;
                    console.log(data.toString());
                    console.log(data.toString().match(reg).length);
                });
            } else {
                console.log("No jokes found for the term: " + response.joke);
            };
        };
    });
});
// Almost finished with the leaderboard got bored lol.