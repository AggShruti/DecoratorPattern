const { Beverage } = require("./Beverages");

class CordimentDecorator extends Beverage{
    constructor(){
        super();
        if(this.constructor === CordimentDecorator){
            throw "Error";
        }
    }
    getDescription(){
        throw "Must Declare Description";
    }
}

module.exports.CordimentDecorator = CordimentDecorator;