// ---------------------------------------------Конструкторы---------------------------------------------

// 1. Конструкторы это специальные функции, которые предназчаются для создании новых экземпляров объектов.
// 2. Использования конструкторов удобно для создания множества объектов с одинаковой структурой.
// 3. Лучше использовать когда у вас есть потредбность для создания множества объектов с той же самой структурой но с разными значениями


function User (name,surname,age){
    // что в функции User создаем с помощю контекста значения name, surname, age которые равны параметрам которые пришли
    this.name = name;
    this.surname = surname;
    this.age = age
}
const user1 = new User("Igor", "Ivanov", 32);
const user2 = new User("Alexandr", "Smith", 56);
const user3 = new User("Anna", "Nikula", 22);
const user4 = new User("ALexandr", "Nikolayev", 45);



// function Car (model, price, country){
   
//     this.model = model;
//     this.price = price;
//     this.country = country;
    
// }
// const car1 = new Car("Toyota", 20000, "Japan");
const car2 = new Car("BMW", 50000, "Germany");
const car3 = new Car("Priora", 10000, "Russia");

console.table(car1);
console.table(car2);
console.table(car3);


//Nikita - создать конструктор машины со значениями марка, цена, страна изготовителя





//1. Написать конструктор Car с полями марка, скорость
// 2. Создать методы для увеличения и уменьшения скорости
// 3. При вызов метода увеличения скорости повышать скорость автомобиля на 10
// 4. При вызов метода уменьшения скорости уменьшить скорость на 5


// Samir
// function Car(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;


//     this.accelerate = function () {
//         this.speed += 10;
//     };

//     this.decelerate = function () {
//         this.speed -= 5;
//     };
// }

// const myCar = new Car("Toyota", 60);

// myCar.accelerate();
// myCar.decelerate();


// console.log(`Марка: ${myCar.brand}, Скорость: ${myCar.speed}`);


// Antony
// function Car({ marka, speed }) {
//     this.marka = marka;
//     this.speed = speed
// } (function () {
//     this.upSpeed = function () {
//         console.log(`Текущяя скорость: ${this.speed + 10}`)
//         return this
//     }
//     this.downSpeed = function () {
//         console.log(`Текущяя скорость:${this.speed = -5} `)
//         return this
//     }
// }.call(Car.prototype))

// const car1 = new Car({
//     marka: 'bmw',
//     speed: 30
// })


// console.log(car1.upSpeed());


// Regina
// function Car(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//     this.increaseSpeed = function () {
//         this.speed += 10;
//     };
//     this.decreaseSpeed = function () {
//         this.speed -= 5;
//     };
// }
// let myCar = new Car("Toyota", 50);
// console.log(myCar.speed); // 50
// myCar.increaseSpeed();
// console.log(myCar.speed); // 60
// myCar.decreaseSpeed();
// console.log(myCar.speed); // 55


// Vazgen
// function Car(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//     this.speed += 10
// }

// Car.prototype.break = function () {
//     this.speed -= 5
// }
// const bmw = new Car("BMW", 200);
// bmw.accelerate() // 210
// bmw.accelerate() // 220
// bmw.accelerate() // 230
// bmw.break() // 225
// console.log({bmw});