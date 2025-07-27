// в этом языке два сравнение это == и ===
// == сравнивает значения, а === сравнивает значения и типы они строже типо 

// лучше использовать ===

// и != и !== логика понятна и да лучше использовать !==

// логика оператора if
// пример

// const status = 200;
// // if (status === 200) {
// //     console.log('OK');
// // } else if (status === 400) {
// //     console.log('Error');    
// // } else {
// //     console.log('Unknown status');
// // }

// const message = (status === 200) ? 'OK' : 'Error';
// console.log(message); // Вывод: OK

// оператор switch
// пример
// program using switch statement
// let a = 1;

// switch (a) {
//   case 1:
//     a = "one";
//     break;
//   case 2:
//     a = "two";
//     break;
//   default:
//     a = "not found";
//     break;
// }
// console.log(`The value is ${a}`);


// оператор switch позволяет сравнивать значение переменной с несколькими вариантами
// и выполнять код в зависимости от того, какой вариант совпадает   

// логические операторы
// && - логическое И    
// || - логическое ИЛИ
// ! - логическое НЕ

// пример

// let currentMoney = 1000;
// let laptopPrice = 1200;
// let laptopDiscountPrice = laptopPrice - laptopPrice * 0.2; // 20% скидка

// if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
//     console.log('Buy new laptop');
// } else {
//     console.log("Can't afford a new laptop, yet((");
// }


// Оператор отрицания
// ! используется для инвертирования логического значения

let weatherOutside = 'sunny';
if (weatherOutside !== 'sunny') {
    console.log('Take an umbrella');
} else {
    console.log('i want to stay at home');
}

