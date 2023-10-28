// if(){

// }else{

// }

// if(4>5){ //4>5 => false
//     console.log('true');
// }else{
//     console.log('false');
// }
// const value = 7

// if (value > 5) { // 7> 5 => true
//     console.log('4>5');
// } else if (value > 6) {
//     console.log('4>6');
// } else if (value > 3) {
//     console.log('4>3');
// } else {
//     console.log('else');
// }

// const value = '';
// if (value) { //0 => false
//     console.log('if');
// } else {
//     console.log('else');
// }


// condition ? exmple 1 : example 2


// const result = 7 > 6 ? 'більше' : 'меньше';

// let result;

// if (7 > 6) {
//     result = 'більше';
// } else {
//     result = 'меньше';
// }

// console.log(result);



// const result = 10 + 5;
// console.log(result);
// console.log(testValue);
// const value = 5;
// if (value === 1) {
//     console.log('one');
// } else if (value === 2) {
//     console.log('two');
// } else if (value === 5) {
//     console.log('Good result');
// } else {
//     console.log("default")
// }

// switch (value) {
//     case 1:
//         console.log('one');
//         break
//     case 2:
//         console.log('two');
//         break
//     case 5:
//         console.log('Good result');
//         break
//     default:
//         console.log("default")
// }

// const a = 'name';
// switch (a) {
//     case 'age':
//         console.log('one');
//         break;
//     case 'name':
//         console.log('two');
//         break;
//     case 'city':
//         console.log('Good result');
//         break;
//     default:
//         console.log("default")
// }


// const let

// var

// 1 Глобальна
// 2 Блочна
// 3 Функціональна


// 
// Блочна
// {

// }


// Функціональна
// function(){

// }



// const a = 15;

// if (true) {
//     console.log(a);
// }

// if(true){
//     var b = 22;
// }
// console.log(b);

// function foo() {
//     console.log(a);
//     var b = 22;
// }
// console.log(b);


// в глобальні
// let a = 15;

// if (true) {
//     // Блочна
//     let a = 1;
//     a = 25;
// }

// console.log(a);

// глобальна
// let a = 15;

// if (true) {
//     // звернення до ініціалізації
//     a = 25;
//     let a = 1;
// }

// console.log(a);

// глобальна
// let a = 10;


// if (true) {
//     // блочна
//     a = 15;
//     if (true) {
//         a = 25
//     }
// }
// console.log(a);

// if(true){
//     // блочна
//     let a = 15;
//     if(true){
//         a = 25
//     }
// }
// console.log(a);

// if(true){
//     // блочна
//     let a = 15;
//     if(true){
//         a = 25
//     }
//     console.log(a);
// }


// let a = 15;


// if (true) {
//     // блочна
//     a = 15;
//     if (true) {
//         let a = 25
//     }
// }
// console.log(a);

// let b = 25;

// if (true) {
//     // блочна
//     let a = 15;
//     b = 44;
//     if (true) {
//         a = 25
//         b = 31
//     }
//     a = 44
//     console.log(b);
// }
// console.log(a);





// for (let i = 0; i < 5; i+=1){
//     console.log(i);
// }
//  12345
// const str = 'hello world';
//          //  01234
// for(let i = 0; i < str.length; i+=1){
//     console.log(str[i]); //0,1,2,3,4,5,6
// }



// while(true){
//     console.log('hello world');
// }


// const str = 'hello world';


// let i = 0;
// while (i < str.length) {
//     if(str[i] === 'w'){
//         console.log('yes');
//         break;
//     }
//     console.log('no', str[i]);
//     i += 1;
// }

// const str = 'hello world';
// let i = 15;
// do {
//     if (str[i] === 'w') {
//         console.log('yes');
//         break;
//     }
//     console.log('no');
//     i += 1;
// } while (i < str.length)





// Example 1 - Введення користувача та розгалуження

// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const value = prompt("Яка офіційна назва JavaScript?");
// if (value === 'ECMAScript') {
//     alert("Правильно!")
// } else {
//     alert("Не знаєте? ECMAScript!")
// }


// Example 2 - Відображення часу (if...else)
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const hours = 14;
// const minutes = 1;
// let timestring;

// if (minutes) {
//     console.log(`${hours} г. ${minutes}хв.`);
// } else {
//     console.log(`${hours} г.`);
// }



// Example 3 - Розгалуження
// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь в консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі повинен бути рядок "Це негативне число".

// const userInput = Number(prompt('Введіть число'));
// console.log( typeof userInput);
// if (!userInput) { // 0 =>! + false => true
//     console.log("Це нуль");
// } else if (userInput > 0) {
//     console.log("Це позитивне число");
// } else {
//     console.log("Це негативне число");
// }

// const userInput = Number(prompt('Введіть число'));
// if (userInput % 2) {
//     console.log("Не парне");
// } else {
//     console.log('Парне');
// }


// console.log(userInput % 2 ? "Не парне" : 'Парне');

// if (0) { //=> false

// } else {
//     console.log('в мене нуль');
// }

// if (!0) { //=> false
//     console.log('в мене нуль');
// }


// Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них. В протилежному випадку у консолі повинна бути сума значення b та числа 512.

const a = 120;
const b = 180;
// if (a > 100 && b > 100) {
//     if (a > b) {
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// } else {
//     console.log(b + 512);
// }
// if (a > 100 && b > 100) {
//     console.log(a > b ? a : b);
// } else {
//     console.log(b + 512);
// }

// Example 5 - Форматування посилання (endsWith)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.

// let link = 'https://my-site.com/about';
// // // Пиши код нижче за цей рядок
// if(!link.endsWith('/')){
//     link +='/';
// }
// // // Пиши код вище за цей рядок
// console.log(link);



// Example 6 - Форматування посилання (includes та логічне «І»)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site". Використовуй конструкцію if...else.

// let link = 'https://somesite.com/about';
// // // Пиши код нижче за цей рядок
// if(!link.endsWith('/') && link.includes("my-site")){
//     link +='/';
// }
// // // Пиши код вище за цей рядок
// console.log(link);



// Example 7 - Форматування посилання (тернарний оператор)
// Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.

// let link = 'https://my-site.com/about';
// // if (link.includes('my-site') && !link.endsWith('/')) {
// //     link += '/';
// // }
// console.log(link.includes('my-site') && !link.endsWith('/') ? link += '/' : link);



// Example 8 - if...else та логічні оператори
// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.

// Якщо значення змінної hours:

// менше 17, виводь рядок "Pending"
// більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
// більше 24 , виводь рядок "Overdue"
// const hours = 19;

// if (hours < 17) {
//     console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
//     console.log("Expires");
// } else {
//     console.log('Overdue');
// }


// Example 9 - Дедлайн здачі проекту (if...else)
// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"
// const daysUntilDeadline = 2;
// // // Пиши код нижче за цей рядок
// if (!daysUntilDeadline) {
//     console.log("Сьогодні");
// } else if (daysUntilDeadline === 1) {
//     console.log("Завтра");
// } else if (daysUntilDeadline === 2) {
//     console.log("Післязавтра");
// } else {
//     console.log("Дата у майбутньому");
// }



// Example 10 - Дедлайн здачі проекту (switch)
// Виконай рефакторинг коду задачі номер 5 використовуючи switch.

// const daysUntilDeadline = -1;

// // if (daysUntilDeadline === 0) {
// //   console.log('Сьогодні');
// // } else if (daysUntilDeadline === 1) {
// //   console.log('Завтра');
// // } else if (daysUntilDeadline === 2) {
// //   console.log('Післязавтра');
// // } else {
// //   console.log('Дата у майбутньому');
// // }

// if (daysUntilDeadline >= 0) {
//     switch (daysUntilDeadline) {
//         case 0:
//             console.log('Сьогодні');
//             break;
//         case 1:
//             console.log('Завтра');
//             break;
//         case 2:
//             console.log('Післязавтра');
//             break;
//         default:
//             console.log('Дата у майбутньому');
//     }
// } else {
//     console.log("Друже ти проспав");
// }



// Example 11 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

// const max = 100;
// const min = 20;
// !min => 20 => true => !true=> false
// // 1 ''
// // 2 0
// // 3 null
// // 4 undefined
// // 5 NaN
// // 6 false


