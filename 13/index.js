var fs=require('fs');
var some_text = Date.now();
//console.log(some_text);

//Writing some text to file ()
fs.writeFile('text2.txt', some_text, (err) => {
    if (err) throw err;
    console.log(some_text+' is recorded');
});

//Adding new text by line
fs.appendFile('text.txt','/n'+some_text, function(err){
    if (err) throw err;
    console.log(some_text+' is appended');

});

//adding email and password

var pass = require('./pass.js');
var password = pass.password;
var account = pass.account;
console.log(password);
console.log(account);


//Sending an email
//var nodemailer = require('nodemailer');
//sdfsdfdsfsdf
//var transporter = nodemailer.createTransport();
console.log(password);
console.log(account);
