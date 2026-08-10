// Уровень №1:

import { socNetworkCommentsArray } from "./comment.js";

const userInputFilm = prompt("Введите название фильма для поиска его в массиве: ");

const numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filmArray = [
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

const filteredNumericArray = numericArray.filter(num => num >= 5);

function reverseArray ( arr ) {
    console.log(arr.reverse());
}

if (filmArray.includes(userInputFilm)) {
    console.log(`Фильм ${userInputFilm} в массиве присутствует.`);
} else {
    console.log(`Фильм ${userInputFilm} в массиве отсутствует.`);
}

reverseArray(filmArray);
reverseArray(numericArray);

// Уровень №2:

const filteredByEmailCommentArray = socNetworkCommentsArray.filter(com => com.email.endsWith(".com"));

const filteredByIdCommentArray = socNetworkCommentsArray.map(com => ({
    ...com, 
    postId: com.id <= 5 ? 2 : 1
}));

const filteredArrayCommentOnlyIdAndName = socNetworkCommentsArray.map(com =>({
    id: com.id,
    name: com.name
}) );

const comArr = socNetworkCommentsArray.map(com =>({
    ...com,
    isInvalid: com.body.length > 180 
}) );

console.log(comArr);


