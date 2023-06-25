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

// The modulus operator % returns the remainder of the division operation. In this case, we divide the difference 
//by 7 to determine how many complete sets of 7 days (weeks) have passed. The remainder gives us the number of days beyond the complete weeks. For example, if (i - dayOfreport) is 14, then (i - dayOfreport) % 7 would be 0 since 14 is evenly divisible by 7 (2 weeks).

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

// const naMe = 'Adam';
// let age = 43;
// console.log(`My name is ${naMe} and I am ${age} years old`);

// Exercise 2: Arithmetic Operations

// Declare two variables, num1 and num2, and assign them any number values.
// Perform the following arithmetic operations: addition, subtraction, multiplication, division, and modulus (remainder).
// Output the results to the console.

// let num1 = 7;
// let num2 = 9;
// console.log(num1 + num2);
// console.log(num2 - num1);
// console.log(num1 * num2);
// console.log(num2 / num1);
// console.log(num2 % num1); 


// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     console.log('even');
//   } else {
//     console.log('odd');
//   }
// }

// evenOrOdd(0);

// Declare a variable called grade and assign it a number representing a student's grade (e.g., 85).
// Write an if-else statement to determine the grade letter based on the numeric value.
// If the grade is 90 or above, output "A".
// If the grade is between 80 and 89, output "B".
// If the grade is between 70 and 79, output "C".
// If the grade is between 60 and 69, output "D".
// If the grade is below 60, output "F".

// let studentsGrade = 59;

// if (studentsGrade >= 90) {
//   console.log(`You get an 'A'`);
// } else if (studentsGrade >= 80) {
//   console.log(`You get an 'B'`);
// } else if (studentsGrade >= 70) {
//   console.log(`You get an 'C'`);
// } else if (studentsGrade >= 60) {
//   console.log('D');
// } else {console.log(`Sorry, you failed the test and go home with an 'F'`);}

// Exercise 4: Looping

// Write a for loop that prints the numbers from 1 to 10 to the console.
// Write a while loop that prints the numbers from 10 to 1 to the console.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let i = 10;

// while (i >= 1) {
//   console.log(i);
//   i--;
// }


// Exercise 5: Functions

// Write a function called greet that takes a person's name as a parameter and outputs a greeting message to the console.
// Call the greet function with your name as an argument.

// function greet(usersName) {
//   console.log(`Good morning ${usersName}`);
// }
// greet('Adam')

// These exercises cover some fundamental concepts in JavaScript, including variables, arithmetic operations, 
// conditional statements, looping, and functions. They will help you practice and solidify your understanding 
// of these concepts. Feel free to modify or expand on these exercises to further challenge yourself.

// let message = 'Hello, World!'
// console.log(message);

// const firstName = 'Adam ';
// const lastName = 'Batukaev';
// let fullName = firstName + lastName;
// console.log(fullName);

// let num1 = 10;
// let num2 = 15;
// let sum = num1 + num2;
// console.log(sum);

// let price = 1500;
// let quantity = 20;
// let totalCost = price * quantity;
// console.log(totalCost);

// let age = 43;
// const isAdult = true;
// console.log(isAdult);


// Методы toLowerCase

// const answerUser = prompt('Без рук, а рисует. Без зубов, а кусает'); // сохраняем
// // ответ пользователя в переменную answerUser
// const answer = 'мороз'; // храним правильный ответ в переменной answer

// if (answerUser.toLowerCase() === answer.toLowerCase()) { // проверяем, совпадает ли строка, полученная от пользователя, с правильным ответом
// 	// и теперь нам не важно, в каком регистре какие буквы ввел пользователь, мы все приводим к нижнему регистру
// 	alert('Это правильный ответ!'); // это сообщение, если совпала
// } else {
// 	alert('Не угадал, правильный ответ: ${answer}')};

  // Поиск Подстроки

//   str.indexOf
// Первый метод — str.indexOf(substr, pos).
// const str = 'Поезд едет далеко'; // строка, в которой будем осуществлять поиск
// str.indexOf('едет'); // 6, 'едет' — это подстрока, которую мы ищем, метод вернет
// // 6, т. к. «едет» есть в искомой строке str, и совпадение начинается с 6-го индекса
// // позиции в строках начинаются с 0
// str.indexOf('едит'); // -1, т. к. «едит» — нет полного совпадения подстроки


// str.includes
// Более современный метод str.includes(substr, pos) возвращает true , если в строке str есть подстрока 
// substr , либо false , если нет.

