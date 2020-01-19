const http = require('http');

http.get(process.argv[2], (res) => {
  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    console.log(rawData.match(/./gi).length + 1);
    console.log(rawData);
  });
});