// const max = 100;
// const min = 20;

// for (let i = min; i >= min && i <= max; i += 1) {
//     if (!(25 % 5)) { //25 % 5 => 0 => false => !false => true
//         console.log(i);
//     }
// }






// Example 12 - Введення користувача та розгалуження
// Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.

// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:
// Якщо введено пароль "Я адмін", то вивести рядок "Доброго дня!"
// Інакше виводити рядок "Невірний пароль"

// const login = prompt("Тут має бути ЛОГІН");
// if(!login){
//   console.log("Скасовано");  
// }else if(login === "Адмін"){
//     const password = prompt("Тут має бути ПАРОЛЬ")
//     console.log(password === "Я адмін" ? "Доброго дня!" : "Невірний пароль");
// }else{
//     console.log("Я вас не знаю");
// }
// console.log(login);
// const password = prompt()


// function add(a, b) {
//     const result = a + b;
//     return result;
// }

// console.log(add(2, 4));

// const str = 'М\'який'
// console.log(str);




//             0    1       2      3        4
// const array = [1, 'Hello', null, true, [1, 2, 3]];
//             1    2       3      4        5
// console.log(typeof array);
// console.log(Array.isArray(array));
// Array.isArray(array) - повертає true/false в залежності від того чи ми працюємо з масивом чи ні
// console.log(array[3]);
// const first = array[0];
// console.log(first);
// const last = array[array.length - 1];
// console.log(array.length);
// console.log(last);

// for (let i = 0; i < array.length; i += 1) {
//     const item = array[i];
//     if (Array.isArray(item)) {
//         for (let j = 0; j < item.length; j+=1){
//             console.log(item[j]);
//         }
//         continue;
//     }
//     console.log(array[i]);
// }
// const array = [1, 'Hello', null, true, [1, 2, 3]];

// for(let item of array){
//     // console.log(item);
//     if(typeof item === 'string'){
//         item = false
//     }
// }
// console.log('for of',array);

// for(let i = 0; i< array.length; i+=1){
//     if(typeof array[i] === 'string'){
//         array[i] =false;
//     }
// }
// console.log('for',array);



// const array = [1, 'Hello', null, true, [1, 2, 3]];

// let i = 0;
// while (i < array.length) {
//     if (typeof array[i] === 'string') {
//         array[i] = false;
//     }
//     i += 1;
// }

// console.log(array);


// 

// let value = 1;
// let test = value;
// value='hello';

// console.log('value',value);
// console.log('test',test);



// const array = [1, 2, 3, 4, 5];
// const copy = array;
// array.push(6, 7);
// copy.push(8,9)
// console.log(array === copy);
// console.log(array);
// console.log(copy);


// console.log(1 === 1);
// console.log('hello' === 'hello');
// console.log([1, 2, 3] === [1, 2, 3]);


// let number = 1;
// number +=15;
// console.log(number);


// let array = [1, 2, 3];
// // array ='string';

// array.push(4)
// // array.pop();
// // array.length = 10;
// console.log(array);

// Перерва до 21.00


// 
// const str = 'Hello world I`m learning JS';
// const arr = str.split('-');
// console.log(arr);

// // const result = arr.reverse().join(' ')


// const result = str.split(' ').reverse().join(' ')
// console.log(str);
// // console.log(arr);
// console.log(result);





// const arr = ['hello', 'wolrd'];
// const idx = arr.indexOf('wolrd');

// if (arr.indexOf('wolrd') === -1) {
//     console.log("NO");
// } else {
//     console.log('yes');
// }
// console.log(idx);
// console.log(arr.includes('wolrd'));

// if (arr.includes('wolrd')) {
//     console.log('YES');
// } else {
//     console.log('NO');
// }
//      3           4
// const arr = ['hello', 'wolrd'];
// push pop
// arr.push(1, 'a',[1,2])
// arr.pop()
// arr.pop()
// arr.pop()
// console.log(arr);

// shift unshift

//      0   1      2
// arr.unshift(1, 'a', [1, 2])
// // arr.shift();
// // arr.shift();
// // arr.shift();
// // console.log(arr);

// // slice
// const result = arr.slice(1,3);
// console.log('result',result);
// console.log('arr',arr);

// const arr = ['hello', 'world', 'js'];
// // splice

// // arr.splice(1, 1, 'from', 'react', 'node')
// // console.log(arr);
// const idx = arr.indexOf('world');
// const result = arr.splice(idx, 1, 'from')
// console.log(arr);
// console.log('result',result);


// concat

// const arr = [1, 2, 3];
// const arr1 = [4, 5];
// const arr2 = [6, 7];
// const result = arr2.concat(arr, arr1)
// console.log(arr);
// console.log(result);


// -----------------------------------//

// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.
// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-рол');
// console.log(genres.shift());
// genres.unshift('Country', 'Reggae')
// console.log(genres);
// console.log(genres[genres.length - 1]);
// const genres = ['Jazz', 'Blues'];
// genres.splice(genres.length, 0, 'Рок-н-рол');
// console.log(genres.splice(0, 1, 'Country', 'Reggae'));
// console.log(genres);

// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = '8 11';
// const arr = values.split(' ');
// const first = Number(arr[0]);
// const last = Number(arr[arr.length - 1]);
// const result = first * last;
// console.log(result);


// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//     console.log(`${i + 1} - ${fruits[i]}`);
// }

// for (let i = 0, n = 1; i < fruits.length; i += 1, n+=1) {
//     console.log(`${n} - ${fruits[i]}`);
// }


// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// let names = 'Jacob,William,Solomon,Artem';
// let phones = '89001234567,89001112233,890055566377';
// names = names.split(',');
// phones = phones.split(',');
// for (let i = 0; i < names.length, i < phones.length; i += 1){
//     console.log(`${names[i]} - ${phones[i]}`);
// }


// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// const string = 'Welcome to the future';

// arr.pop();
// arr.shift();

// const result = arr.join(' ');
// console.log(result);

// const result = string.split(' ').slice(1, -1).join(' ');

// console.log(result);

// const arr = string.split(' ');
// const test = arr.push('1234')
// console.log(test);
// console.log(arr);

// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future';
// const result = string.split('').reverse().join('');
// console.log(result);


// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// langs.sort((a,b) => a.localeCompare(b));
// ['c++', 'haskel', 'javascript', 'php', 'python', 'ruby']
// console.log(langs);

// нажаль наш варіант був не вірний 😥😥😥

// for (let i = 0; i < langs.length; i += 1) {
//     if (langs[0] > langs[i]) {
//         const result = langs.splice(i,1)[0];
//         langs.unshift(result)
//     }
// }
// console.log(langs);


// Вірні варіанти
// 1 метод бульбашка 
// https://www.youtube.com/watch?v=-_0dD2shabQ
// http://xn--80adth0aefm3i.xn--j1amh/%D0%BF%D1%83%D0%B1%D0%BB%D1%96%D0%BA%D0%B0%D1%86%D1%96%D1%8F/21
// for (let i = 0; i < langs.length; i++) {
//     for (let j = 0; j < langs.length; j++) {
//         if (langs[j] > langs[j + 1]) {
//             const item = langs[j];
//             langs[j] = langs[j + 1];
//             langs[j + 1] = item;
//         }
//     }
// }
// console.log(langs);


// Сучасний варіант
// langs.sort((a,b) => a.localeCompare(b))
// console.log(langs);







// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const numbers = [94, 2, 17, 94, 1, 23, 37];
// let min = numbers[0]; // undefined
// for (const value of numbers) {
//     if (value < min) {
//         min = value;
//     }
// }
// console.log(min); // 1

// const arr = [1, 2, 3] + [4, 5];
// console.log(arr);
// let x = 7;
// let y = null;
// let a = 9;

// console.log(a || x && y);




// https://codeguida.com/post/199
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from?retiredLocale=uk





const arr = [1, 2, 3, 4];
const arr1 = [5, 6, 7, 8];
const arr2 = [8, 9, 10, 11]

// sum(arr)
// sum(arr1)
// sum(arr2)

// function sum(item){
//     for (let i = 0; i < item.length; i += 1) {
//         item[i] = item[i] * 2;
//     }
//     console.log(item);
// }