// const products = ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 'Груша Конференция'];
// const search = 'молоко';

// products.forEach((product) => {
// 	// проходимся по массиву products и проверяем каждый элемент на наличие 
// 	// подстроки 'молоко', не забыв привести элемент и искомую подстроку
// 	// к одному регистру
// 	if (product.toLowerCase().includes(search.toLowerCase())) {
// 		console.log(product);
// 	}
// });
// в результате будет выведено 'Молоко Молочник', 'Коровка Молоко'

// str.startsWith и str.endsWidth
// str.startsWith и str.endsWith — это методы, которые проверяют, какой подстрокой начинается и заканчивается строка соответственно.

// const products = ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 'Груша Конференция'];
// const search = 'молоко';

// products.forEach((product) => {
// 	// проходимся по массиву products и проверяем каждый элемент на наличие 
// 	// подстроки 'молоко' в начале названия, не забыв привести элемент и
// 	// искомую подстроку к одному регистру
// 	if (product.toLowerCase().startsWith(search.toLowerCase())) {
// 		console.log(product);
// 	}
// });
// в результате будет выведено 'Молоко Молочник'



// Также не забывайте про метод split , который вы рассмотрели в предыдущем уроке «Массивы». Он практически всегда используется в связке с методом массива 
// join.

// function palindrom(word) {
// 	return word.toUpperCase() === word.toUpperCase().split('').reverse().join('');
// }

// console.log(palindrom('мим')); 
// console.log(palindrom('мак')); 
// console.log(palindrom('заказ')); 


// Наиболее частые методы строк (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)


// Объект Date, как работать с датой
// 4 из 7
// Объект Date позволяет работать с датами и временем в JavaScript.

// Существуют различные способы создания объекта Date.

// Первый способ заключается в использовании пустого конструктора без параметров:
// let currentDate = new Date();
// console.log(currentDate);

// Второй способ заключается в передаче в конструктор Date количества миллисекунд, которые прошли с начала эпохи Unix, то есть с 1 января 1970 года 00:00:00 GMT.

// let myDate = new Date("3/27/2021");
// console.log(myDate); 


// // для начала создадим массив, в который занесем все дни недели на русском
// // помним, что отсчет в JS начинается с воскресенья - 0
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// // создадим массив, где будем хранить названия месяцев на русском
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let myDate = new Date(); // здесь мы получаем текущую дату
// let fullDate = "Сегодня: " + myDate.getDate() + // getDate возвращает число
// " " + months[myDate.getMonth()] + // getMonth возвращает номер месяца, который мы можем использовать в качестве индекса для массива months
// " " + myDate.getFullYear() + // getFullYear возвращает год
// ", " + days[myDate.getDay()]; // getDay возвращает номер дня недели, который мы используем в качестве индекса для массива days

// console.log(fullDate); // Сегодня: 1 Февраль 2023, Среда



// let welcome; // переменная, в которой будем хранить наше приветствие
// let myDate = new Date(); // получаем текущую дату
// let hour = myDate.getHours(); // получаем час из нашей даты
// let minute = myDate.getMinutes(); // получаем минуты
// let second = myDate.getSeconds(); // получаем секунды

// // если минуты и секунды у нас будут меньше 10, то в результате формат времени
// // будет не очень красивым — 12:1:34 или 3:1:6
// // намного приятнее следующие записи: 12:01:34 или 3:01:06
// // чтобы добиться формата, как в последних примерах, будем осуществлять
// // проверку на < 10
// if (minute < 10) { // если минут будет меньше 10,
// 	minute = "0" + minute; // то перед ними поставим 0
// }
// if (second < 10) { // если секунд будет меньше 10,
// 	second = "0" + second; // то перед ними поставим 0
// }

// // здесь мы проверяем, который час, и в зависимости от этого в переменную welcom
// // сохраняем приветствие, зависящее от времени суток
// if (hour > 12) {
// 	welcome = "Доброе утро";
// } else if (hour < 17) {
// 	welcome = "Добрый день";
// } else {
// 	welcome = "Добрый вечер";
// }

// console.log(welcome + ", текущее время: " + hour + ":" + minute + ":" + second);
// // Доброе утро, текущее время: 4:37:21


// Теперь рассмотрим пример, в котором установим дату, вывод в формате 
// <число> <месяц на русском> <год>, <день недели></день>

