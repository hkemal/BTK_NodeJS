// let lastName= "Doe";
// console.log(firstName);
// console.log(lastName);

// window.console.log()
// window.setInterval
// window.setTimeout
// window.clearTimeout

//Tarayıcıdaki window objesinindeki özellikleri nodejs de global nesnesi ile sağlarız.
let lastName = "Doe";
console.log(global.lastName);

global.setTimeout(() => {}, timeout);
