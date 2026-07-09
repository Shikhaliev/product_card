const productCard = document.querySelector('.products__item');
const productsCard = document.querySelectorAll('.products__item');

const productColorChangeButton = document.querySelector('.change-color-card-button');
const productsColorChangeButton = document.querySelector('.change-color-all-card-button');

const firstColorHash = '#5150762a';
const secondColorHash = '#130ddb2a';

// Перекраска одной карты 
productColorChangeButton .addEventListener('click', () => {
    productCard.style.backgroundColor = firstColorHash;
})

// Перекраства всех карт 
productsColorChangeButton.addEventListener('click', () => {
    productsCard.forEach((card) => card.style.backgroundColor = secondColorHash)
    });