// declaration
// function name(){

// }

// expression
// sum(arr)
// sum(arr1)
// sum(arr2)
// const sum = function (item) {
//     for (let i = 0; i < item.length; i += 1) {
//         item[i] = item[i] * 2;
//     }
//     console.log(item);
// }



// function add() {
//     let sum = 0;
//     // const arr = Array.from(arguments);
//     const arr = [...arguments]

//     console.log(arguments);
//     console.log(arr);
//     // for (let i = 0; i < arguments.length; i += 1) {
//     //     sum += arguments[i]
//     // }
//     for(const value of arguments){
//         sum +=value
//     }
//     console.log(sum);
//     // console.log(val + val1 + val2 + val3 + val4 + val5);
// }
// add(1, 2, 3, 4, 5, 6)
// add(1, 2, 3, 4)
// add(1, 2, 3, 4, 5);







// function add() {
//     let sum = 0;
//     for (const value of arguments) {
//         sum += value;

//     }
//     return sum;

// }
// const response = add(1, 2, 3, 4, 5, 6);
// console.log(response);
// // add(1, 2, 3, 4)
// // add(1, 2, 3, 4, 5);




// function largeNumber() {
//     let sum = 0;
//     for (const value of arguments) {
//         sum += value;
//         if (sum > 10) {
//             return true;
//         }
//     }
//     return false;

// }
// const response = largeNumber(1, 2, 3);
// console.log(response); //6 false
// console.log(largeNumber(1, 2, 3, 4)); //10 false
// console.log(largeNumber(1, 2, 3, 4, 5, 6)); // 15 true



// function add(val, val1 = 0) {
//     console.log("val", val);
//     console.log("val1", val1);
//     return val + val1

// }
// console.log(add(3, 4));
// console.log(add(5, 12));
// console.log(add(11));

// let a = 10

// function foo() {
//     a = 15
// }
// foo()
// console.log(a);



// let a = 10

// function foo() {
//     let a = 15;
//     a = 45;
// }
// foo()
// console.log(a);


// let a = 10

// function foo() {
//     a = 45;
//     let a = 15;
// }
// foo()
// console.log(a);



// let a = 10

// function foo(a) {
//     a = 45
// }
// foo(a)
// console.log(a);

// const test = [1, 2, 3];

// function foo(arr) {
//     arr.splice(0, 1)
// }

// foo(test)
// console.log(test);


// function createString(name, year) {
//     // const result = add(year);
//     return `${name} years ${add(year)}`
// }
// console.log(createString('Mango', [1, 2, 3]));

// function add(arr) {
//     let sum = 0;
//     for (const num of arr) {
//         sum += num;
//     }
//     return sum;
// }


// function foo() {
//     boo()
// }
// foo()

// function boo() {
//     foo()
// }


// Перерва до 21.05





















// Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після крапки;

// function calcBMI(weight, height) {
//     weight = Number(weight.replace(',', '.'));
//     height = Number(height.replace(',', '.'));

//     // return Number((weight / Math.pow(height, 2)).toFixed(1));
//     return Number((weight / height ** 2).toFixed(1))
// }

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

// const num = 2.56
// console.log(num.toFixed(1));


// Example 2 - Найменше з чисел
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// function min(a, b) {
//     // if (a > b) {
//     //     return b;
//     // }

//     // return a;

//     return a > b ? b : a
// }




// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1






// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//     dimensions = dimensions.split(' ');

//     // const first = Number(dimensions[0])
//     // const second = Number(dimensions[1])

//     // return first * second;

//     return Number(dimensions[0]) * Number(dimensions[1])
//     // console.log(second);
// }

// console.log(getRectArea('8 11'));
// console.log(getRectArea('46 11'));
// console.log(getRectArea('8 112'));

// Example 4 - Логування елементів
// Напиши функцію logItems(items), яка отримує масив та використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення у форматі <номер елемента> - <значення елемента>. Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для індексу 2 - "Poly" виведе 3 - Ajax.

// function logItems(items) {
//     for (let i = 0, num = 1; i< items.length; i+=1, num+=1){
//         console.log(`${num} - ${items[i]}`);
//     }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// Example 5 - Логування контактів
// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача. У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// function printContactsInfo(names, phones) {
//     names = names.split(',')
//     phones = phones.split(',')
//     console.log(phones);
//     for (let i = 0; i < names.length, i < phones.length; i += 1) {
//         console.log(`${names[i]} - ${phones[i]}`);
//     }
// }



const arr11 = ['a','b','c'];
const idx = arr11.indexOf('a');
if(!!~idx){
    console.log('YES');
}else{
    console.log('NO');
}
console.log(idx);
console.log(!!-(idx + 1));
console.log(!!~idx);
console.log(Boolean(~idx));


// printContactsInfo(
//     'Jacob,William,Solomon,Artem',
//     '89001234567,89001112233,890055566377,890055566300'
// );


// Example 6 - Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.

// function findLargestNumber() {
//     // const arr = Array.from(arguments)
//     const arr = [...arguments];
//     let max = arr[0];

//     for (const num of arr) {
//         if (num > max) {
//             max = num
//         }
//     }

//     return max
// }

// console.log(findLargestNumber(2, 17, 94, 1, 23, 37)); // 94
// console.log(findLargestNumber(49, 4, 7, 83, 12)); // 83



// function findLargestNumber() {
//     let max;
//     for (const num of arguments) {
//         if (typeof num === 'number') {
//             max = num;
//             break;
//         }
//     }
//     for (const num of arguments) {
//         if (typeof num === 'number') {
//             if (num > max) {
//                 max = num
//             }
//         } else {
//             max = findLargestNumber(...num)
//             //[1, 143], 5, 7
//             max = findLargestNumber(...num)// 143
//             //[1, 143] => 1,143
//             max = findLargestNumber(...num)
//         }
//     }
//     return max
// }
// console.log(findLargestNumber([[1, 143], 5, 7], 6, 7, 899, 88, 123))



// Example 7 - Середнє значення
// Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// function calAverage() {
//     let total = 0;
//     for (const num of arguments) {
//         total += num;
//     }

//     return total / arguments.length
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2


// Example 8 - Форматування часу
// Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.


// function formatTime(minutes) {
//     const hours = Math.floor(minutes / 60);
//     minutes = minutes % 60;
//   return `${hours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')}`
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"




// Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(course) {
    if (courses.includes(course)) {
        return 'Ви вже маєте такий курс';
    }

    courses.push(course)
}



// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse('CSS')); // 'Ви вже маєте такий курс'

// function removeCourse(course) {
//     if (courses.includes(course)) {
//         const idx = courses.indexOf(course)
//         courses.splice(idx, 1);

//         return
//     }

//     return "Курс із таким ім'ям не знайдено"
// }
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
// !!~courses.indexOf(course); 0 => false
//        -1 => true
// -(0 + 1) -1 => true
//  -(-1 + 1) -0 => false
//    courses.includes(course)
// !!  === Boolean()
// console.log(!!~1);

// function removeCourse(course) {
//     const idx = courses.indexOf(course);
//     if (!!~idx) {
//         courses.splice(idx, 1);
//         return;
//     }
//     return "Курс із таким ім'ям не знайдено"
// }


// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse('Vue'));; // 'Курс із таким ім'ям не знайдено'




// function updateCourse(oldCourse, newCourse) {
//     const idx = courses.indexOf(oldCourse);
//     if (!!~idx) {
//         courses.splice(idx, 1, newCourse);
//         return;
//     }

//     return "Курс із таким ім'ям не знайдено";

// }




// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// console.log(updateCourse('Express', 'NestJS'));



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze


// const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false
//     }
// }

// console.log(user.languages.React_Native);
// console.log(user['languages']["React Native"]);

// for (const key in user){
// console.log(user.key);
//     console.log(key);
//     console.log(user[key]);
//     // console.log(user[key]);
// }
// const test = 3;
// const test2 = 45;
// const value = 'start'
// const value2 = 'End'
// const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false
//     },
//     // [value + value2] : 'some value',
//     result : test + test2,

// };
// console.log(user.result);

// user.age = 29;
// user.age += 1

// user.city = 'VN';
// console.log(user);
// // console.log(user.age);


// delete user.city
// console.log(user);




