// это понятно что блоки кода имба просто 

//  Например 
function printThanks() {
    console.log("Thank you my friend!");
    console.log("idi hanui, my friend!");
}

// или
function computePrice(cost, discount) {
    let reduction = cost*discount;
    console.log("You saved $" + reduction);
    return cost - reduction;
}

// ну это кратко и можно использовать в коде дальше, выглядит красиво и удобно. Короче заебись
// функции в JS это объекты, которые можно передавать в другие функции, возвращать из них и т.д.
// В общем функции это объекты, которые можно вызывать и передавать в другие функции

// В JS есть три типа функций:
// 1. Функции-выражения (function expressions)
// 2. Функции-объявления (function declarations)
// 3. Стрелочные функции (arrow functions)
// Функции-выражения - это функции, которые присваиваются переменной
// Функции-объявления - это функции, которые объявляются с помощью ключевого
// слова function
// Стрелочные функции - это функции, которые объявляются с помощью стрелочной
// нотации (arrow notation)

// Далее примеры функций в JS:
// Функция-выражение
const greet = function(name) {
    console.log("Hello, " + name + "!");
}       
// Функция-объявление
function add(a, b) {
    return a + b;
}           
// Стрелочная функция
const multiply = (a, b) => {
    return a * b;
}

// Примеры из курса
function displayGeeting() {
    const message = 'Hello, ${name}!';
    console.log(message);
}

// вызов функции выглядит так:
displayGeeting('Alex'); // Вывод: Hello, Alex! Соответственно, если передать 'Alex' в
// качестве аргумента функции displayGeeting, то она выведет 'Hello, Alex!'  

// Функция с параметрами и как если че сделать параметр по умолчнению
function displayGeeting(name, salution = 'Hello') {
    console.log('${salution}, ${name}!');
}

// вот пример как будет выглядить вызов функции с параметрами
displayGreeting('Christopher');
// вывод "Hello, Christopher!"

displayGreeting('Christopher', 'Hi');
// вывод "Hi, Christopher"

// Короче еще прикол
// вот есть некая функция которая принимает в свой параметр другую фукцию и это выглядит так:

function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);

// лучше так не делать тк в больших проектах будет пиздец че SOOO мы пишем эту хуйню следующим образом:

setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);


// ебучий Fat Arrow Function

// по сути функция без ключевого слова function, которая позволяет писать функции короче и понятнее:

setTimeout(() => {
    console.log('3 seconds has elapsed');
}, 3000);

// короче если функцию в коде 
// использовать только один раз, то лучше использовать стрелочную функцию,
// а если нужно использовать функцию несколько раз, то лучше использовать обычную функцию.