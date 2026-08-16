import { products } from "./arrayJS/product_card_array.js";

const productsTemplate = document.querySelector('.products-template');
const productsList = document.querySelector('.products');

const numCards = prompt("Сколько карточек отобразить? От 1 до 5");

const productsForDisplay = products.slice(0, checkNumCards(numCards));

productsForDisplay.forEach((product) => {
    const productsClone = productsTemplate.content.cloneNode(true);
    productsClone.querySelector('.card__category').textContent = product.category
    productsClone.querySelector('.card__name').textContent = product.name
    productsClone.querySelector('.card__description').textContent = product.description
    productsClone.querySelector('.card__price-block span').textContent = product.price + ' ₽'
    const imageElement = productsClone.querySelector('.card__image');
    imageElement.src = product.image;

    const structureItems = productsClone.querySelectorAll('.compound__structure li');

    structureItems.forEach((li, index) => {
        if (index < product.structure.length) {
            li.textContent = product.structure[index];
        };
    });
    
    productsList.appendChild(productsClone);
});

const newArray = products.reduce((acc, value) => {
    return {
        ...acc,
        [value.name]: value.description,
    }
}, {});

function checkNumCards(num){
    if(0 > num || num > 5){
        console.log("Вы ввели неправильное число !")
        return num = 0;
    } else {
        return num;
    }
};