const productCard = document.querySelector('.products__item');
const productsCard = document.querySelectorAll('.products__item');

const productColorChangeButton = document.querySelector('.change-color-card-button');
const productsColorChangeButton = document.querySelector('.change-color-all-card-button');
const productColorChangeButtonTog = document.querySelector('.change-color-toggle');
const openGoogleButton = document.querySelector('.open-google-button');
const outLog2 = document.querySelector('.out-log-console');
const outLog = document.querySelector('.catalog__title');

const firstColorHash = '#5150762a';
const secondColorHash = '#130ddb2a';

const textElem = outLog.textContent;

// Перекраска одной карты 
productColorChangeButton .addEventListener('click', () => {
    productCard.style.backgroundColor = firstColorHash;
})

// Перекраства всех карт 
productsColorChangeButton.addEventListener('click', () => {
    productsCard.forEach((card) => card.style.backgroundColor = secondColorHash);
});

// Переход на google
openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
    const answer = confirm("Вы действительно хотите перейти по сылке ?");

    if (answer === true) {
        window.open('https://www.google.com')
    }
    else {
        return;
    }
}

//Вывод в консоль при наведении
outLog.addEventListener('mouseover', () => {
    outLogConsole(textElem);
});

function outLogConsole(message) {
    console.log(message);
}

outLog2.addEventListener('click', ()=>{
    outputConsoleMessage('ДЗ-6');
})

function outputConsoleMessage(message){
    alert(message);
    console.log(message);
}

productColorChangeButtonTog.addEventListener('click', ()=>{
    productColorChangeButtonTog.classList.toggle('active-color');
})

