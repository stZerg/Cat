// Функция смены цвета бордюра блока и цвета круглой подложки.
// Происходит при выходе курсора за предела блока при условии изменения его статуса
// Статус меняется после каждого клика мышкой по рекламному блоку

function changeItem(id) {
// Получаем ID для подложки с реализованым бордюром и для круглой подложки
    let cart_id = 'cart-' + id;
    let circle_id = 'circle-' + id;

    const el = document.querySelector("#" + cart_id);
// В зависимости от текущего статуса меняются цвета у выбранного рекламного блока
    if(el.dataset.status == 'true') {
        document.getElementById(cart_id).style.backgroundImage = "url('images/cart-red.png')";
        document.getElementById(circle_id).style.background = "#d91667";
    } else {
        document.getElementById(cart_id).style.backgroundImage = '';
        document.getElementById(circle_id).style.background = "";
    }
}

// Функция смены статуса рекламного блока (по клику по выбранному блоку)

function changeStatus(id) {
    const el = document.querySelector("#cart-" + id);
    if(el.dataset.status == 'false') {
        el.dataset.status = 'true';
    } else {
        el.dataset.status = 'false';
    }
}