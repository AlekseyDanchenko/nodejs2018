
/*
ДЗ - 15
1. На основе событий создать свой логер(logger). 
Который будет регистрировать пользователя со временем посещения и выводит эти данные в консоль. 
Также можно добавить информацию типа (такой то пользователь вошёл и вышел), набросать событий типа logIn, logout, someAction…. Код произвольный(абстрактный), главное использовать события класса EventEmitter.
2. Написать сервер, который на разные url по разному отдает клиенту файлы. 
Например: 
    /stream клиент получает файл в стриме, 
    /file - в обычном режиме. 
Усложнить по желанию, например добавить проверку на размер файла, если большой - то stream.....
*3. При каждом изменении в коде нам приходится делать рестарт сервера! Как решить эту задачу? 
(Подсказка - посмотреть сторонний модуль). 
При старте сервера ми не можем закрыть терминал - иначе сервер остановится! Как справится с этой проблемой?*/

//------------------- ACTIVITY USER LOG ------------------------//  
/*
var events = require('events');
var fs =require('fs');

var myEmitter = new events.EventEmitter();

function logEvents (notification){
    time = Date.now();
    fs.appendFile('./log.txt','\r\n'+notification+' at '+time, function(err){
        if (err) throw err;
        console.log(notification+' at '+time+' is logged');  
    })};



myEmitter.on('userLoggedIn', function(userID){
    logEvents('User '+userID+' logged in App');
    }
);
myEmitter.on('userCompletedTask', function(userID){logEvents('User  '+userID+' completed task')});
myEmitter.on('userCallHelp', function(userID){logEvents('User '+userID+'  called for help')});
myEmitter.on('userLogedOut', function(userID){logEvents('User '+userID+' logged out App')});

var userID = '0001';

myEmitter.emit('userLoggedIn', userID);
myEmitter.emit('userCompletedTask', userID);
myEmitter.emit('userCallHelp', userID);
myEmitter.emit('userLogedOut', userID);
*/


//------------------- SERVER STREAM|FILE ------------------------//  

var http = require('http');
var fs= require('fs');


var app = http.createServer(function(req, res){
    //console.log(req);
    switch (req.url) {
        //stream
        case "/":
        res.writeHead(200, {'Content-Type': 'text/plain'});
        fs.createReadStream('./log.txt').pipe(res);
        
        //file
        case "/file":
        res.writeHead(200, {'Content-Type': 'text/html'});
        var file = fs.readFileSync('./log.txt', 'utf8');
        res.write(file);

    }
    
    res.end();
});

app.listen(3000, function(){
    console.log('server at localhost 3000')
});