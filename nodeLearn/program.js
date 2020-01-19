const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], function(err, list) {
    const ext = process.argv[3];
    list.filter(name => path.extname(name) == "." + ext).forEach(name => console.log(name));
});
