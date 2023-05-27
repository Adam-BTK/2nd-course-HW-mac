// let a = Number(prompt('Введите первое число'));
// let b = Number(prompt('Введите второе число'));

// let max = a;
// if (max < b) {
//     console.log(`Максимальное число ${max}`);
// }

// let timeOfwork = String('Могу ли я идти?');

// timeOfwork = timeOfwork.toLocaleLowerCase();

// (timeOfwork >= 4 && timeOfwork >= 8) ? console.log('Можешь идти домой');
// 

// if (day === 'понедельник') {
//   console.log('Первый день недели');
// } else if (day === 'вторник') {
//   console.log('Второй день недели');
// } else if (day === 'среда') {
//   console.log('Третий день недели');
// } else if (day === 'четверг') {
//   console.log('Четвертый день недели');
// } else if (day === 'пятница') {
//   console.log('Пятый день недели');
// } else if (day === 'суббота') {
//   console.log('Шестой день недели');
// } else if (day === 'воскресенье') {
//   console.log('Седьмой день недели');
// } else {
//   console.log('Такого дня недели не существует!');
// }

// let day = prompt('Введите день недели');

// switch (day) {
//   case 'понедельник':
//     console.log('Первый день недели')
//     break;
//   case 'вторник':
//     console.log('Второй день недели')
//     break;
//   case 'среда':
//     console.log('Третий день недели')
//     break;
//   case 'четверг':
//     console.log('Четвертый день недели')
//     break;
//   case 'пятница':
//     console.log('Пятый день недели')
//     break;
//   case 'суббота':
//     console.log('Шестой день недели')
//     break;
//   case 'воскресенье':
//     console.log('Седьмой день недели')
//   default:
//   console.log('ты ввел не верное значение');
//     break;
// }


// Домашка 4 Циклы разные примеры

// Task 3: Count Even Numbers  from Chat
// Write a loop that counts and prints the number of even numbers between 1 and 50.

// let sum = 0;

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }  
// }

// console.log("The sum of even numbers from 1 to 50 is:", sum);


// let n = 1000;
// let num = 0;

// for (let i = n; i > 50; i /= 2) {
//   console.log(i);
//   num++;
// }

// console.log("Number of iterations:", num);




// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log('Привет!');
// } while (false);



// let isQueueEmpty = true;
// let dontWantToWait = true;

// while (!isQueueEmpty) { // Пока очередь перед нами не пуста
// 	if (dontWantToWait) { // Если ждать надоело
// 		console.log("Вы устали ждать и покинули очередь.");
// 		break; // Прерываем ожидание и уходим
// 	}
// 	console.log('Давайте подождем еще'); 
// }

// let i = 0; // задаем начальное значение счетчика
// let sum = 0; // объявляем переменную, в которой будем хранить сумму
// while(i < 10) { // проверяем, что счетчик меньше 10
// 	i++; // увеличиваем счётчик на 1
// 	if (i % 4 === 0) { // проверяем, что счётчик кратен 4
// 		continue; // если кратен, то код ниже выполнен не будет
// 	}
// 	sum += i; // увеличиваем сумму на текущий счётчик,
// 	// если i будет кратно 4, эта строка не выполится
// }

// console.log(sum);

// while(true) { // бесконечный цик
// 	const msg = prompt('Введите сообщение'); // сообщение от пользователя
// 	// if (msg === 'continue') { // если continue
// 	// 	continue; // код ниже не выполнится, переходим к следующему шагу цикла
// 	// }
// 	console.log(msg); // выводим сообщение пользователя
// 	if (msg === 'break') { // если break
// 		break; // прекращвем выполнение цикла
// 	}
// }

// let monthNumber = 1;

// while (monthNumber <= 12) {
//     if (monthNumber >= 1 && monthNumber <=2 || monthNumber === 12) {
//         console.log('Зима');
//     } else if (monthNumber >= 3 && monthNumber <= 5) {
//         console.log('Весна');
//     } else if (monthNumber >= 6 && monthNumber <= 8) {
//         console.log('Лето');
//     } else if (monthNumber >= 9 && monthNumber <= 11) {
//         console.log('Осень');
//     }
// 	monthNumber++; // Увеличиваем значение monthNumber для следующего шага на 1
// }

// let i = -1;

// while (i < 15) { 
// 	console.log(i);
// i++;
// }

// let i = -10; 
// for (; i <= 10; i++) { 
//   console.log(i);
//  }


// Объявляем переменную dayNumber, которая равна номеру дня в месяце
// for (let dayNumber = 2; dayNumber <= 31; dayNumber++) { 
//   // Каждый день проверяем, является ли он третьим (выходным)
// 	if (dayNumber % 3 == 0) {
//     // Выводим сообщение
// 		console.log("Сегодня отдыхаем!"); 
//     // Ждем следующий день
// 		continue; 
// 	}
// 	console.log("Рабочий день, братец. Вот тебе план работ:..."); 
//   // Если проверка не прошла и день не выходной, выводим сообщение
// }


