var baseCurrency = 28;

function roundTwoDecimal(amount){
    return Math.round(amount*100)/100; 
}

module.exports.convToAu = function (currency){
    return roundTwoDecimal(currency*baseCurrency);
};
module.exports.convToUs = function (currency){
    return roundTwoDecimal(currency/baseCurrency);
};
