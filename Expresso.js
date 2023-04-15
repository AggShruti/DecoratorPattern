const { Beverage } = require("./Beverages");

class Expresso extends Beverage{
    constructor(){
        super();
        this.description = "Expresso";
    }

    cost(){
        return 10;
    }
}

module.exports.Expresso = Expresso;