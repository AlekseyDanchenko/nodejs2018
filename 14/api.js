//реализация без сервера

const request = require('request-promise');
const options = {
    method: 'GET',
    uri: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3',//&fbclid=IwAR19KXtY-gysvlK9srK-ztPpDDDHx8WE-PPWh8e2V2AIXf-JE2fw2iIzs6g
    json: true, //принимает JSON
    "headers": {
        "User-Agent": "Aleksey with NodeJS"//идентифицируем себя
      }
}

request(options)
    .then(function (response) {
        console.log(response);//выводим результат в консоль
    })
    .catch(function (err) {
    })