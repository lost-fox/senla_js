 //Придумать название для переменных, которые описывают (let, const)
// имя (постоянное)
// фамилия (постоянное)
// возраст (может изменяться)
// информация о пользователе ( может изменяться)
 const firstName;
 const surname;
 let  age;
 let  informationPerson;

// 1 результат: undefined
//почему: значение переменной присвоено после ее вывода в консоль
console.log(test);
var test = 'string';

// 2 результат: string 2
//почему: вторым var'ом мы  переопределили значение переменной Х
var x = 'string';
var x = 'string 2';
console.log(x);

// 3  результат:  error
//почему: значение переменной присвоено после вывода в консоль
console.log(test);
let test = 'string';

// 4 результат: error
//почему: нельзя переопределять константу
const x = 'string';
const x = 'string 2';
console.log(x);

// 5 результат: 1
//почему: вторым let переопределили значение переменной num
let num = 12;
let num = 1;
console.log(num)