/*ДЗ - 14
1. Написать сервер,чтоб по запросу localhost:3000 сервер выдавал нам в response Hello World, 
чтоб по запросу localhost:3000/about сервер выдавал нам данные о запросе в консоль, 
а по запросу localhost:3000/stop - останавливаем его. 
Усложнить, что по запросу localhost:3000/contact сервер возвращал страницу index.html.
*/
var http = require('http');
var fs= require('fs');
aboutPage = fs.readFileSync('nodejs.html', 'utf8');
favicon = fs.readFileSync('favicon.ico', 'utf8');
//console.log(aboutPage);
var app = http.createServer(function(req, res){
    //console.log(req);
    switch (req.url) {
        case "/":
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("Main page. Hello world!");
        break;

        case "/stop":
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Server is shutting down');
        app.close([console.log('server down')]);

        case "/about":
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(aboutPage);

        case "/favicon.ico":
        res.writeHead(200, {'Content-Type': 'image'});
        res.write(favicon);

        default:
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("Page not found");
        break;
    }
    
    res.end();
});

app.listen(3000, function(){
    console.log('server at localhost 3000')
});