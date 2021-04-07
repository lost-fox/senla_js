 // 1 В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре"
 let str= 'Я стану крутым программистом';
 let upLetter='';

   for (i = 0; i < str.length; i++) {
   if (str[i-1] === " ") {
      upLetter += str[i].toUpperCase();
   } else {
      upLetter += str[i];
   }
   }
console.log (upLetter);

//2 Вычислить факториал числа 9 (факториал числа - это произведение всех натуральных чисел от 1 до n включительно. например, 2! = 21 или 6! = 654321) .

let number = 9;
let factorial = 1;

for (let i= 1; i<=number; i++){
   factorial *=i;
}

console.log (factorial);

//3 Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"

let stringCounting = 'Просветление наступит через: ';
let finish = 10;

for (let i=finish; i>=1; i--){
   stringCounting += i + ", ";
}

console.log (stringCounting.slice(0,-2));

//4 Найти и вывести в консоль все нечетные числа от 1 до 20 включительно.

for (let i=1; i<=20; i++){
   if (i % 2 == 1){
      console.log(i);
   }
}

//5 На основе строки "теперь я мастер циклов javascript" создать новую строку, где первые буквы каждого слова будут в верхнем регистре и будут отсутствовать пробелы. 

let string = 'теперь я мастер циклов javascript';
let string_new = '';

string = string[0].toUpperCase() + string.substring(1)
for (i = 0; i < string.length; i++) {
   if (string[i-1] === " ") {
   string_new += string[i].toUpperCase();
    } 
    else {
    string_new += string[i];
      }
   }
console.log(string_new.split(' ').join('')) ;  