// const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false
//     }
// };


// Object.freeze(user);
// user.asdfwesgfasdfasz = 'dasdgvsdfdafsed';
// user.age = 100;
// console.log(user);





// const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false
//     }
// };
// // Object.freeze(user);

// const user2 = Object.create(user);
// user2.age = 33
// console.log(user2);
// console.log(user);




// for (const key in user2) {
//     if (user2.hasOwnProperty(key)) {
//         console.log('Own', user2[key]);
//     } else {
//         console.log('All', user2[key]);
//     }
// }

// console.log('All', user2[key]);
// const user = {
//     score: false
// }

// if (user.hasOwnProperty('score')) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

// if ('score' in user) {
//     console.log('yes');
// } else {
//     console.log('no');
// }


// if (user.score) {
//     console.log('yes');
// } else {
//     console.log('no');
// }


const user = {
    name: 'Artem',
    age: 28,
    languages: {
        html: false,
        css: false,
        js: true,
        ReactNative: false,
    },
    sayHello() {
        console.log(`My name ${this.name}`);
    },
    iKnow() {
        // const keys = Object.keys(this.languages);
        // const values = Object.values(this.languages);
        // const entries = Object.entries(this.languages);
        const keys = Object.keys(this);
        for(const key of keys){
            if(typeof this[key] === 'function'){
                continue;
            }else{
                console.log(key);
            }
        }
        console.log(keys);
        // console.log(values);
        // console.log(entries);
        // for (const key of keys) {
        //     console.log(key);
        //     if (this.languages[key]) {
        //         // console.log(key);
        //     }
        // }
        // console.log(keys);
        // for(const key in this.languages){
        //     if(this.languages[key])
        //     console.log(key);
        // }
    }
}
user.iKnow()
// const user2 = Object.create(user);
// user2.name = 'Den';
// console.log(user2);
// user2.sayHello()
// user.sayHello()







// Example 1 - Основи об 'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об 'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.skills = {
//     run: true
// }

// user.mood = 'happy';
// user.hobby = 'skydiving';
// // user['premium'] = false;
// const key = 'premium';
// user[key] = false;
// console.log(user);
// for (const key in user) {
//     console.log(user[key]);
// }
// const keys = Object.keys(user);
// for(const key of keys){
//     console.log(user[key]);
// }
// console.log(keys);


// Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let sum = 0;
// const values = Object.values(salaries);
// console.log(values);
// for(const value of values){
//     sum += value
//     // console.log(value);
// }
// console.log(sum);
// for (const key in salaries) {
//     console.log(key);
//     sum += salaries[key]
//     console.log(salaries[key]);
// }
// console.log(sum);





// Example 3 - Масив об 'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об 'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта


// const stones = [{
//         name: 'Смарагд',
//         price: 1300,
//         quantity: 4
//     },
//     {
//         name: 'Діамант',
//         price: 2700,
//         quantity: 3
//     },
//     {
//         name: 'Сапфір',
//         price: 400,
//         quantity: 7
//     },
//     {
//         name: 'Щебінь',
//         price: 200,
//         quantity: 2
//     },
// ];

// function calcTotalPrice(stones, stoneName) {

//     for (const stone of stones) {
//         // if (stone.name === stoneName) {
//         //     result = stone.price * stone.quantity;
//         //     break;
//         // }
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity;
//         }
//         console.log(stone.name);
//     }
//     return 'Empty';
//     // return result;
// }
// console.log(calcTotalPrice(stones, 'asdas'));

// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };
// Object.freeze(Transaction)
// // Transaction.DEPOSIT = 'asdnasjkdnjasdjn'
// // console.log(Transaction);
// // /*
// //  * Кожна транзакція це об'єкт із властивостями: id, type та amount
// //  */

// const account = {
//     // Поточний баланс рахунку
//     balance: 0,

//     // Історія транзакцій
//     transactions: [{
//         id: 16,
//         amount: 145,
//         type: 'deposit'
//     }, ],

//     /*
//      * Метод створює та повертає об'єкт транзакції.
//      * Приймає суму та тип транзакції.
//      */
//     createTransaction(amount, type) {
//         return {
//             id: Date.now(),
//             amount,
//             type
//         }
//     },

//     /*
//      * Метод, що відповідає за додавання суми до балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій
//      */
//     deposit(amount) {
//         if (amount <= 0) {
//             return 'Error'
//         }
//         const item = this.createTransaction(amount, Transaction.DEPOSIT)
//         this.balance += amount
//         this.transactions.push(item)
//     },

//     /*
//      * Метод, що відповідає за зняття суми з балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій.
//      *
//      * Якщо amount більше ніж поточний баланс, виводь повідомлення
//      * про те, що зняття такої суми не можливе, недостатньо коштів.
//      */
//     withdraw(amount) {
//         if (amount > this.balance || amount <= 0) {
//             return 'недостатньо коштів';
//         }
//         const item = this.createTransaction(amount, Transaction.WITHDRAW)
//         this.transactions.push(item);
//         this.balance -= amount;

//     },

//     /*
//      * Метод повертає поточний баланс
//      */
//     getBalance() {
//         return this.balance
//     },

//     /*
//      * Метод шукає та повертає об'єкт транзакції по id
//      */
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (transaction.id === id) {
//                 return transaction
//             }
//         }
//         return 'Empty';
//     },

//     /*
//      * Метод повертає кількість коштів
//      * певного типу транзакції з усієї історії транзакцій
//      */
//     getTransactionTotal(type) {
//         let sum = 0;
//         for (const transaction of this.transactions) {
//             if (transaction.type === type) {
//                 sum += transaction.amount
//             }
//         }

//         return sum;
//     },
// };
// account.deposit(1);
// account.deposit(1231);
// account.deposit(1431);
// account.withdraw(123);
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// console.log(account);
// // Перерва до 21:15


// const arr = ['a', 'b', 'c']
// const idx = arr.indexOf('asdas');

// function foo() {
//     if (idx === -1) {
//         console.log("немає");
//         return;
//     }
//     arr.splice(idx, 1)
// }
// foo()

// console.log(idx);
// console.log(arr);


// function countup(n) {
//     if (n < 1) {
//       return [];
//     } else {
//   const countArray = countup(n - 1);
//       countArray.push(n);
//       return countArray;
//     }
//   }
//   console.log(countup(5));

// const arr = [1, 2, 3];
// const [, _, third] = arr;

// console.log(_);
// console.log(third);


// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// };
// const name = 'value';
// const userName = 'Some name'
// const {age: userAge , name : nameUser} = user;

// console.log('age',userAge);
// console.log(name);
// console.log(userName);
// console.log(nameUser);
// const age = user.age;
// const html = user.skills.html;


// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false,
//         cars: {
//             audi: 'A6',
//             bmw: 'x5'
//         }
//     },
//     languages : [{html : true}, {css: false}]
// };

// const {languages : [skillHtml, css]} = user
// const {html} = skillHtml
// console.log(html);
// console.log(css);



// const skills = 123
// const {
//     name,
//     skills: {
//         js,
//         css : sass,
//         cars: {
//             audi
//         }
//     }
// } = user;

// console.log(sass);


// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false,
//         cars: {
//             audi: 'A6',
//             bmw: 'x5'
//         }
//     },
//     languages: [{
//         html: true
//     }, {
//         css: false
//     }]
// };
// for(const {html} of user.languages){
//     console.log(html);
// }



// const users = [{
//     name: 'User1',
//     language: 'html',
//     car: {
//         audi: 'A6',
//         bmw: 'X5'
//     }
// }, {
//     name: 'User2',
//     language: 'css',
//     car: {
//         audi: 'A8',
//         bmw: 'X6'
//     }
// }, {
//     name: 'User3',
//     language: 'js',
//     car: {
//         audi: 'A7'
//     }
// }]
// а чому на кар нема конфлікту?



// for(const {name, car : {audi : car}} of users){
//     console.log(car);
// }
// for (const {
//         name,
//         cars: {
//             audi = "None",
//             bmw = 'None'
//         }
//     } of users) {
//     console.log(audi, bmw);
// }



// function foo({name = "No name", car: {bmw = 'None'} = {}} = {}) {
//     console.log(name,bmw);
//     ///
// }
// foo({
//     name: 'User1',
//     language: 'html',
//     car: {
//         audi: 'A6',
//         bmw: 'X5'
//     }

// })
// foo({
//     name: 'User2',
//     language: 'html',
// })
// foo()


// const arr1 = [12, 22, 3, 14, 45, 16, 57];
// // // spread
// // const min = Math.min(...arr1)
// // console.log(min);
// //    12, 22, 3, 14, 45, 16, 57
// const arr2 = [...arr1];
// // arr2.splice(0, 1)
// console.log(arr1 === arr2);

// // // rest
// const [first, second, ...props] = arr1;
// console.log('props', props);
// console.log(first);
// // for(let prop of props){
// //     prop *= first
// // }
// for (let i = 0; i < props.length; i += 1) {
//     props[i] *= first
// }
// console.log(props);



// function foo(first, second, ...args) {
//     console.log(args);
// }

// foo(1, 2, 3, 4, 5, 6)
// const arr1 = [12, 22, 3, 14, 45, 16, 57];

// function foo(first, second, ...rest) {
//     console.log(arguments);
//     console.log(first, second,rest);
// }
// foo(...arr1)






// Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.


// JS Doc /** */
/**
 * Розраховуємо індекс маси тіла людини
 * @param {Object} obj
 * @returns {Number} BMI
 */
// function calcBMI({
//     weight,
//     height
// }) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // // Було
// // console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI({
//     weight: '88,3',
//     height: '1.75'
// }));
// console.log(calcBMI({
//     weight: '68,3',
//     height: '1.65'
// }));
// console.log(calcBMI({
//     weight: '118,3',
//     height: '1.95'
// }));


// Example 2 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.


// /**
//  * 
//  * @param {Object} obj 
//  */
// function printContactsInfo({names, phones}) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     for (let i = 0; i < nameList.length; i += 1) {
//         console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// }


// printContactsInfo({
//     names: 'Jacob,William,Solomon,Artemis',
//     phones: '89001234567,89001112233,890055566377,890055566300'
// }, );


// Example 3 - Глибока деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function getBotReport({
//     companyName,
//     repairBots,
//     defenceBots
// }) {
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Було
// console.log(getBotReport({
//     companyName: 'Cyberdyne Systems',
//     repairBots: 150,
//     defenceBots: 50
// }));


// Example 4 - Деструктуризація
// Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.


// function getStockReport({companyName, stock}) {
//     // let total = repairBots + defenceBots;
//     let total = 0
//     for (const value of Object.values(stock)) {
//         total += value;
//     }
//     return `${companyName} has ${total} items in stock`;
// }

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         }
//     }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         }
//     })); // "Belacci has 35 item in stock"
// Example 5 - Операція spread
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// function createContact(partialContact) {
//     return {
//         id: generateId(),
//         createdAt: new Date(),
//         list :"default",
//         ...partialContact,
//     }
// }

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

