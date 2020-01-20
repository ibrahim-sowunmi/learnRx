const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const baseURL = 'http://' + req.headers.host + '/';
    const myURL = new URL(req.url, baseURL);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (myURL.pathname === '/api/parsetime') {
        let time = new Date(myURL.searchParams.get('iso'));
        console.log(myURL.searchParams.get('iso'));
        console.log(typeof myURL.search);
        res.write(JSON.stringify({
            'hour': time.getHours(),
            'minute': time.getMinutes(),
            'second':  time.getSeconds()
        }));
    }
    if (myURL.pathname === '/api/unixtime') {
        let time = new Date(myURL.searchParams.get('iso'));
        res.write(JSON.stringify({'unixtime': time.getTime()}))
    }
    res.end();

});
server.listen(process.argv[2]);