/*

Задание №8: Работа с Объектами и  с Массивами

*/

const user = {
    name: "Магомед",
    surname: "Магомедов",
    email: "magomed03@gmail.com",
    age: 24,
    country: "Россия",
    city: "Махачкала",
    relation: "женат"
}
const car = {
    brand: "BMW",
    model: "M4",
    release: 2024,
    color: "red",
    transmission: "Механика",
}

const products = ['Помидор', 'Огурец', 'Сельдерей', 'Тыква', 'Салат'];

const classicBooks = [
    {name: '451° по Фаренгейту', author: 'Рэй Брэдбери', year: 1953, color: 'Оранжевый', style: 'Научная фантастика'},
    {name: 'Великий Гэтсби', author: 'Ф. Скотт Фицджеральд', year: 1925, color: 'Синий', style: 'Роман'},
    {name: 'Дюна ', author: 'Фрэнк Герберт', year: 1965, color: 'Бежевый', style: 'Научная фантастика'}
]
const marvelBooks = [
    { title: "Дом М", author: "Брайан Майкл Бендис", year: 2005, coverColor: "Красный", genre: "Супергероика / Альтернативная реальность" },
    {title: "Гражданская война", author: "Марк Миллар", year: 2006, coverColor: "Синий", genre: "Супергероика / Драма" },
    { title: "Тайное вторжение", author: "Брайан Майкл Бендис", year: 2008, coverColor: "Зелёный", genre: "Супергероика / Шпионский триллер" },
]

car.owner = user;

function checkMaxSpeed(obj){
     if(!obj.hasOwnProperty('maxSpeed') ){
        obj.maxSpeed = prompt();
     }
}

checkMaxSpeed(car);

function logProperty(obj, key){
    console.log(obj[key]);
}

logProperty(car, 'brand');

classicBooks.push({name: 'Алиса в Стране чудес ', author: 'Льюис Кэрролл', age: 1865, color: 'Красный', style: 'Сказка'})

const allBooks = bookList.concat(marvelBooks);

function addRarityFlag(books) {
    return books.map(book => ({
            ...book, isRare: book.year >= 2000
    }))
}

console.log(addRarityFlag(allBooks));