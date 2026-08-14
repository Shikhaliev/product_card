// Уровень №1:

import { socNetworkCommentsArray } from "./comment.js";

const userInputFilm = prompt("Введите название фильма для поиска его в массиве: ");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const films = [
  "Побег из Шоушенка",
  "Крестный отец",
  "Тёмный рыцарь",
  "Криминальное чтиво",
  "Форрест Гамп",
  "Бойцовский клуб",
  "Начало",
  "Матрица",
  "Зеленая миля",
  "Властелин колец: Возвращение короля"
];

// Задание №2: Фильтрация массива чисел numericArray, в массив начинающийся с 5
const numbersFromFive = numbers.filter(num => num >= 5);

// Задание №3: Проверка присутствия в массиве сущности, заданной пользователем 
if (films.includes(userInputFilm)) {
    console.log(`Фильм ${userInputFilm} в массиве присутствует.`);
} else {
    console.log(`Фильм ${userInputFilm} в массиве отсутствует.`);
}

// Задание №4: Функция меняющая порядок массива 
function logReversedArray ( arr ) {
    console.log(arr.reverse());
}

// Уровень №2:

// Задание №7: Отсартировка массива с коментириями на новый, где присутствует только те пользователи у которых почта заканчивается на .com
const commentWithComEmail = socNetworkCommentsArray.filter(com => com.email.includes(".com"));

// Задание №8: Перебор массива по Id, с добавлением нового свойства 
const commentsWithPostId = socNetworkCommentsArray.map(com => ({
    ...com, 
    postId: com.id <= 5 ? 2 : 1
}));

// Задание 9: Перебор массрва так что, остаются только Id и Name пользователя 
const commentsIdAndName = socNetworkCommentsArray.map(com =>({
    id: com.id,
    name: com.name
}));

// Задание 10: Перебор массива где проверяется длинна свойства body, где после проверки к каждому объекту добавляется новое свойтсво isInvalid
const arrayLenghtCheck = socNetworkCommentsArray.map(com =>({
    ...com,
    isInvalid: com.body.length > 180 
}));

// Уровень №3:

// Задание 11: Вывод почтовых адресов с помошью метода reduce и map
const emailsStringFromReduce = socNetworkCommentsArray.reduce((acc, value) => {
    acc.push(value.email);
    return acc;
}, []);

const  emailsFromMap = socNetworkCommentsArray.map(em => em.email);

// Задание 12: Перебор массива, где приводим его в строковому типу 
const emailsString = emailsFromMap.join(" ");