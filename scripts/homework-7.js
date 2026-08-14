const LIGHT_SPEED = 299792458;

let product = "iphone 17pro Max Ultra ";
let price = 1299;

let userList;
let totalUserCount;
const AVERAGE_SPEED = 0;

function speedCheck(speed) {
    if (speed > LIGHT_SPEED) {
        console.log("Сверхсветовая скорость");
    }
    if (speed < LIGHT_SPEED) {
        console.log("Досветовая скорость");
    }
    if (speed == LIGHT_SPEED) {
        console.log("Скорость света");
    }
}

function calculatCash(budget) {
    if (budget > price) {
        console.log(`${product} приобретён. Спасибо за покупку!`);
    } else {
        console.log(`Вам не хватает ${Number(budget) - price}$, пополните баланс`);
    }
}

function weatherOut(degree, city) {
    console.log(`Сейчас в ${city} температура — ${degree} градусов по Цельсию`);
}

function averageUserSpeed() { };

speedCheck(300000);
speedCheck(300000000);
speedCheck(299792458);

calculatCash(10);
calculatCash(1500);

weatherOut(40, 'Rostov-na-Donu');