// Example 6 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю De, замість firstName та lastName.

// function transformUsername({firstName, lastName, ...props}) {
// return {
//     fullName: `${firstName} ${lastName}`,
//     ...props
// }
// }

// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     }),
// );
// // {
// //     id: 1,
// //     fullName: 'Jacob Mercer',
// //     email: 'j.mercer@mail.com',
// //     friendCount: 40,
// // }
// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@hotmail.com',
//         friendCount: 20,
//     }),
// );

// const products = [{
//     name: 'apple',
//     qty: 4,
//     key : "Test"
// }]

// function getAllPropValues(propName) {
//     // Change code below this line
//     let valuesPropName = [];

//     for (const product of products) {
//         for (const key in product) {
//             // console.log(key);
//             if (key === propName) {      //name
//                 console.log(product[key]);
//                 console.log(product.key);
//                 valuesPropName.push();
//                 valuesPropName.push();
//             }
//         }
//     }
//     return valuesPropName;
// }
// getAllPropValues('name')



// const firstBook = {
//     title: "The Last Kingdom",
//     coverImage: "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//     title: firstTitle,
//     coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// const secondBook = {
//     title: "Сон смішної людини",
//     coverImage: "https://via.placeholder.com/640/480",
// };

// const {
//     title: secondTitle,
//     coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480


// const products = [{
//         name: 'Radar',
//         price: 1300,
//         quantity: 4
//     },
//     {
//         name: 'Scanner',
//         price: 2700,
//         quantity: 3
//     },
//     {
//         name: 'Droid',
//         price: 400,
//         quantity: 7
//     },
//     {
//         name: 'Grip',
//         price: 1200,
//         quantity: 9
//     },
// ];


// function getAllPropValues(propName) {
//     const newArr = [];

//     for (const product of products) {
//         propName in product ? newArr.push(product[propName]) : null;

//     }
//     return newArr;
// }
// console.log(getAllPropValues('price'));


// console.log(typeof name);
// const subStr = 1234;
// console.log(subStr);
// console.log(subStr);
// let test;
// console.log(test);


// http://xn--80adth0aefm3i.xn--j1amh/%D0%BF%D1%83%D0%B1%D0%BB%D1%96%D0%BA%D0%B0%D1%86%D1%96%D1%8F/21


// function foo(a, b) {
//     console.log(a, b);
// }

// console.log(foo);

// foo(5, 10)


// function foo(callback){
//     console.log("callback",callback);
//     callback(10)
// }

// function logger(value){
//     console.log(value);
// }

// // const numb = 10;
// // console.log(numb);
// console.log('logger',logger);
// foo(logger)

// const arr = [2, 6, 1, 7, 3]

function add(arr) {
    let total = arr[0];

    for (let i = 1; i < arr.length; i += 1) {
        total += arr[i]
    }

    return total
}

// console.log(add(arr));


// function sum(arr) {
//     let total = arr[0];

//     for (let i = 1; i < arr.length; i += 1) {
//         total *= arr[i]
//     }

//     return total
// }

// console.log(sum(arr));

// function division(arr) {
//     let total = arr[0];

//     for (let i = 1; i < arr.length; i += 1) {
//         total /= arr[i]
//     }

//     return total
// }


// function each(arr, callback) {
//     let total = arr[0]
//     for (let i = 1; i < arr.length; i += 1) {
//         total = callback(total, arr[i])
//     }

//     return total
// }
// console.log(each(arr, add));
// console.log(each(arr, sum));
// console.log(each(arr, division));

// function add(first, second) {
//     return first + second
// }

// function sum(first, second) {
//     return first * second
// }

// function division(first, second) {
//     return first / second
// }



// const arr = [2, 6, 1, 7, 3];


// arr.forEach(function (_, idx) {
//     console.log(idx);
// })



// console.log(arr);
//item -ітеруємий елемент
//idx -індекс поточного елемента
//arr - масив який ітеруємо

// arr.forEach(function (item) {
//     // console.log(`work witn number ${item}`);
//     // arr[i] = item * 2
//     // item *= 2
//     // console.log(item);
// })

// console.log(arr);


// const Array = {
//     forEach(){

//     }

// }
// console.log(arr);


// function each(arr, callback) {
//     let total = arr[0];
//     for (let i = 1; i < arr.length; i += 1) {
//         total = callback(total, arr[i])
//     }
//     return total
// }

// console.log(each(arr, add));

// console.log(each(arr, sum));

// console.log(each(arr, division));


// function add(first, second) {
//     return first + second
// }

// function sum(first, second) {
//     return first * second
// }

// function division(first, second) {
//     return first / second
// }

// declaration
// foo()
// function foo(){

// }


// expression
// const boo = function(){

// }
// boo()

// arrow
// arguments - відсутній
// const foo = (...rest) => {
// console.log(rest);

// };
// foo(1, 2, 3, 4, 5)
// foo(1, 2, 3, 4, 21, 532, 5324, 5)





// const arr = [2, 6, 1, 7, 3]
// const add = (first, second) => first + second;
// const multiply = (first, second) => first * second;
// const multiply = (first, second) => {
//     return first * second
// };
// const division = (first, second) => first / second;

// function each(arr, callback) {
//     let total = arr[0];
//     for (let i = 1; i < arr.length; i += 1) {
//         total = callback(total, arr[i])
//     }
//     return total
// }

// console.log(each(arr, add));
// console.log(each(arr, multiply));
// console.log(each(arr, division));

