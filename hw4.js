// function returnNumber(a, b) {
//   if (a >= b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// }
// returnNumber(5, 4);

// Задание 1

// function returnEvenOdd() {
//   let userAnswer = prompt('Введите число');
//   if (userAnswer % 2 === 0) {
//     console.log('Число четное');
//   } else {
//     console.log('Число нечетное');
//   }
// }

// returnEvenOdd();

// Задание 2

// function squaredNumber(number) {
//   return (number * number);
// }

// console.log(squaredNumber(3));

//Задание 3.1

// function squaredNumber(number) {
//   return (number * number);
// }

// const result = squaredNumber(4);

//Задание 3.2

// function usersAge() {   
//   let userAnswer = prompt('Сколько вам лет?');
//   if (userAnswer <= -1) {
//     alert('Вы ввели неправильное значение');
//   } else if (userAnswer <= 12){
//     alert('Привет друг!');
//   } else {
//     alert('Добро пожаловать!');
//   }    
//   }

//   usersAge();

// Задание 4

// function returnMult(a, b) {
//   if (isNaN(a) || isNaN(b)) {
//     console.log('Одно или оба значения не являются числом');
//   } else {
//     console.log(a * b); 
//   }
// }

// returnMult(5, 7);

// Задание 5

// function cubedNumber() {
//   let usersAnswer = Number(prompt('Введите число'));
//   if (isNaN(usersAnswer)) {
//     console.log('Введенный параметр не является числом');
//   } else {
//     console.log(`Число в кубе равняется: ${usersAnswer ** 3}`);
//   }
// }

// cubedNumber();

//Задание 6


// const circle1 = {
//   radius: 3,
//   getCircleArea() {
//     return (Math.PI * circle1.radius * circle1.radius);
//   },
//   getCircleLength() {
//     return (2 * Math.PI * circle1.radius);
//   }
// }
// console.log(circle1.getCircleArea());
// console.log(circle1.getCircleLength());

// Задание 7


function guessSeason() {
  let monthNumber = Number(prompt('Введите число от 1 до 12 и узнайте время года'));
  if ((monthNumber >= 1 && monthNumber <= 2) || monthNumber === 12) {
    console.log('Зима близко!');
  } else if (monthNumber >= 3 && monthNumber <= 5) {
    console.log('Придет весна, и цветы распустятся сами');
  } else if (monthNumber >= 6 && monthNumber <= 8) {
    console.log('Летняя пора – и жизнь легка');
  } else if (monthNumber >= 9 && monthNumber <= 11) {
    console.log('Унылая пора, очей очарованье');
  } else {
    console.log('Вы ввели неверное значение');
  }  
}

// Задание 8