// // для начала создадим массив, в который занесем все дни недели на русском
// // помним, что отсчет в JS начинается с воскресенья — 0
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// // создадим массив, где будем хранить названия месяцев на русском
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let myDate = new Date(); // в текущей точке программы мы создали переменную, 
// 	// которая хранит текущую дату
// 	// Fri Jan 20 2023 16:22:04 GMT+0300 (Москва, стандартное время)
// myDate.setDate(15); // здесь мы меняем только число у нашей даты,
// 	// автоматически меняется день недели
// 	// Sun Jan 15 2023 16:22:04 GMT+0300 (Москва, стандартное время)
// myDate.setMonth(6); // здесь меняется только месяц,
// 	// автоматически меняется день недели
// 	// Sat Jul 20 2023 16:22:04 GMT+0300 (Москва, стандартное время)
// myDate.setYear(2020); // здесь меняется только год,
// 	// автоматически меняется день недели
// 	// Wed Jul 20 2020 16:22:04 GMT+0300 (Москва, стандартное время)


// // здесь происходит всё то же, что и в коде выше, когда мы выводили
// // дату для текущего дня с названиями дней недели и месяцев на русском
// let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] +
// " " + myDate.getFullYear() + ", " + days[myDate.getDay()];

// console.log(fullDate); // 15 Июль 2020, Понедельник

// (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date)


// А new RegExp используется в том случае, когда мы хотим создать регулярное выражение сразу, из динамически сгенерированной строки. Например, у нас есть массив с размеченным на заголовки и пункты текстом. Мы хотим, чтобы пользователь мог выбрать, какую информацию ему показать о заголовках или пунктах:

// const arrText = [
//     'Пункт1. Описание пункта',
//     'Заголовок1. Описание',
//     'Пункт2. Описание пункта',
//     'Заголовок2. Описание',
// ]; // массив с размеченным текстом

// let title = prompt('Вы хотите прочитать заголовки или пункты?'); // ожидаем
// // ввод пользователя 'Заголовок' или ' Пункт'

// // let regexp = `/${title}/`; // если попыться создать регулярное выражение через /.../
// // и передать title, то в этом случае получим обычную строку
// // console.log(regexp);
// // let regexp = /`${title}`/; // в этом случае получим регулярное выражение, но
// // оно будет выглядеть как /`${title}`/, т. е. значение title не передастся

// let regexp = new RegExp(`${title}`); // используя такую запись создания регулярного
// // выражения, мы получим то, что хотим. Например, при вводе 'Пункт' мы получим регулярное
// // выражение /Пункт/

// arrText.forEach((el) => {
//     if (regexp.test(el)) { // если есть совпадения с регулярным выражением,
//         console.log(el);  // то выводим этот элемент
//     }
// });

// console.log(arrText());



// const currentDate = new Date()

// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// console.log(currentDate.toLocaleDateString('ru-RU', {weekday: 'long'})); 


// const currentDate = new Date();
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// console.log(currentDate.toLocaleDateString('ru-RU', options));

// let currentDate = new Date();

// console.log(currentDate.toLocaleTimeString('ru-RU'));


// let myDate = new Date();
// // let day = myDate.getDate()
// // let time = myDate.getHours();
// // let minutes = myDate.getMinutes();
// // console.log(day, time, minutes);
// myDate.setFullYear(2000);
// console.log(myDate);


//Пример как вывести дату и время в русскоязычном формате
//вариант 1

// function formatDateTime(date) {
//   const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//   const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

//   const formattedDate = `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}`;
//   const formattedTime = `Время: ${date.getHours()}:${padZero(date.getMinutes())}:${padZero(date.getSeconds())}`;

//   return `${formattedDate}\n${formattedTime}`;
// }

// function padZero(num) {
//   return String(num).padStart(2, "0");
// }

// // Пример использования:
// const myDate = new Date();
// const formattedDateTime = formatDateTime(myDate);
// console.log(formattedDateTime);

// Вариант 2 с использованием 'if statement':


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


// 1. Введение. Что такое callback

// const fibonacci = [1, 1, 2, 3, 5, 8];

// // TODO: Допишите код, чтобы в консоль ниже выводились правильные значения
// // Используйте метод map, чтобы получить массив fibonacci, в котором все числа умножены на 2
// const multipleByTwoFib = ...
// // Используйте метод map, чтобы получить массив fibonacci, в котором к каждому числу добавили 10
// const plusTenFib = ...
// // Используйте метод filter, чтобы получить массив, в который входят числа Фибоначчи больше 3
// const onlyBigFib = ...