// function foo() {

// }
// const boo = () => {}
// const user = {
//     userName: 'Test user',
//     say() {
//         console.log(`Hello ${this.userName}`);
//     },
//     sayHello: () => {
//         console.log(`Hello ${this.userName}`);
//     }
// }
// user.say();
// user.sayHello()

// Перерва до 21.20



// Example 1 - Коллбек функції
// Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
// // Рішення

// function createProduct(obj, callback){
//     const product = {
//         id: Date.now(),
//         ...obj
//     }
//     callback(product)
//     console.log(product);
// }

// function logProduct(obj){
// console.log(`Product ${obj.name}`);
// }

// function logTotalPrice({price, quantity}){
// console.log(`Total price ${price * quantity}`);
// }
// createProduct({
//     name: '🍎',
//     price: 30,
//     quantity: 3
// }, logProduct);
// createProduct({
//     name: '🍋',
//     price: 20,
//     quantity: 5
// }, logTotalPrice);



// Example 2 - Коллбек функції
// Додайте в об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

// // Рішення
// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: 'Jacob',
//     balance: 400,

//     withdraw(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`TRANSACTION LIMIT ${TRANSACTION_LIMIT}`)
//             return
      
//         } else if (this.balance < amount) {
//             onError('Not enough in the account');
//             return
//       }

//         this.balance -= amount;
//         onSuccess(`Transaction complete ${amount}, balance ${this.balance}.`)
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`TRANSACTION LIMIT ${TRANSACTION_LIMIT}`);
//             return;
//         } else if (amount <= 0) {
//             onError(`Nice try Bro 😂`);
//             return;
//         }

//         this.balance += amount;
//         onSuccess(`Added ${amount}, balance ${this.balance}`)

//     }
// };

// function handleSuccess(message) {
//     console.log(`✅ Success! ${message}`);
// }

// function handleError(message) {
//     console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);



// Example 3 - Коллбек функції
// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

// // Рішення
// function each(array, callback) {
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );


// Example 4 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const createProduct = (partialProduct, callback) => {
//     const product = {
//         id: Date.now(),
//         ...partialProduct
//     };
//     callback(product);
// }

// const createProduct = (partialProduct, callback) => callback({
//     id: Date.now(),
//     ...partialProduct
// });


// const logProduct = product => console.log(product.name);
// const logTotalPrice = ({
//     price,
//     quantity
// }) => console.log(price * quantity);

// createProduct({
//     name: '🍎',
//     price: 30,
//     quantity: 3
// }, logProduct);
// createProduct({
//     name: '🍋',
//     price: 20,
//     quantity: 5
// }, logTotalPrice);


// Example 5 - Стрілочні функції
// Виконайте рефакторинг колбеків за допомогою стрілочних функцій.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: 'Jacob',
//     balance: 400,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//         } else if (amount > this.balance) {
//             onError(`Amount can't exceed account balance of ${this.balance} credits`);
//         } else {
//             this.balance -= amount;
//             onSuccess(`Account balance: ${this.balance}`);
//         }
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//         } else if (amount <= 0) {
//             onError(`Amount must be more than 0 credits`);
//         } else {
//             this.balance += amount;
//             onSuccess(`Account balance: ${this.balance}`);
//         }
//     },
// };

// const handleSuccess = message => console.log(`✅ Success! ${message}`);


// const handleError = message => console.log(`❌ Error! ${message}`);


// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);



// Example 6 - Інлайн стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// function each(array, callback) {
//     const newArr = [];
//     for (const el of array) {
//         newArr.push(callback(el));
//     }
//     return newArr;
// }

// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([64, 49, 36, 25, 16], value =>Math.sqr(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));



// Example 7 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// const logItems = arr => arr.forEach((item, idx) => console.log(`${idx + 1} - ${item}`))
// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);


// Example 8 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function calсulateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

// const calсulateAverage = (...arr) => {
//     let total = 0;
//     arr.forEach(value => total += value)

//     return total / arr.length
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2


// map
// const arr = [1, 2, 3, 4, 5, 6, 7];

// const result = arr.map((item, idx, arr) => item * 2);

// const result = arr.map((item, idx, arr) => {
//     item * 2
// });
// console.log(result);
// console.log(arr);
// const arr = [1, 2, 3, 4, 5, 6, 7]
// const result = arr.map(item => {
//     if (!(item % 2)) {
//         return item * 2
//     }
//     return item
// })

// const result = arr.map(item => !(item % 2) ? item * 2 : item)

// console.log(result);




// function customMap(arr, callback) {
//     const result = []
//     for (let i = 0; i < arr.length; i += 1) {
//         const item = arr[i];
//         result.push(callback(item, i, arr));
//     }
//     return result;
// }
// console.log(customMap(arr, foo));

// function foo(item, idx, arr) {
//     if (!(item % 2)) {
//         return item * 2
//     }
//     return item

// }

// const arr = [{
//     name: 'User1',
//     skills: ['html', 'css']
// }, {
//     name: 'User2',
//     skills: ['js', 'react']
// }, {
//     name: 'User3',
//     skills: ['node.js', 'express']
// }]

// const result = arr.map(item => item.skills.map(skill => skill))
// console.log(result);



// flatMap
// const result = arr.flatMap(item => item.skills)
// console.log(result);



