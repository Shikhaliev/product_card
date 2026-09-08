import { products } from "./arrayJS/product_card_array.js";

const productsTemplate = document.querySelector('.products-template');
const productsList = document.querySelector('.products');

const productsForDisplay = products.slice(0, checkNumCards()); 

displayCards(productsForDisplay);

const newArray = products.reduce((acc, value) => {
    return [
        ...acc,
        value.name, value.description,
    ]
}, []);

function displayCards(cards){
    cards.forEach((product) => {
        const productsClone = productsTemplate.content.cloneNode(true);
        productsClone.querySelector('.card__category').textContent = product.category
        productsClone.querySelector('.card__name').textContent = product.name
        productsClone.querySelector('.card__description').textContent = product.description
        productsClone.querySelector('.card__price-block span').textContent = product.price + ' ₽'
        const imageElement = productsClone.querySelector('.card__image');
        imageElement.src = product.image;

        const compoundList = productsClone.querySelector('.compound__structure');
        compoundList.innerHTML = '';

        product.structure.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            compoundList.appendChild(li);
        })

        productsList.appendChild(productsClone);
    })
}

function checkNumCards(){
    let сardsNum = 5//+prompt("Сколько карточек отобразить? От 1 до 5");
    if (isNaN(сardsNum) || 0 > сardsNum || сardsNum > 5){
        console.log("Вы ввели неправильное число !")
        return сardsNum = 0;
    } else {
        return сardsNum;
    }
};