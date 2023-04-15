let {CordimentDecorator} = require("./CordimentDecorator");

class Mocha extends CordimentDecorator{
    
    constructor(beverage){
        super();
        this.beverage = beverage;

    }
    
    getDescription(){
        this.description = "Mocha";
    }
    cost(){
        return this.beverage.cost() + 100;
    }
}
module.exports.Mocha = Mocha;