const fs = require('fs');

var data = fs.readFileSync(process.argv[2]);
console.log(data.toString().match(/\n/g).length);
