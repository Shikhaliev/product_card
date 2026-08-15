import { products } from "./arrayJS/product_card_array.js";

const productsTemplate = document.querySelector('.products-template');
const productsList = document.querySelector('.products');


products.forEach((product) => {
    const productsClone = productsTemplate.content.cloneNode(true);
    productsClone.querySelector('.card__category').textContent = product.category
    productsClone.querySelector('.card__name').textContent = product.name
    productsClone.querySelector('.card__description').textContent = product.description
    productsClone.querySelector('.card__price-block span').textContent = product.price + ' ₽'

    const structureItems = productsClone.querySelectorAll('.compound__structure li');

    structureItems.forEach((li, index) => {
        if (index < product.structure.length) {
            li.textContent = product.structure[index];
        }
    });
    
    productsList.appendChild(productsClone);
})