// const country = {
// 	'Лима': 'Перу',
// 	'Джакарта': 'Индонезия',
// 	'Анкара': 'Турция',
// 	'Париж': 'Франция',
// 	'Канберра': 'Австралия'
// };

// for (let key in country) { 
//       console.log(key);
//       /* с помощью конструкции country[capital] мы получаем значение объекта
//        по его ключу */
//   }


// const user = { // создаем объект user
// 	name: 'Ivan',
// 	age: 25,
// 	city: '', // пустое свойство city
// 	email: 'ivan@vanya.com'
// };

// for (key in user) { // перебираем объект
// 	if (user[key]) { // если свойство не пустое
// 		console.log('${key}: ${user[key]}'); // выводим ключ: значение
// 	}
// }
  

// let i = 0;

// while (i < 6) {
// 	console.log(i);
// 	i++;
// }

// let i = 0;

// do {
//   console.log(i);
// 	i++;
// } while (i < 3);


// Задача с выводом каждой пятницы как отчетного дня

// const dayOfreport = 5;
// const lastDayOfMonth = 31;

// for (let i = dayOfreport; i <= lastDayOfMonth; i++) {
//   if ((i - dayOfreport) % 7 === 0) {
//     console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
//   }  
// }

// Certainly! Let's break down the condition (i - dayOfreport) % 7 === 0 and understand how it checks if i represents a multiple of 7 days, corresponding to Fridays.

// (i - dayOfreport) calculates the difference between i and dayOfreport.

// This subtraction gives us the number of days that have passed since dayOfreport. For example, if dayOfreport is 5 (Friday), and i is 12, then (i - dayOfreport) would be 7, indicating that 7 days have passed since the start (Friday to the following Friday).

// (i - dayOfreport) % 7 calculates the remainder when the difference is divided by 7.

// The modulus operator % returns the remainder of the division operation. In this case, we divide the difference by 7 to determine how many complete sets of 7 days (weeks) have passed. The remainder gives us the number of days beyond the complete weeks. For example, if (i - dayOfreport) is 14, then (i - dayOfreport) % 7 would be 0 since 14 is evenly divisible by 7 (2 weeks).

// (i - dayOfreport) % 7 === 0 checks if the remainder is equal to 0.

// By comparing the remainder to 0, we determine if the number of days since dayOfreport is a multiple of 7. If the remainder is 0, it means that i represents a day that falls exactly on a multiple of 7 days (a Friday). Thus, the condition (i - dayOfreport) % 7 === 0 evaluates to true only for Fridays.

// By using this condition within the if statement, we can identify and log the statement for each Friday within the given range.


// 2.5 Class 

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

// getRectangleArea () {
//   		console.log(`${this.width * this.height}`); 
//   	},
//   	getRectanglePerimeter () {
//   		console.log(`${(this.width + this.height) * 2}`);



// const square1 = {
//   width: 4,
//   height: 5,

//   getArea: getRectangleArea,
//   getPerimeter: getRectanglePerimeter,
// };

// console.log(square1.getArea());
// console.log(square1.getPerimeter());



// function setName(name) {
//     console.log(name);
// };

// setName('Петя');
// setName();
// setName('Вася');

// function sayHello() {
// 	console.log('What is up');
// }
// sayHello();

// const sayHi = function() {console.log('Bye! Say yes, say no, it is time to go'); }
// sayHi();

// function sum(a, b) {
// 	return a + b;
// };

// let result1 = sum(4, 6);
// let result2 = sum(7, 3);
// let result3 = sum(5, 5);

// console.log(result1);  // Prints 10
// console.log(result2);  // Prints 10
// console.log(result3);

// function setName(name='Пользователь') {
// 	console.log(name);
// };

// setName('Петя');
// setName('Пользователь');
// setName('Вася');

// let greet = function() {
//   console.log("Hello!");
// };
// greet();

// "use strict";
// let age = prompt("Сколько Вам лет?", 18);

// let printMessage;

// // в зависимости от условия объявляем функцию
// if (age < 18) {

//     printMessage = function () {
//         console.log("Привет!");
//     }

// } else {

//     printMessage = function () {
//         console.log("Здравствуйте!");
//     }

// }

// printMessage()


// function showMessage() {
// let message = 'Привет';
// alert(message)	
// }
// showMessage();
// alert(message)

// const user = {
// 	name: 'Pete',
// 	age: 30,
// 	city: 'Moscow',
// 	getInfo: function() {
//     console.log(`Пользователь ${user.name}, возраст ${user.age}, проживает в городе: ${user.city}`);
//   }
// }
// user.getInfo();

// const square1 ={
// 	width: 4,
// 	height: 7,
// 	getRectangleArea () {
// 		console.log(`${this.width * this.height}`); 
// 	},
// 	getRectanglePerimeter () {
// 		console.log(`${(this.width + this.height) * 2}`);
// 	}
// }
// square1.getRectangleArea();
// square1.getRectanglePerimeter();

