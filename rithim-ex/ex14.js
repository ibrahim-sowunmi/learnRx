const countNumbers = str => str.match(/\d+/g) ? str.match(/\d+/g).reduce((acc, curr) => acc + curr.length, 0) : 0;

const capitalSentence = str => str.match(/[A-Z]/g).reduce((acc, curr) => acc + curr);

const isValidPassword = str => str.match(/[\!\@\#\$]/) && str.length > 7 ? true : false;

const nothingSpecial = str => typeof str === "string" ? str.replace(/[^A-Z0-9\s]+/gi, "") : "Not a string!";
// sol
const sentenceCount = str => str.match(/[.?!]/g).length;

const isItBugged = str => str.replace(/\d{2}-\d{2}-\d{4} \d{2}\:\d{2}/g, "") == "";

const authList = arr => arr.every(usr => /(?=.*\d.*)(?=.*[a-z].*)[a-z\d]{6,10}/.test(usr));
// sol
const remove = str => str.replace(/\b!+/g, "");
//sol, so close
const isValidMXPhoneNumber = str => /^\(*5[5-6]\)* *\d{2} *\d{2} *\d{2}/.test(str)

String.prototype.ipv4Address = function (){
  return this.toString().match(/^\d\d?[0-5]?.\d\d?[0-5]?.\d\d?[0-5]?.\d\d?[0-5]?$/)
}

