const url = require("url");

const address = "https://hkemal.com?year=2023";

let result = url.parse(address, true);

console.log(result);
console.log(result.path);
console.log(result.query.year);
