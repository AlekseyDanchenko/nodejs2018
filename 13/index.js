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
var recepient = pass.recepient;

//Sending an email
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
service: 'gmail',
auth:{
    user:account,
    pass:password
}
});
var template = fs.readFileSync('./template.html', 'utf8', function(err,data){

    if (err) console.log(err);
    return data;
});
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: recepient,
        subject: 'Привет мир от NodeJS ✔', // Subject line
        text: 'шаблонный текст? беее... смотри HTML!', // plain text body
        html: template // html body
    };

//    console.log(template);

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);

    });