// console.log(multipleByTwoFib); // => [2, 2, 4, 6, 10, 16]
// console.log(plusTenFib); // => [11, 11, 12, 13, 15, 18]
// console.log(onlyBigFib); // => [5, 8]

// const fibonacci = [1, 1, 2, 3, 5, 8];
// const multipliedByTwoFib = fibonacci.map(item => item * 2);

// console.log(multipliedByTwoFib);

// const plusTenFib = fibonacci.map(item => item + 10);
// console.log(plusTenFib); // => [11, 11, 12, 13, 15, 18]

// const onlyBigFib = fibonacci.filter(item => item > 3);
// console.log(onlyBigFib); // => [5, 8]

// Пример callback функции
// function functionWithCallback(callback) {
//   // Call the provided callback function
//   callback();
// }
   
// functionWithCallback(() => {
//   console.log("Привет из анонимной стрелочной функции")});


// function callbackWithArrayLength(arr, callback) {
//   // console.log(arr.length);
//   callback(arr.length);
// }

// callbackWithArrayLength([1], (length) => {
//   console.log(length);
// });

// callbackWithArrayLength([1, 1], (len) => {
//   console.log(len);
// });
// callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
//   console.log(l);
// });


// function callbackWithArrayLength(arr, callback) {
//   callback(arr.length);
// }

// callbackWithArrayLength([1], (length) => {
//   console.log(length);
// });

// callbackWithArrayLength([1, 1], (len) => {
//   console.log(len);
// });

// callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
//   console.log(l);
// });

// function log(arrItem) {
//   console.log("Элемент массива:", arrItem);
// }

// function each(arrItem, cb) {
// for (let i = 0; i < arrItem.length; i++) {
//   cb(arr[i]);
// }
// }

// each(["Глеб", "Олег", "Татьяна", "Платон"], log);

// function log(arrItem) {
//   console.log("Элемент массива:", arrItem);
// }

// function each(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i]);
//   }
// }

// each(["Глеб", "Олег", "Татьяна", "Платон"], log);

// function square(number) {
//   return number * number;
// }

// function map(arr, ruleFunction) {
//   const output = [];

	
// 	console.log('ruleFunction', ruleFunction);  // Добавил в консоль лог для отладки

//   for (let i = 0; i < arr.length; i++) {
//     output.push(ruleFunction(arr[i]));
//   }

//   return output;
// }

// // ОШИБКА: написано square() вместо square
// console.log(map([1, 4, 9, 16], square())); // => Uncaught TypeError: ruleFunction is not a function



// function add(number1, number2) {
//   return number1 + number2;
// }

// function map(arr, ruleFunction) {
//   const output = [];

//   // Добавил консоль лог для отладки
//   console.log("ruleFunction", ruleFunction);

//   for (let i = 0; i < arr.length; i++) {
//     output.push(ruleFunction(arr[i]));
//   }

//   return output;
// }console.log(
//   map([1, 4, 9, 16], (item) => {return add(10, item);
//   })
// );

// const people = [
//   { name: 'Глеб', },
//   { name: 'Анна', },
//   { name: 'Олег',},
//   { name: 'Оксана', }
// ];
// console.log(people.sort((person1, person2) => person1.name.localeCompare(person2.name)));

// const people = [
//   { name: 'Глеб' },
//   { name: 'Анна' },
//   { name: 'Олег' },
//   { name: 'Оксана' }
// ];

// console.log(people.sort((person1, person2) => person1.name.localeCompare(person2.name)));

// const numbers = [10, 5, 8, 2, 4, 1, 9];
// console.log(numbers.sort((el1, el2) => el1 - el2));

// const people = [
//   { name: 'John', age: 25 },
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 20 },
//   { name: 'Emily', age: 35 }
// ];

// console.log(people.sort((person1, person2) => person1.age - person2.age));
// // console.log(people.sort((person1, person2) => person1.name.localeCompare(person2.name)));

// const words = ['apple', 'banana', 'grape', 'orange', 'melon'];
// console.log(words.sort((a, b) => a.length - b.length));

// const numbers = [8, 2, 5, 1, 9, 4];
// Your task is to write a sorting function using the `sort` method
// that will sort the numbers array in ascending order.
// Write your solution below this comment.

// console.log(numbers.sort((num1, num2) => num1 - num2));