// find
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const arr = [{
//     name: 'User1',
//     skills: ['html', 'css']
// }, {
//     name: 'User2',
//     skills: ['js', 'react']
// }, {
//     name: 'User3',
//     skills: ['node.js', 'express']
// }]
// const result = arr.find(item => item > 100)
// const result = arr.find(item => item.skills.includes('js'))
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const arr = [{
//     name: 'User1',
//     skills: ['html', 'css']
// }, {
//     name: 'User2',
//     skills: ['js', 'react']
// }, {
//     name: 'User3',
//     skills: ['node.js', 'express']
// }]



// findIndex
// // const result = arr.findIndex(item =>item.skills.includes('node.js'))
// const result = arr.findIndex(item =>item.skills.includes('avadakedavra'))
// console.log(result);



// filter
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const result = numbers.filter((item) => !(item % 2))
//     .map((item, _, arr) => {

//         console.log(arr);
//         return item * 2
//     })
// console.log(result);


// every
// const numbers = [22, 1, 2, 3, 4, 5, 6, 7];
// const number2 = [2, 4, 6, 8, 10]
// const result = numbers.every(item => !(item % 2))
// console.log(result);

// const arr = [{
//     name: 'User1',
//     age: 18
// }, {
//     name: 'User2',
//     age: 12
// }, {
//     name: 'User3',
//     age: 19
// }]


// const result = arr.every(user => user.age >= 18)
// console.log(result);

// some
// const numbers = [1, 3, 4, 5, 6, 7];
// const numbers2 = [1, 23, 43, 7, 9];


// const result = numbers2.some(item => {
//     console.log(item);
//     return !(item % 2)
// })
// console.log(result);





// sort

// const numbers = [11, 4, 9, 3, 54, 23, 12]
// const result = numbers.sort((a, b) => b - a)
// console.log('result', result);
// console.log('numbers', numbers);

// const result = [...numbers].sort((a, b) => b - a)
// console.log('result',result);
// console.log('numbers',numbers);

// const numbers = [11, 4, 9, 3, 54, 23, 12]
// numbers.sort()
// console.log(numbers);


// const str = ['s', 'a', 'f', 'B', 'A', 'S']
// const result = str.sort((a, b) => a - b)
// const result = str.sort()
// const result = str.sort((a,b) => b.localeCompare(a))
// console.log(result);


// const arr = [{
//     name: 'Den',
//     age: 18
// }, {
//     name: 'Slava',
//     age: 12
// }, {
//     name: 'Max',
//     age: 19
// }]

// arr.sort((a, b) => a.name.localeCompare(b.name))
// console.table(arr);


//reduce
// const numbers = [11, 4, 9, 3, 54, 23, 12]
// const result = numbers.reduce((acc, item) => {
//     console.log('acc', acc);
//     console.log('item', item);
//     console.log('----------------------------------');
//     return acc + item;
// }, 0)
// const numbers = [11, 4, 9, 3, 54, 23, 12];
// const result = numbers.reduce((acc, item) => {
//     console.log('acc', acc);
//     console.log('item', item);
//     acc.push(item * 2)
//     return acc
// }, [])
// const numbers = [11, 4, 9, 3, 54, 23, 12];
// const result = numbers.reduce((acc, item) => {
//     console.log('acc', acc);
//     console.log('item', item);
//     return acc.push(item * 2)
// }, [])



// Перерва до 21.26 - 27






// Колекція об'єктів для всіх прикладів з автомобілями
const cars = [{
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true
},
{
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true
},
{
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false
},
{
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true
},
{
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false
},
{
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false
},
{
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true
},
{
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true
},
{
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true
},
{
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false
}
];
// Example 1 - Метод map
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// const getModels = cars => {
// return cars.map(car => car.model)
// };
// // getModels(cars)
// console.table(getModels(cars));
// Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map(item => ({
//         ...item,
//         price : item.price * (1 - discount),
//     }))
// };

// console.log(makeCarsWithDiscount(cars, 0.2));
// console.log(makeCarsWithDiscount(cars, 0.4));

// Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }
// const filterByPrice = (cars, threshold) => {
//     return cars.filter(({price}) => price < threshold)
// };

// console.log(filterByPrice(cars, 30000));
// console.log(filterByPrice(cars, 25000));

// Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.
// {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }
// const getCarsWithDiscount = cars => {
//     return cars.filter(({onSale}) => onSale)
// };
// const getCarsWithDiscount = cars => cars.filter(({onSale}) => onSale)

// console.table(getCarsWithDiscount(cars));

// Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.
// {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }
// const getCarsWithType = (cars, type) => cars.filter(({type : carType}) => carType === type);

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));


// const getFord = (cars, carPrice) => cars.filter(({
//     price
// }) => price < carPrice).filter(({
//     make
// }) => make === "Honda")


// const getFord = (cars, carPrice, carName) => cars.filter(({
//     make,
//     price
// }) => price < carPrice && make === carName)
// console.log(getFord(cars, 25000, 'Ford'));
// Example 6 - Метод find
// {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }
// const getCarByModel = (cars, model) => cars.find(({
//     model: carModel
// }) => model === carModel);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));
// Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення властивості amount.
// {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }
// const sortByAscendingAmount = cars => cars.sort((a, b) => a.price - b.price);
// const sortByAscendingAmount = cars => [...cars].sort(({price:a}, {price :b}) => a - b);
// console.log(cars);
// console.table(sortByAscendingAmount(cars));
// Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

// const sortByDescendingPrice = cars => [...cars].sort((a,b)=> b.price - a.price);
// console.log(cars);
// console.table(sortByDescendingPrice(cars));
// Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.
// {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }
// const sortByModel = (cars, order) => {
//     if (order === 'asc') {
//         return [...cars].sort((a, b) => a.model.localeCompare(b.model))
//     } else {
//         return [...cars].sort((a, b) => b.model.localeCompare(a.model))
//     }
// };
// const sortByModel = (cars, order) => [...cars].sort(({model: a},{model: b}) => order === 'asc'
// ? a.localeCompare(b)
// : b.localeCompare(a));
// const sortByModel = (cars, order) => [...cars].sort(({model: a},{model: b}) => a.localeCompare(b))
// const sortByModel = (cars, order) => [...cars].sort(({model: a},{model: b}) => b.localeCompare(a)))
// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));
// Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).
// {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }
// const getTotalAmount = cars => cars.reduce((acc, {amount}) => acc + amount,0);

// console.log(getTotalAmount(cars));
// Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.
// {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }
// const getModelsOnSale = cars => cars.filter(({onSale}) => onSale).map(({model}) => model);

// const getModelsOnSale = cars => cars.filter(({onSale}) => onSale).map(({make, model}) => `${make} ${model}`);

// console.log(getModelsOnSale(cars));



// Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.


/**
* Get cars on sale and sort them
* @param {Array} cars - Array with object
* @returns {Array} - sorted array on sale
*/
// const getSortedCarsOnSale = cars => cars.filter(({onSale}) => onSale).sort((a,b) => a.price - b.price);
// console.log('cars',cars);
// console.log(getSortedCarsOnSale(cars));


// const str = 'duaguidgasuidgauisdhasudasdfhsgvfakhfugduashc';
// const result = str.split('').reduce((acc, item) => {
//     // acc.hasOwnProperty(item) ? acc[item] += 1 : acc[item] = 1;
//     // item in acc ? acc[item] += 1 : acc[item] = 1;

//     const keys = Object.keys(acc)
//     keys.includes(item) ? acc[item] += 1 : acc[item] = 1;

//     return acc
// }, {})
// console.log(result);
// // {
//     d: 7,
//     u: 7,
//     a: 7
// }



// const arr = ['Honda', 'Audi', 'BMW', "Skoda", "Ford", 'Renault']

// Загальна кількість авто 6:
// 1 Honda
// 2 Audi


// 6 Reno

// const arr = [];

// Вибачте авто немає
// function logCars(arr) {
//     const result = arr.reduce((acc, car, idx) => {
//         // console.log(`${idx+1} - ${car}\n`);
//         return acc + `${idx+1} - ${car}\n`
//     }, arr.length ? `Загальна кількість авто ${arr.length}: \n` : `Вибачте авто немає 😥 ${foo()}`);
//     console.log('------------------------------------------------------------------');
//     return result
// }

// function foo(){
//     return 'Hello from foo function'
// }
// console.log(logCars(['Honda', 'Audi', 'BMW', "Skoda", "Ford", 'Renault']));
// console.log(logCars([]));



// const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];
// const count = fruitBasket.reduce((acc, fruit) => {
//     // {
//         // "banana" : 1
//         // "cherry" : 3
//     // }
//     acc[fruit] = (acc[fruit] || 0) + 1;// якщо ключа ще не було створено
//     // acc[fruit] = (0) + 1;// => 1
//     // acc[fruit] = (acc[fruit] || 0) + 1;якщо ключ вже існує
//     // acc[fruit] = acc[fruit]  + 1;
//     return acc;
// }, {})
// count // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

// const user = {}
// user.age


// const result = 2 === 2 ? 'Yes' : 'NO'
// console.log(result);

// const str = 'asdaskfjnaskjfnmaeklsmflasfasdsapoldwa';
// const obj = abc => [...abc].reduce((acc, item) => {
//     // console.log(acc);
//     // acc.hasOwnProperty(item) ? (acc[item] += 1) : (acc[item] = 1);   
//     // acc[item] = (acc[item] || 0) + 1
//     return acc;
// }, {});


// console.log(obj(str));

// const allCourses = ['html', 'js', "css", 'js']
// const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index);
//                                     //   'html'   0                     0                      0
//                                     //    "js"    1                     1                      1 
//                                     //    "css"   2                     2                      2 
//                                     //    'js'    3                     1                      3



// declaration expression
// function foo(){

// }

// const foo = function () {}



// arrow function

// const foo = () => {}

// 'use strict'
// function foo(){
//     console.log(this);
// }

// foo();

// const boo = function (){
//     console.log(this);
// }

// boo()


// const arrow = () => {
//     console.log(this);
// }
// arrow()


// const objA ={
//     name : 'User name',
//     nickName(){
//         console.log(this);
//     }
// }

// objA.nickName()

// const objB ={
//     name : 'User name',
//     nickName: () => {
//         console.log(this);
//     }
// }

// objB.nickName()



// const objA ={
//     name : 'User name',
//     skills:{
//         mySkill : 'html',
//         nickName(){
//             console.log(this);
//         }
//     }

// }

// objA.skills.nickName()


// const objA = {
//     name: 'User name',
//     skills: {
//         mySkill: 'html',
//         someValue: {
//             value: 10,
//             nickName() {
//                 console.log(this);
//             }
//         }
//     }
// }

// objA.skills.someValue.nickName()

// 'use strict'
// const objB = {
//     name: 'User name',
//     skills: {
//         mySkill: 'html',
//         someValue: {
//             value: 10,
//             foo() {
//                 console.log('foo', this);

//                 function nickName() {
//                     console.log('nickName', this);
//                 }
//                 nickName()
//             }
//         }
//     }
// }

// objB.skills.someValue.foo()


// const objA ={
//     age: 22,
//     myAge(){
//         console.log(this);
//     }
// }
// objA.myAge()


// const objA ={
//     age: 22,
//     myAge: () => {
//         const test = ()=> {
//             console.log(this);
//             test()
//         }
//     }
// }
// objA.myAge()


// const objA = {
//     age: 22,
//     myAge() {
//         const test = () => {
//             console.log(this);
//             test()
//         }
//     }
// }
// objA.myAge()

// 'use strict'
// const objA = {
//     age: 22,
//     myAge() {
//         function test() {
//             console.log(this);

//         }
//         test()
//     }
// }
// objA.myAge()



// const objA = {
//     age: 22,
//     skilss: {
//         skill: ['html', "css"],
//         foo() {
//             const boo = () => {
//                 console.log(this);
//             }
//             boo()
//         }
//     }
// }
// objA.skilss.foo()








// const objA = {
//     age: 22,
//     myAge() {
//         const test = () => {
//             console.log(this);
//         }
//         test()
//     }
// }


// const objB = {
//     age:12,
//     someFunction: objA.myAge
// }
// objB.someFunction()




// const objA = {
//     age: 22,
//     myAge() {
//         const test = () => {
//             console.log(this);
//         }
//         test()
//     }
// }

// const objB = {
//     age:12,
//     someFunction: objA.myAge
// }



// const objc = {
//     age:13,
//     somecrazy: objB.someFunction
// }
// objc.somecrazy()


// 'use strict'
// const objA = {
//     name: "A",
//     foo:()=>{
//         console.log(this);
//     }
// }
// objA.foo()
// const win = {

// }

// function foo(){
//     const a = this.test;
// }

// foo();



// call
// apply
// bind




// const objA = {
//     name: 'A',
//     //   10, 20 30 40
//     myAge(a, b, c, d) {
//         console.log(this, a, b, c, d);
//         return 'Some value'
//     }
// }

// // objA.myAge(22, 44)

// const objB = {
//     name: 'B',
//     // myAge: objA.myAge
// }
// const objC = {
//     name: 'C',
//     // myAge: objA.myAge
// }
// objA.myAge.call(objB, 1, 2)
// objA.myAge.call(objC, 10, 20)
// objA.myAge.apply(objB, [1, 2])
// const fromBackEnd = [10, 20, 30, 40];
// const str1 = objA.myAge.call(objC, 10, 20, 30, 40);
// const str = objA.myAge.call(objC, ...fromBackEnd);
// console.log(str);
// objA.myAge.apply(objC, fromBackEnd);





// const objA = {
//     name: 'A',
//     myAge(a, b, c, d) {
//         // console.log(arguments);
//         console.log(this, a, b, c, d);
//         return 'Some value'
//     }
// }

// const objB = {
//     name: 'B'
// }

// const objC = {
//     name: 'C'
// }

// const result = objA.myAge.bind(objB);
// const result2 = objA.myAge.bind(objC);
// objA.myAge()
// result(999, 888)
// result2(111, 222, 333, 444)
// result2(111, 222, 333, 444)
// result2(111, 222, 333, 444)

// result()
// result()





// ПЕРЕРВА ДО 21-27






// Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//     stones: [{
//             name: 'Emerald',
//             price: 1300,
//             quantity: 4
//         },
//         {
//             name: 'Diamond',
//             price: 2700,
//             quantity: 3
//         },
//         {
//             name: 'Sapphire',
//             price: 1400,
//             quantity: 7
//         },
//         {
//             name: 'Ruby',
//             price: 800,
//             quantity: 2
//         },
//     ],
//     calcTotalPrice(stoneName) {
//         const {
//             price,
//             quantity
//         } = this.stones.find(({
//             name
//         }) => name === stoneName)
//         return price * quantity;
//     },
// };
// const shop2 = {
//     stones: [{
//             name: 'Щебінь',
//             price: 1300,
//             quantity: 4
//         },
//         {
//             name: 'Пісок',
//             price: 2700,
//             quantity: 3
//         },
//     ],
// }
// console.log(chopShop.calcTotalPrice.call(shop2, 'Щебінь'));
// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600


// Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//     return this.contacts
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );



// Example 3 - Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.
// const calculator = {
//     read(a, b) {
//         this.a = a;
//         this.b = b ?? 0;
//     },
//     add() {
//         return (this.a ?? 0) + (this.b ?? 0);
//     },
//     mult() {
//         return (this.a ?? 1) * (this.b ?? 1);
//     }
// };
// calculator.read(3)
// console.log(calculator.mult());
// // console.log(calculator.add());

// console.log(calculator);



// https://javascriptpatterns.vercel.app/patterns/design-patterns/factory-pattern

// console.log(typeof NaN); //number
// Number.isNaN()
// console.log(typeof null); //object

// console.log(null > 0); //false
// console.log(Number(null));
// console.log(null < 0); //false
// console.log(Number(null));
// console.log(null == 0); //false
// console.log(null >= 0); //true
// console.log(Number(null));
// console.log(Math.min() > Math.max()); //true
// console.log((!+[] + [] + ![]).length); //9
// Самостійне опрацювання
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.

// class Toggle {
//   constructor({ isOpen = false } = {}) {
//     this.on = isOpen;
//   }
//   toggle(){
//     this.on = !this.on;
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group("firstToggle");
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd("firstToggle");

// const secondToggle = new Toggle();
// console.group("secondToggle");
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd("secondToggle");

// const arr = [1, 1, 1, [1, 1, [1, 1]]];

// function sum(arr) {
//   let total = 0;
//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       total += sum(item);
//     } else {
//       total += item;
//     }
//   }
//   return total
// }
// console.log(sum(arr));

// const arr = [
//   1,
//   1,
//   1,
//   [
//     1,
//     1,
//     [
//       1,
//       1,
//       [
//         1,
//         1,
//         1,
//         [1, 1, [1, 1, [1, 1, 1, [1, 1, [1, 1, [1, 1, 1, [1, 1, [1, 1]]]]]]]],
//       ],
//     ],
//   ],
// ];

// function sumArray(arr) {
//   let sum = 0;
//   arr.forEach((elem) => {
//     if (typeof elem === "number") {
//       sum += elem;
//     } else if (Array.isArray(elem)) {
//       sum += sumArray(elem);
//     }
//   });
//   return sum;
// }

// console.log(sumArray(arr));

// function foo(item) {
//   const test = 10;
//   const userName = "Artem";
//   const value = item > test;
// const fn = function (age) {
//     const str = `Hello my name ${userName} I\`m ${age} yers old`;
//     console.log(test);
//     console.log(value);
//     return str;
//   }
//   const fn2 = function (age) {
//     const str = `Привіт мене звати ${userName} мені ${age} років`;
//     console.log(test);
//     console.log(value);
//     return str;
//   };
//   return value
//     ? fn
//     : fn2
// }

// const result = foo(11);
// const example = result(28)
// console.log(example);
// const arr = [1,2,3,4];
// arr.forEach(item => {
//     if(item > 0){
//     //    continue;
//     }
//     console.log('After if');
// })

// function padEnd(str) {
//     console.log(this);
//     console.log(str);
//     // return this.value + str
//     return this.value.padEnd(this.value.length + str.length, str)
//   }

//   console.log(padEnd.call({value: '^.'}, '^'));

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//     console.log(initialValue);
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     // this.value += str;
//     this.value = this.value.padEnd(this.value.length + str.length, str);
//   }
//   padStart(str) {
//     // console.log(typeof this.value, typeof str);
//     // this.value = str + this.value;
//     this.value = this.value.padStart(this.value.length + str.length, str);
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
// function foo(a,b) {
//     console.log(this); // window
//     return a * b;
// }

// const result = foo.bind(null, 2);
// console.log(result(2));
// Можемо розібрати ? Яким буде результат виконання (2,4,NaN, помилка ?)

// const arr = [14, 45, 13, 55, 213, 11];

// for(const num of arr){
//     // if(num < 50){
//     //     // continue;
//     //     // break;
//     //     console.log(num);
//     // }
//     console.log(num);
// }

// const foo = function(){
//     console.log('expression');
// }
// foo()
// boo()
// function boo(){
//     console.log('declaration');
// }
// console.log(Math.min() > Math.max())