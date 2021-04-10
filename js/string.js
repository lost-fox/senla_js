let string = 'string test example'

//1 Получить первую и последнюю букву строки
console.log (string[0]);
console.log (string[string.length-1]);

//2 Сделать первую и последнюю буквы в верхнем регистре
let stringUp = string.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1,w.length-1)+ w.charAt(w.length-1).toUpperCase() ).join(' ');

console.log(stringUp);

//3 Найти положение слова string в строке
console.log (string.indexOf('string'));

//4 Найти положение второго пробела
console.log( string.indexOf(' ', string.indexOf(' ') + 1));

//5 Получить строку со 2-ого символа длинной 6 букв
console.log(string.substr(1,6));

//6 Получить строку с 1 по 7 символ
console.log (string.slice(0,6));

//7 Получить из ух переменных типа number x = 20, y = 21 получить строку '2021' 
let x=20, y=21;
console.log(x.toString()+y.toString());