const http = require('http');

http.get(process.argv[2], (res) => {
  const items = [];
  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    items.push(rawData);
    http.get(process.argv[3], (res) => {
      res.setEncoding('utf8');
      let rawData1 = '';
      res.on('data', (chunk) => { rawData1 += chunk; });
      res.on('end', () => {
        items.push(rawData1); 
        http.get(process.argv[4], (res) => {
        res.setEncoding('utf8');
        let rawData2 = '';
        res.on('data', (chunk) => { rawData2 += chunk; });
        res.on('end', () => {
            items.push(rawData2);
            items.forEach(item => console.log(item));
        });
       });
      });
    });
  });
});