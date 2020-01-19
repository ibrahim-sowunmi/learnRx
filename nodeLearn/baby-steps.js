const t = arr => arr.slice(2).reduce((acc, curr) => acc + Number(curr), 0);
console.log(t(process.argv));