// const people = [
//   { name: 'John', age: 32 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 40 },
// ];
// Your task is to write a sorting function using the `sort` method
// that will sort the people array based on the 'age' property in ascending order.
// Write your solution below this comment.

// console.log(people.sort((person1, person2) => person1.name.localeCompare(person2.name)));
// console.log(people.sort((person1, person2) => person2.age - person1.age));

// const words = ['apple', 'banana', 'cherry', 'dragonfruit', 'fg'];

// console.log(words.sort((item1, item2) => item2.length - item1.length));

// const words = ['apple', 'banana', 'cherry', 'dragonfruit', 'fg'];
// // Your code here
// console.log(words.sort((item1, item2) => item2.length - item1.length));
// Output: ['fg', 'apple', 'cherry', 'banana', 'dragonfruit']

// const students = [
//   { name: 'Alice', age: 25 },
//   { name: 'John', age: 32 },
//   { name: 'Bob', age: 40 },
// ];
// // Your code here
// console.log(students.sort((person1, person2) => person1.name.localeCompare(person2.name)));
// Output: [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 40 },
//   { name: 'John', age: 32 }
// ]

// 1. Filtering even numbers:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
// console.log(oddNumbers);

//2. Filtering names starting with a specific letter:
// const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Barkob'];
// const filteredNames = names.filter(name => name.startsWith('B') && name.endsWith('b')); //name.startsWith Sensible to Upper and lower keys
// console.log(filteredNames); // Output: ['Bob']

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 20 },
//   { name: 'David', age: 35 },
// ];
// const adults = people.filter(person => person.age >= 25);
// console.log(adults); // Output: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 20 }, { name: 'David', age: 35 }]

// Task 1:
// Given an array of numbers, filter out the even numbers and create a new array with only the odd numbers.

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const evenNumbers = arr.filter(arr => arr % 2 === 0);
// const oddNumbers = arr.filter(arr => arr % 2 !== 0);
// console.log(oddNumbers);
// console.log(evenNumbers);


// Task 2:
// Given an array of strings, filter out the strings that have a length less than 5 characters 
// and create a new array with only the longer strings.

// const words = ['apple', 'banana', 'grape', 'orange', 'melon'];
// const filteredWords = words.filter(words => words.length <= 5); // Можно отфильтровать в большую или меньшую сторону
// console.log(filteredWords); // (3) ['apple', 'grape', 'melon']  // через знак равенства не работает


// Task 3:
// Given an array of objects representing books, filter out the books that have a price higher 
// than $50 and create a new array with only the affordable books.

// const books  = [
//   {name: 'Цель', author: 'Кокс Джеф', pages: 100, price: 55},
//   {name: 'Проект Феникс', author: 'Джин Ким', pages: 200, price: 45},
//   {name: 'Deadline', author: 'Том Демарко', pages: 250, price: 39},  
// ]

// const affordableBooks = books.filter(books => books.price <= 50); 
// console.log(affordableBooks); // Printed out books that cost less than $50
// console.log(books.sort((item1, item2) => item1.price - item2.price)); //Sorted books, depending on the price
// console.log(books.sort((item1, item2) => item2.pages - item1.pages)); //Sorted books, depending on the amount of pages
// console.log(books.sort((item1, item2) => item1.name.length - item2.name.length)); //Sorted books, depending on the length of the name
// console.log(books.sort((item1, item2) => item1.author.localeCompare(item2.author))); // Sorted books, alphabetically based on their author 

// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"
// let arr = [ "123", "999", "-100"];Sorted books, alphabetically based on their author

// // Изменить строчное значение в цифровое
// function numberToString(num) {
//   const changedArr = num.toString();
//   return changedArr
// }
// console.log(numberToString([ "123", "999", "-100"]));

// А можно было так
// function numberToString(num) {
//   return String(num);
// }
// console.log(numberToString([ "123", "999", "-100"]));

// А можно было и вот так или так //const numberToString = num => `${num}`;
// function numberToString(num) {
//   return ''+num;
// }
// console.log(numberToString([ "123", "999", "-100"]));


// Задание – слить следующий массив в одно предложение ['hello', 'world', 'this', 'is', 'great']
// const smashWords = (words) => words.join(' '); 
// console.log(smashWords(['hello', 'world', 'this', 'is', 'great']));

// smash = function (words) {
//   return words.join(" ");
// };