// function getRectangleArea() {
//   return this.width * this.height;
// }
// function getRectanglePerimeter() {
//   return this.width * 2 + this.height * 2;
// }

// const square1 = {
//   width: 4,
//   height: 5,

//   getArea: getRectangleArea,
//   getPerimeter: getRectanglePerimeter,
// };

// console.log(square1.getArea());
// console.log(square1.getPerimeter());

// const maxValue = 4;
// let sequence = '';

// for (let i = 0; i < maxValue; i++) {
// 	sequence += i;
// }

// function printSequence() {
// 	console.log(sequence);
// }

// printSequence();


// Massives 2.6

// const numbs = [2, 4, 5, 6, 8];

// for (let i = 0; i < numbs.length; i++) {
// 	console.log(numbs[i]);
// }

// const numbs = [2, 4, 5, 6, 8];

// for (let i = 0; i < numbs.length - 1; i++) {
//   numbs[i + 1] += numbs[i];
// }

// console.log(numbs);

// for (let i = 0; i < numbs.length - 1; i++) {
//   numbs[i] += numbs[i + 1];
// }

// console.log(numbs);


// const numbs = [2, 4, 5, 6, 8];

// numbs.forEach((el) => {
// 	console.log(el);
// });

// const numbs = [2, 4, 5, 6, 8];

// numbs.forEach((el, index) => {
// 	console.log(`${index}: ${el}`);
// });

// const arr = [3,5,8,2,9,10,11,15,14,16,22];

// const even = arr.filter(el => el % 2 === 0);

// console.log(even);

// const salary = [45000, 39000, 105000, 76000, 77000];

// const tax = salary.map(el => el * 0.13);
// console.log(tax);

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// matrix.forEach(function(row) {
//   row.forEach(function(element) {
//     console.log(element);
//   });
// });

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// const multipliedMatrix = matrix.map(function(row) {
//   return row.map(function(element) {
//     return element * 2;
//   });
// });

// console.log(multipliedMatrix);

// function funcSum(...arrSum) {
//   let sum = 0;
//   for (let item of arrSum) {
//   sum += item;
//   }
//   return sum;
// }

// console.log(funcSum(3, 5, 7));

// let arrSum = [3, 4, 5, 6]

// const sum = (a, b, ...rest) => {
//   let result = a + b;
//   console.log(result);
//   console.log(rest);
// }

// console.log(sum(...arrSum));


// let arr = [1, 5, 4, 10, 0, 3];

// for (const el of arr) {
//   console.log(el);
//   if (el === 10) {
//     break;
//   }
// }
  
// Задание 1

// let arr = [1, 5, 4, 10, 0, 3];
// arr = arr.indexOf(4);
// console.log(arr);

// Задание 2

// let arr = [1, 3, 5, 10, 20];

// let newArr = arr.join(' ');
// console.log(newArr);

// Задание 3


// const arr = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
// const outputArr = [];

// for (const inArr of arr) {
//   const newArray = [];
  
//   for (const element of inArr) {
//     newArray.push(element);
//   }
  
//   outputArr.push(newArray);
// }

// console.log(outputArr);


// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(1);
// 	}
// }

// console.log(arr);

// Задание 4

// let arr = [1, 1, 1];
// arr = arr.concat(2,2,2);
// console.log(arr);

// Задание 5

// let arr = [9, 8, 7, 'a', 6, 5];

// arr.sort();
// console.log(arr);
// arr.pop();
// console.log(arr);

// Задание 6

// let arr = [9, 8, 7, 6, 5];
// let userInput = Number(prompt('Введите число'));
// let found = false;

// for (const el of arr) {
//   if (userInput === el) {
//     found = true;
//     break;
//   }
// }

// console.log(found);

// Задание 7


// let arr = ['abcdef'];
// arr[0] = arr[0].split('');
// arr[0].reverse();
// arr[0] = arr[0].join('');

// console.log(arr);

// Задание 8


// let arr = [[1, 2, 3,],[4, 5, 6]];
// let newArr = [].concat(...arr);
// console.log(newArr);

// Задание 9

// let arr = [1, 2, 3, 4, 5, 6, 9, 3, 5];
// console.log(arr);
// for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] += arr[i + 1];
//   }
  
// console.log(arr);

// Задание 10

// const arr = [1, 2, 3, 4, 5];

// let result = arr.map(item => (item ** 2));
// console.log(result);

// Вариант 2
// for (const element of arr) {
//   // Code to be executed for each element
//   console.log(element** 2);
// }

// Задание 11


// const getLengthWords = source => source.map(item => item.length);

// console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));

// Задание 12



// let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
// let arrNew = [];
// arrNew = arr.filter(function(elem) {
// 	if (elem <= 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// console.log(arrNew);

// Задание 13