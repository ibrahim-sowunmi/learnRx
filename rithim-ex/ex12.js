const countNumbers = str => str.match(/\d+/g) ? str.match(/\d+/g).reduce((acc, curr) => acc + curr.length, 0) : 0;

const capitalSentence = str => str.match(/[A-Z]/g).reduce((acc, curr) => acc + curr);

const isValidPassword = str => str.match(/[\!\@\#\$]/) && str.length > 7 ? true : false;