//  тут ещё один вариант через цикл ФОР
// function smash (words) {
//   "use strict";
//   var smashed = '';
//   for(var i = 0; i<words.length; i++) {
//     smashed += words[i];
//     if(i!=words.length-1) {
//       smashed += ' ';
//     }
//   }
//   return smashed;
// };bv  ca

// const people1 = [
//   { name: 'Глеб', gender: 'male' },
//   { name: 'Анна', gender: 'female' },
//   { name: 'Олег', gender: 'male' },
//   { name: 'Оксана', gender: 'female' }
// ];

// console.log(Object.entries(people1));
// const malePeople = people1.filter(person => person.gender === 'male');
// console.log(malePeople);

// for (let i = 0; i < people1.length; i++) {
//   console.log(people1[i]);
  
// }

// for (let person of people1) {
//   for (let key in person) {
//     console.log("Key: " + key + ", Value: " + person[key]);
//   }
// }


// const people2 = {
//   name: 'Глеб', gender: 'male'
// }
// console.log(Object.values(people2));

// let variable2;
// if (variable2) {
//   console.log("Variable 2 exists"); // Этот блок не выполнится, так как variable2 равно null
// }

// const arr = [1,2,3];
//  arr.push(4);
//  console.log(arr);

//  Task 1: Print Even Numbers
//  Write a program that uses a for loop to print all even numbers between 1 and 20.

// Для вывода чисел до указанного значения
// for (let i = 0; i <= 20; i++) {
//   console.log(i);  
// }


// Найти факториал числа через цикл for
// var number =9;
// var factorial = 1;

// for (var i = 1; i <= number; i++) {
//     factorial *= i;
// }

// console.log("Factorial of", number, "is", factorial);

// for (var i = 1; i <= 10; i++) {
//   for (var j = 1; j <= 10; j++) {
//       var result = i * j;
//       console.log(i + " x " + j + " = " + result);
//   }
// }


// Exercise 1: Sum of Numbers
// Write a program that calculates and prints the sum of all numbers from 1 to 10.


// Цикл фор считает сумму всех чисел до 10
// let sum = 0;

// for (let i = 1; i <= 12; i++) {
//   sum += i;
// }

// console.log("The sum of numbers from 1 to 10 is:", sum);

// Task 1: Calculate the Average
// Write a program that takes an array of numbers as input and calculates 
// the average of those numbers using a for loop.

// function calculateAverage(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   const average = sum / numbers.length;
//   return average;
// }

// // Example usage:
// const numbers = [5, 10, 15, 20, 25];
// const avg = calculateAverage(numbers);
// console.log("The average is:", avg);

// Task 2: Create an array of strings representing names and display them in reverse order

// Create an array of names
// let names1 = ["John", "Mary", "David", "Sarah", "Michael"];
// names1.push('Adam');
// // names1.pop();
// // names1.shift();
// // names1.unshift('Kevin');
// // Reverse the order of elements in the array
// // let reversedNames = names1.reverse();
// //  console.log(reversedNames);
// // Display the names in reverse order
// // for (let i = 0; i < names1.length; i++) {
// //   console.log(names1[i]);
// // }

// names1.push('Disney');

// // // names1.reverse();
// // for (let i = names1.length - 1; i >= 0; i--) {
// //   console.log(names1[i]);
  
// // }
// // for (let i = 0; i < names1.length; i++) {
// //   console.log(names1[i]);
  
// // }

// names1.reverse();
// console.log(names1);

// for (let i = 0; i < names1.length; i++) {
//   console.log(names1[i]);
  
// }

// names1.unshift('Dilan');

// // for (let i = names1.length; i >= 0; i--) {
// //   console.log(names1[i]);
  
// // }
// const filteredArr = names1.filter(names1 => names1.startsWith('D'));
// console.log(filteredArr);
// for (let i = 0; i < filteredArr.length; i++) {
//   console.log(filteredArr[i]);
  
// }


// for (let i = filteredArr.length; i >= 0; i--) {
//   console.log(filteredArr[i]);
  
// }

// filteredArr.forEach(function (element) {
//   console.log(element);
// })

// for (const element of names1) {
//   console.log(element);
// }


// // names1.shift();
// // names1.pop();
// for (let i = names1.length - 1; i >= 0; i--) {
//   console.log(names1[i]);
  
// }

// const str = 'Hello World';
// const arr = str.split(' ');
// console.log(arr); // ['Hello', 'World']

