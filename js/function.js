//1 Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiplay(1,2,3) = 6. Если нет ни одного аргумента вернуть ноль.

function multiply (){
   let s=1;
   if (arguments.length ==0){
      return 0;
   }
   for (let i=0; i<arguments.length; i++){
      s*= arguments[i];
   }
   return s;
}

console.log (multiply(1,2,3));

//2 С помощью ри курсе вычислить факториал числа 10.

function recursion(number){
   if (number == 0){
      return 1;
   }
   else{
      return (number * recursion(number - 1));
   }
}

console.log (recursion(10));

//3 Создать функцию, которая принимает строку и возвращает перевернутую строку ('test') = 'tset'.
let text = 'test'

function flipString (text){
   return text.split('').reverse().join('');
}

console. log (flipString(text));

//4 Написать функцию, которая проверяет является ли слово палиндромом
let word = 'yay';

function palindr (string){
  let reverseString = string.split('').reverse().join('');
  if (string === reverseString) {
     return true;
  } else {
     return false;
  }
}
console.log (palindr(word));

//5 Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменён на значение символа из юникода. ((hello) => "104 101 108 108 111")
let wordString = 'hello';

function getUniCode (string){
 let charAtString = string.split('').map(c => c.charCodeAt()).join(' ');
 return charAtString;
}

console.log (getUniCode(wordString));


//6 Написать функцию-рекурсию, которая выведет каждый символ строки в конcоль ('test') => 't' 'e' 's' 't'

let words = 'test';

function toSpell (text){
     console.log (text[0]); 
     if (text.length > 1){
      toSpell(text.substr(1));
     }
}

toSpell(words);

//7 Создать две функции и дать им осмысленные названия:  первая функция принимает массив и callback, возвращая строку из обработанного массива. вторая функция (callback) обрабатывает каждый элемент массива

let array = [1,2,3,4,5];

function  getString(array, callback){
   let resultString = '';
  strings =  array.map(function (element){
   return callback(element);
  });
   return strings.join();
}
console.log (getString (array,numberToString));

function numberToString(number) {
   number *=2;
   return String(number);
}

