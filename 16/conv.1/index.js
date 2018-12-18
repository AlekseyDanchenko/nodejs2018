var Converter=require('./conv.js');

var baseCurrencyUs = 28;

var converter = new Converter(baseCurrencyUs);
console.log(converter.convToAu(5000));
console.log(converter.convToUs(1000000));