// const str = 'Hello world';
// const arr = Array.from(str);
// console.log(arr); // (11) ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
// const arrNew = arr.join('');
// console.log(arrNew); // Hello world

// const arr = ['Hello', 'World'];
// const str = arr.toString();
// console.log(str); // 'Hello,World'

//Так можно удалить элемент из массива
// const arr = ['Hello', 'World'];
// const str = arr.toString();

// const stringWithoutComma = str.replace(/,/g, ' ');
// console.log(stringWithoutComma); 



// const arr = [3,5,8,2,9,10,11,15,14,16,22];

// const even = arr.filter(el => el % 2 === 0);

// console.log(even);

// const obj = { name: 'John', age: 30, city: 'New York' };

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// const obj = { name: 'John', age: 30, city: 'New York' };

// const keys = Object.keys(obj);

// for (let key of keys) {
//   console.log(key, obj[key]);
// }

// const obj = { name: 'John', age: 30, city: 'New York' };

// const entries = Object.entries(obj);

// for (let [key, value] of entries) {
//   console.log(key, value);
// }
// setTimeout(() => {
//   console.log("Вызов функции через 3 секунды");
// }, 3000);


// 1 задание
// Используем метод split, filter и свойство length:

https://www.codewars.com/kata/5865918c6b569962950002a1
// // let counter = 0;
// // const intervalId = setInterval(() => {
// //   counter++;
// //   console.log("Счетчик:", counter);
// // }, 7000);

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0

// const letter = 'l';

// function findLetters(letter) {
// const word = 'Hello';
//   const letters = word.split('');
// filteredLetters = letters.filter(el => el === letter);
// return filteredLetters.length;
// }

// console.log(findLetters('H')); 

// function strCount(str, letter){  
//   const arr = str.split('');//code here
//   const returnLetters = arr.filter(el => el === letter);
//   return returnLetters.length;
// }

// console.log(strCount('Hello', 'l')); // Рабочий вариант

// 2 задание
// Использовать map и reduce:

// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba

// function squaredArrSum(arr) {
//   const squaredArr = arr.map(int => int * int);
//   let sum = 0;
//   squaredArr.forEach(num => {
//     sum += num;
//   });
//   return sum;
// }

// console.log(squaredArrSum([1, 2, 3, 4, 5]));


// Аналогичные решения
// function squareSum(numbers){
//   return numbers.reduce(function(sum, n){
//     return (n*n) + sum;
//   }, 0)
// }

// function squareSum(numbers){
//   return numbers.reduce((sum,num) => sum + (num * num), 0);
// }


// 3 задание
// Math.sqrt и условное ветвление:

// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba
// function nearestSq(n) {
//   const lowerSq = Math.floor(Math.sqrt(n));
//   const upperSq = Math.ceil(Math.sqrt(n));

//   const lowerDiff = n - (lowerSq * lowerSq);
//   const upperDiff = (upperSq * upperSq) - n;

//   if (lowerDiff <= upperDiff) {
//     return lowerSq * lowerSq;
//   } else {
//     return upperSq * upperSq;
//   }
// }

// console.log(nearestSq(110));
// console.log(nearestSq(119)); //А можно было проще: const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);
// или так  
// function nearestSq(n){
//     return Math.round(n**0.5)**2
//   }
//   console.log(nearestSq(91));


// 4 задание
// Split, reverse, join:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
//Split, reverse, join:

// function reverseInput(word) {
//   const result = word.split('').reverse().join(''); 
//   return result; 
// }
// console.log(reverseInput('world'));//А можно было еще проще 
// function solution(str){
//   return str.split('').reverse().join('');  
// }

//const solution = str => str.split('').reverse().join('');


// 5 задание
// Split, length, map:

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

// function returnLength(str) {
//   const arr = str.split(' ').map(el => el.length);
//   return str + arr;
// }
// console.log(returnLength('word '));

// function returnLength(str) {
//   const arr = str.trim().split(' ').map(el => `${el} ${el.length}`);
//   return arr;
// }

// console.log(returnLength('will you marry me?')); //Output (4) ['will 4', 'you 3', 'marry 5', 'me? 3']


//6 задание
// Арифметические операторы, условное ветвление:


// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), 
// calculate the total cost of the mangoes.

// function mango(quantity, price) {
//   const offerQuantity = Math.floor(quantity / 3); 
//   const remainQuantity = quantity % 3; 
//   const totalCost = (offerQuantity * 2 + remainQuantity) * price;
  
//   return totalCost;
// }

