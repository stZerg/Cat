// подключаем express
const express = require('express')
const app = express()
// подключаем ejs
app.set('view engine', 'ejs')
// объявляем корень
app.use(express.static('./'))
// передаем данные в главнуб страницу
app.get('/', function(req, res) {
    var data = [
        { id: 1, name: 'с фуа-гра', num: 10, mouse: 'мышь в подарок', add: ' ', netto: '0,5', status: 'on', desc: 'Чего сидишь? Порадуй котэ, <a href="#" title="купи">купи</a>.'},
        { id: 2, name: 'с рыбкой', num: 40, mouse: '2 мыши в подарок', add: ' ', netto: '2', status: 'on', desc: 'Головы щучьи с чесноком да свежайшая сёмгушка.'},
        { id: 3, name: 'с курой', num: 100, mouse: '5 мышей в подарок', add: 'заказчик доволен', netto: '5', status: 'off', desc: 'Печалька, с курой закончился.'}
    ];
    var title = "Ты сегодня покормил кота?";
    res.render('index', {
        data: data,
        title: title
    })
})
// указываем порт сервера
app.listen(80)