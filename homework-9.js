// Уровень №1

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

if (filmArray.includes(userInputFilm)) {
    console.log(`Фильм ${userInputFilm} в массиве присутствует.`);
} else {
    console.log(`Фильм ${userInputFilm} в массиве отсутствует.`);
}

function reverseArray ( arr ) {
    console.log(arr.reverse());
}

reverseArray(filmArray);
reverseArray(numericArray);


