//1
// let a += 5;
// let b *= 15;
// let c -= 3;
// let d %= 2;
// let k += a ;
// let l *=  b;
//let m *= 3 * k;

//2
//let m=3;
//m**=3;

//3
// let a = 'большой';
// if (a==='маленький'){
//  a='большой';
// }else{
//    a='маленький';
// }

// console.log(a);

//4
// let n=4;
// if (n<0){
//    n = 'меньше нуля';
// }
// else if (n==0){
//   n=1;
// }
// else {
//  n*=10;
// }

// console.log (n);

//5
// let animal;
// switch(animal){
//    case 'котик':
//    console.log('котик'); 
//    break;
//    case 'собака':
//    console.log('собака'); 
//    break;
//    case 'хомячок':
//    console.log('хомячок'); 
//    break;
//    default:
//   console.log('неизвестное науке животное');
// }

//6
//let x = 0 || 'строка';
//x = 'строка' =>  false ИЛИ true  вернул значение true

//let x = 1 && 'строка';
//x = 'строка'  => true И true  вернул последнее истинное значение

// let x = null || 1;
//x = 1 => false ИЛИ true вернул значение true 

// let x = null && 1;
// x = null => false И true  вернул значение false 

// let x = 1 && null;
// x = null =>  true И false  вернул значение false 

// let x = null || 0 || 1;
//x = 1 => false ИЛИ false ИЛИ true  вернул значение true

// let x = null && 0 && 1;
//x = 0 => false И false И true вернул последнее значение false 

//7
//let x = 1 + 2 + '3';
// x = 33 => 1+2=3 3 - строка, +перед 3 - конкатенация

//let x = 1 + 2 - '1';
//x = 2 => -1 преобразовалось из типа строки в число

//let x = '1' + 2 - 1;
//x = 11 =>  1 конкатенация 2-1=1

//let x = true + 1;
//x=2 => true преобразовался из типа boolean в тип number со значением 1. 1+1 =2

//let x = +'1' + 2;
//x = 3 => 1 преобразовалась из типа строка в тип число. 1+2=3

//let x = null + 2;
//x = 2 => null - пустое значение. 0 + 2 =2

//let x = undefined + 2;
//x = NaN => undefined - значение не присвоено. ничего + 2 = NaN

//let x = true + undefined;
//x = NaN => логическое значение + значение не присвоено = NaN