// Examples:
// console.log(mango(2, 3)); // Output: 6

//А можно было проще
// function mango(quantity, price){
//   return price * (quantity - Math.floor(quantity / 3));
// }


// 7 задание
// Арифметические операторы, Math.floor():

// function litres(time) {
//   const drink = 0.5
//   return Math.floor(time * drink);
// }

// console.log(litres(6.7));
// Можно проще 
// function litres(time) {
//   return Math.floor(time * 0.5);
// }

// 8 задание
// map(), условный оператор:
// function invert(array) {
//   return array.map(number => number * -1);
// }

// console.log(invert([1, 2, 3, 4, 5])); // Output: [-1, -2, -3, -4, -5]
// console.log(invert([1, -2, 3, -4, 5])); // Output: [-1, 2, -3, 4, -5]
// console.log(invert([])); // Output: []


// 9 задание
// Цикл, Math.pow():

// function powersOfTwo(n) {
//   const result = [];
  
//   for (let i = 0; i <= n; i++) {
//     result.push(Math.pow(2, i));
//   }
  
//   return result;
// }

// console.log(powersOfTwo(0)); // Output: [1]
// console.log(powersOfTwo(1)); // Output: [1, 2]
// console.log(powersOfTwo(2)); // Output: [1, 2, 4]
// console.log(powersOfTwo(3)); // Output: [1, 2, 4]



// 10 задание
// length, условный оператор, reduce:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// function grow(x) {
//   return x.reduce((stored, currentV) => {
//     return stored * currentV;
//   });
// }

// console.log(grow([4, 2, 1, 3])); // Output: 24

//А можно проще const grow=x=> x.reduce((a,b) => a*b);


// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// function calculateSum(num) {
//   let total = 0;
//   for (let i = 1; i <= num; i++) {
//     total += i;
//   }
//   return total;
// }

// 12 задание
// replace, (регулярка):

// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// function removeExclamationMarks(s) {
//   return s.replace(/!/g, '');
// }

// let sentence = "Hello World!!!!!";
// let result = removeExclamationMarks(sentence);
// console.log(result); // Output: "Hello World"



// 13 задание
// Math.max, Math.min, spread-оператор:

// https://www.codewars.com/kata/577a98a6ae28071780000989
// var min = function(list) {
//   return Math.min(...list);
// }

// var max = function(list) {
//   return Math.max(...list);
// }

// let numbers = [5, 2, 9, 1, 7];
// console.log(min(numbers)); // Output: 1 (minimum)
// console.log(max(numbers)); // Output: 9 (maximum)


// 14 задание
// split, reverse, join, toUpperCase/toLowerCase:

// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
// DESCRIPTION:
// Write a function that checks if a given string (case insensitive) is 
// a palindrome. A palindrome is a word, number, phrase, or other sequence 
// of symbols that reads the same backwards as forwards, such as madam or racecar, the date and 
// time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".

// function isPalindrome(x) {
//   x = x.toLowerCase();
//   let y = x.split('').reverse().join('');
//   y = y.toLowerCase();
//   return x === y;
// }

// console.log(isPalindrome('A man, Level, a plan, a canal – Panama')); // Output: true

// function isPalindrome(x) {
//   return x.toLowerCase().split('').reverse().join('') == x.toLowerCase()
// }
// console.log(isPalindrome('A man, Level, a plan, a canal – Panama'));


// 15 задание
// Арифметические операторы, reduce:

// https://www.codewars.com/kata/58cb43f4256836ed95000f97

// function findDifference(a, b) {
//   a = a.reduce((accumulator, currentValue) => {
//     return accumulator * currentValue;
//   }); 
//   b = b.reduce((accumulator, currentValue) => {
//     return accumulator * currentValue;
//   });
//   if (a >= b) {
//     return a - b;
//   } else {
//     return b - a;
//   }
// }

// console.log(findDifference([2, 2, 3], [5, 4, 1]));
// console.log(findDifference([9, 7, 2], [5, 2, 2]));
// console.log(findDifference([11, 2, 5], [1, 10, 8]));
// console.log(findDifference([4, 4, 7], [3, 9, 3]));

// А можно было так 
// function find_difference(a, b) {
//   return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
// }

const person = {
  name: 'Анатолий',
  age: 29,
//   family:{
//      mother: 'Елена',
//      father: 'Антон',
//      children: ['Варвара', 'Леонид']
//  } 
};

console.log(person.age);