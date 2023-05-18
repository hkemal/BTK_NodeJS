// //IIFE

// let controllerA = (function () {
//   //scope B

//   //private
//   let firstName = "Hasan";

//   let log = function () {
//     console.log(this.firstName);
//   };
//   //public
//   return { firstName, log };
// })();

//nodejs

//private members
let age = 27;

//public members
let firstName = "Hasan";

let log = function (text) {
  console.log(text);
};

// module.exports.name = firstName;
// module.exports.log = log;

module.exports = {
  name: firstName,
  log,
};
