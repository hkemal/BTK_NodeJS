// //IIFE

// let controllerB = (function () {
//   //scope B

//   //private
//   let firstName = "Kemal";

//   let log = function () {
//     console.log(this.firstName);
//   };
//   //public
//   return { firstName, log };
// })();

// console.log(controllerA.firstName);
// console.log(controllerB.firstName);

const scriptA = require("./scriptA");

scriptA.log("Gulderen");
console.log(scriptA.name);
// console.log(scriptA.age);
