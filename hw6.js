// let string = 'Преобразуйте строку js в верхний регистр JS.';
// string = string.toUpperCase();
// console.log(string);

// Задание 1

// function filterStrings(arr, prefix) {
//   const result = [];
//   const lowercasePrefix = prefix.toLowerCase(); 

//   for (let i = 0; i < arr.length; i++) {
//     const string = arr[i];
//     if (string.toLowerCase().startsWith(lowercasePrefix)) { 
//       result.push(string);
//     }
//   }

//   return result;
// }

// console.log(filterStrings(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
// console.log(filterStrings(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
// console.log(filterStrings(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// Задание 2

// let number1 = 32.58884;
// number = Math.ceil(number1);
// console.log(number1);

// let number2 = 32.58884;
// number2 = Math.floor(number2);
// console.log(number2);

// let number3 = 32.58884;
// number3 = Math.round(number3);
// console.log(number3);

// Задание 3


// let arr1 = [52, 53, 49, 77, 21, 32];
// let minNumber = Math.min(...arr1);
// console.log(minNumber);


// let arr2 = [52, 53, 49, 77, 21, 32];
// let maxNumber = Math.max(...arr2);
// console.log(maxNumber);

// Задание 4


// function printRandom(randomNumber) {
//   return randomNumber = Math.floor(Math.random() * 10); // Math.floor по условию не требуется, просто решил посмотреть методы в связке 

// }

// console.log(printRandom());

//Задание 5

// function generateRandomArray(n) {
//   const length = n / 2; 
//   const result = [];

//   for (let i = 0; i < length; i++) {
//     const randomNumber = Math.floor(Math.random() * n); 
//     result.push(randomNumber);
//   }

//   return result;
// }

// console.log(generateRandomArray(20));

// Задание 6


// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min; 
// }
// console.log(getRandomNumber(1, 20));

// Задание 7


// let currentDate = new Date();
// console.log(currentDate);


// Задание 8


// const currentDate = new Date();

// const futureDate = new Date();
// futureDate.setDate(currentDate.getDate() + 73);

// console.log(currentDate);
// console.log(futureDate);


// Задание 9



// function formatDateTime(date) {
//   const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//   const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

//   const formattedDate = `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}`;

//   let hour = date.getHours();
//   let minute = date.getMinutes();
//   let second = date.getSeconds();

//   if (minute < 10) {
//     minute = "0" + minute;
//   }
//   if (second < 10) {
//     second = "0" + second;
//   }

//   const formattedTime = `Время: ${hour}:${minute}:${second}`;

//   return `${formattedDate}, ${formattedTime}`;
// }

// const myDate = new Date();
// const formattedDateTime = formatDateTime(myDate);
// console.log(formattedDateTime);

//Задание 10

function guessWords() {
  let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

words.sort(() => Math.random() - 0.5);

alert(words);

let firstElement = prompt("Чему равнялся первый элемент массива?");
let lastElement = prompt("Чему равнялся последний элемент массива?");

if (firstElement.toLowerCase() === words[0].toLowerCase() && lastElement.toLowerCase() === words[words.length - 1].toLowerCase()) {
  alert("Поздравляю, вы угадали оба слова!");
} else if (firstElement.toLowerCase() === words[0].toLowerCase() || lastElement.toLowerCase() === words[words.length - 1].toLowerCase()) {
  alert("Вы были близки к победе!");
} else {
  alert("Вы ответили неверно.");
}
}

//Задание 11


//Игра угадай сезон, с выводом через алерт
function guessSeason() {
  let monthNumber = Number(prompt('Введите число от 1 до 12 и узнайте время года'));
  if ((monthNumber >= 1 && monthNumber <= 2) || monthNumber === 12) {
    alert('Зима близко!');
  } else if (monthNumber >= 3 && monthNumber <= 5) {
    alert('Придет весна, и цветы распустятся сами');
  } else if (monthNumber >= 6 && monthNumber <= 8) {
    alert('Летняя пора – и жизнь легка');
  } else if (monthNumber >= 9 && monthNumber <= 11) {
    alert('Унылая пора, очей очарованье');
  } else {
    alert('Вы ввели неверное значение');
  }  
}




























