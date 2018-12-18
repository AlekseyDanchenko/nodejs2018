var Conv = function (baseCurrencyUS) {
    this.baseCurrencyUS= baseCurrencyUS
};

Conv.prototype.roundTwoDecimal = function (amount){
    return Math.round(amount*100)/100; 
}

Conv.prototype.convToAu = function (currency){
    return this.roundTwoDecimal(currency*this.baseCurrencyUs);
};
Conv.prototype.convToUs = function (currency){
    return this.roundTwoDecimal(currency/this.baseCurrencyUs);
};

module.exports = Conv;


/*var baseCurrency = 28;

function roundTwoDecimal(amount){
    return Math.round(amount*100)/100; 
}

module.exports.convToAu = function (currency){
    return roundTwoDecimal(currency*baseCurrency);
};
module.exports.convToUs = function (currency){
    return roundTwoDecimal(currency/baseCurrency);
};
*/