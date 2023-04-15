const { Expresso } = require("./Expresso");
const { Mocha } = require("./Mocha");


let expresso = new Expresso();

let mochaExpresso = new Mocha(expresso);

console.log(mochaExpresso.cost())