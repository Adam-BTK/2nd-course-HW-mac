// const people = [
//   { name: 'Глеб', age: 29 },
//   { name: 'Анна', age: 17 },
//   { name: 'Олег', age: 7 },
//   { name: 'Оксана', age: 47 }
// ];

// console.log(people.sort((person1, person2) => person1.age - person2.age));

// Задание 1


// function isPositive(number) {
//   return number > 0;
// }

// function isMale(person) {
//   return person.gender === 'male';
// }

// function filter(array, callback) {
//   const filteredArray = [];
//   for (const item of array) {
//     if (callback(item)) {
//       filteredArray.push(item);
//     }
//   }
//   return filteredArray;
// }

// console.log(filter([3, -4, 1, 9], isPositive)); 

// const people = [
//   { name: 'Глеб', gender: 'male' },
//   { name: 'Анна', gender: 'female' },
//   { name: 'Олег', gender: 'male' },
//   { name: 'Оксана', gender: 'female' }
// ];

// console.log(filter(people, isMale)); 

// Задание 2


// function printCurrentDate() {
//   const currentDate = new Date();
//   console.log(currentDate);
// }

// const interval = setInterval(printCurrentDate, 3000);

// setTimeout(function() {
//   clearInterval(interval);
//   console.log("30 секунд прошло");
// }, 30000);

// Задание 3


// function delayForSecond(callback) {
//   setTimeout(callback, 5000);
// }

// delayForSecond(function() {
//   console.log('Привет, Глеб!');
// });

// Задание 4


// function delayForSecond(cb) {
//   setTimeout(() => {
//     console.log('Прошла одна секунда');
//     if (cb) {
//       cb();
//     }
//   }, 1000);
// }

// function sayHi(name) {
//   console.log(`Привет, ${name}!`);
// }

// delayForSecond(() => {sayHi('Глеб');
// });

// Задание 5



//Игра Запомни слова

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

//Игра угадай сезон


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
