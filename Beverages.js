class Beverage{
    constructor(){
        if(this.constructor === Beverage){
            throw "error";
        }

    }
    getDescription(){
        return "Desctiption";
    }

    cost(){
        throw "Must implement it";
    }
}

module.exports.Beverage = Beverage;