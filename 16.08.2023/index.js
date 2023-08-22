// 1 toFixed - используется для округления числа. Параметр служит для того чтобы понять сколько цифр ставить после .
// const number = 5.4789;
// const roundedNumber = number.toFixed(2)
// console.log(roundedNumber);

// 2 parseInt, parseFloat - переобразовать строку в целое число, число с плавающей запятой в целое число
// const stringifiedNumber = '56';
// const intNumber = parseInt(stringifiedNumber);
// console.log(intNumber);

// const stringifiedNumber2 = '56.6';
// const intNumber2 = parseFloat(stringifiedNumber2);
// console.log(intNumber2);

// 3 Math.round, Math.floor, Math.ceil, Math.trunc - используются для того чтобы округлять числа
// Math.round - стандартное округление (исходя из математических правил)
// console.log(Math.round(1.1)); // 1
// console.log(Math.round(1.5)); // 2
// console.log(Math.round(1.7)); // 2
// Math.floor - округляет всега вниз
// console.log(Math.floor(1.1)); // 1
// console.log(Math.floor(1.5)); // 1
// console.log(Math.floor(1.7)); // 1
// Math.ceil  - округляет всега вверх
// console.log(Math.ceil(1.1)); // 2
// console.log(Math.ceil(1.5)); // 2
// console.log(Math.ceil(1.7)); // 2
// Math.trunc - сбрасывает дробную часть
// console.log(Math.trunc(1.1)); // 1
// console.log(Math.trunc(1.5)); // 1
// console.log(Math.trunc(1.7)); // 1


// 4 isNaN - используется для проверки значение, является ли оно числом или нет
// console.log(isNaN('abc')); // true
// console.log(isNaN(2)); // false

// 5 Math.random - при каждом  вызвое данного метда нам возращает рандомное значение в интервале 0 1
// console.log(Math.random());
// console.log(Math.random() * 10);


// 1. Написать функцию которая генерирует рандомное количество div-ов (0-20)
// 2. У каждого div-a должены быть ранодмный задний цвет  (rgb)
// 3. Каждый div должен позицанироватся тоже рандомно

// function generic(){
//     for(let i = 0 ;i<Math.trunc(Math.random()*20);i++){
//       let div = document.createElement('div');
//       div.style.height="100px";
//       div.style.width ="100px";
//       div.style.background ='rgb(' + Math.trunc(Math.random()*255) + ',' + Math.trunc(Math.random()*255) + ',' + Math.trunc(Math.random()*255)+ ')';
//       div.style.marginLeft = Math.trunc(Math.random()*255)+"px";
//       div.style.marginTop = Math.trunc(Math.random()*255)+"px";
//       document.body.appendChild(div);
//     }
// }
// generic()




// Для работы с датами надо использовать конструкто new Date
// он нам возращает конкретно время
// const date = new Date();
// console.log({ date }); // 2023-08-16T09:24:52.850Z

// здесь мы указываем конкретную дату передовая значения
// месяц начинается с 0
// const specifiedDate = new Date(2022, 8, 15, 12, 30, 0, 0);
// console.log({ specifiedDate });

// // берем значение из даты
// const date = new Date();
// // getFullYear возращает текущий год
// const year = date.getFullYear(); // 2023
// // getMonth возращает текущий месяц
// const month = date.getMonth(); // 7
// // getDate возращает текущий день месяца
// const day = date.getDate();  // 16
// // getDay возращает текущий день недели
// const dayOfWeek = date.getDay(); // 3
// // getHours возращает текущий час
// const hours = date.getHours(); // 13
// // getMinutes возращает текущею минуту
// const minutes = date.getMinutes(); // 32
// // getSeconds возращает текущею секунду
// const seconds = date.getSeconds(); // 32


// const formatedDate = date.toISOString()
// console.log(formatedDate);



// https://learn.javascript.ru/date
// https://devhints.io/wip/intl-datetime