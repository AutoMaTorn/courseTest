// массив это набор данных, которые можно хранить в одной переменной
// массивы в JavaScript это объекты, которые хранятся в виде списка
// массивы могут содержать любые типы данных, включая другие массивы
// массивы можно создавать с помощью литерала массива или конструктора Array

// let arrayLength = 5;
// let arr1 = []; // создаем массив с помощью литерала массива
// let arr2 = Array(arrayLength); // создаем массив длиной 5

// console.log(arr1);
// console.log(arr2);

// это ебанный цикл while
// цикл while выполняет блок кода, пока условие истинно
let names = ['Alice', 'Bob', 'Charlie']; // массив строк
// let index = 0;
// while (index < names.length) {
//     const name = names[index];
//     console.log(name);
//     index++;
// }

// это ебанный цикл for
// цикл for выполняет блок кода заданное количество раз

// for (let index = 0; index < names.length; index++) {
//     const name = names[index];
//     console.log(name);
// }

// это ебанный цикл for of
// цикл for of позволяет перебрать элементы массива или коллекции
for (let name of names) {
    console.log(name);
}

// еще есть map 
// метод map создает новый массив, в котором каждый элемент является результатом вызова функции для каждого элемента исходного массива

const arr1 = [1, 4, 9, 16];
const doubles = arr1.map(Math.sqrt); // [1, 2, 3, 4] //
console.log(doubles); // Вывод: [1, 2, 3, 4]