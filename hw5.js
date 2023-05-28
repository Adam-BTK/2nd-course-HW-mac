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

let arr = 'abcdef';
arr.split('').reverse().join('');

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