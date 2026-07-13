const LIGHT_SPEED = 299792458;

let product = "iphone 17pro Max Ultra ";
let price = 1299;

function SpeedCheck(speed) {
    if (speed > LIGHT_SPEED) {
        console.log("Сверхсветовая скорость");
    }
    if  (speed < LIGHT_SPEED) {
        console.log("Досветовая скорость");
    }
    if(speed == LIGHT_SPEED) {
        console.log("Скорость света");
    }
}

function CalculatCash(budget){
    if(budget > price){
        console.log(`${product} приобретён. Спасибо за покупку!`);
    } else{
        console.log(`Вам не хватает ${+budget - price}$, пополните баланс`);
    }
}

function WeatherOut(degree, city) {
    console.log(`Сейчас в ${city} температура — ${degree} градусов по Цельсию`);
}

SpeedCheck(300000);
CalculatCash(10);
WeatherOut(40, 'Rostov-na-Donu');

