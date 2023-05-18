console.log(__filename); //tam yol     /home/kemal/WebstormProjects/BTK_NodeJS/02-NodeJS/03-Filename-Dirname/scriptA.js
console.log(__dirname); //klasör yolu  /home/kemal/WebstormProjects/BTK_NodeJS/02-NodeJS/03-Filename-Dirname

let firstName = "Hasan";

let log = function (text) {
  console.log(text);
};

exports = {
  name: firstName,
  log,
};
