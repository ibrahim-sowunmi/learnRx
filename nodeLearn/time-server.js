const net = require('net');

const server = net.createServer(socket => {
    let d = new Date();
    let month = '';
    let minutes = d.getMinutes();

    if (d.getMonth() < 9) {
        month = '0' + (d.getMonth() + 1);
    }
    if (d.getMinutes() < 9) {
        minutes = '0' + d.getMinutes();
    } 

    var currTime = `${d.getFullYear()}-${month}-${d.getDate()} ${d.getHours()}:${minutes}`;
    socket.end(currTime);
});
//my solution worked but didn't pass all test cases huh.

server.listen(Number(process.argv[2]));