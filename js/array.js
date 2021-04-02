//1 Используя функцию, найти последний элемент массива, не изменяя его.
// let myArray = [1,4,5,4,3,2,1,4,6,7];

// console.log (myArray[myArray.length-1]);

//2 Создать такую функцию, которая принимала бы массив [1,3,6], а возвращала новый массив с дублированными элементами [1,3,6,1,3,6].

// let startArray = [1,3,6];
// let finishArray = [];

// finishArray = startArray.concat(startArray);

// console.log (finishArray);

//3 Создать такую функцию, которая принимала бы любое число, а возвращала массив, заполненный числами от 1 до n.

// let number = 4;
// let myArray = [];

// for (i=0; i<10; i++){
//    myArray[i] = Math.random()* (number-1) + 1;
// }

// console.log (myArray);

//4 Создать такую функцию, которая принимала бы любое число массивов и удаляла из каждого массива первый элемент, а возвращала массив оставшихся значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])"
// let array = [[1, 2, 3],
//             ["x", "y", "z"]];

//  array.map(function(array){array.shift()});

// console.log (array);
//5 Создать функцию, которая упорядочит буквы в строке "кеважбигёзд" в алфавитном порядке и возвратит строку в обратном порядке ("кизжёедгвба").

// let string = ['к','е','в','а','ж','б','и','г','ё','з','д'];

// string.sort(function(a, b) {
//    return a.localeCompare(b);
// });

// console.log (string.reverse());

//6 Используя функцию, отсортировать массив [5, 2, -1, 6, 9, -9, 3] в обратном порядке.

// let myArray = [5, 2, -1, 6, 9, -9, 3];

// myArray.sort((a,b) => b - a);

// console.log (myArray);

//7 Создать функцию, которая принимает 3 аргумента: любой произвольный массив начальный номер элемента в массиве конечный номер. Ваша функция должна вернуть новый массив, состоящий из элементов исходного массива согласно аргументам (с-по) (getNewArray(“а, б, в, г, д, е”, 1,3) → [б, в, г]), не изменяя исходный массив и не используя циклы.

// let myArray = ['а','б','в', 'г', 'д', 'е'];
// let startNumber = 1;
// let endNumber = 3;

// function chooseElement (a,b,c){
//    return a.slice(b,c+1);
// }

// console.log (chooseElement (myArray, startNumber, endNumber)) ;

// 8 Удвоить элементы массива, не используя циклы.
// let myArray = [1,2,3,4,5,6];

// let myNewArray = [];

// myNewArray = myArray.map(el => el * 2);

// console.log (myNewArray);

//9 Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы.
// let myArray = [1,2,3,4,5];
// let myNewArray = myArray.splice(1,2);

// console.log (myArray);

//10 Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и на их место вставить “три” и “четыре” соответственно.
// let myArray = [1,2,3,4,5];
// myArray.splice(1,2,'три', 'четыре');

// console.log (myArray);

//11 Вставить в произвольный массив любое значение после второго элемента.
// let myArray = [1,2,3,4,5];

// myArray.splice(2, 0, 1,2,3,4);

// console.log (myArray);

//12 Отсортировать массив массив таким образом, чтобы вначале шли массивы с наименьшей длиной. Создать копию произвольного массив"

// let array =  [
//           [1,2,3],
//           [1,2],
//           [1,2,3,4,5],
//           [2],
//           [1,2,3,4]
//          ];

// let copyArray = array.slice();

// array.sort((a,b) => a.length - b.length);

// console.log (copyArray);
// console.log(array);

//13 Отсортировать массив объектов по возрастающему количеству ног животных: [ {kind: "tarantula", info: {legs: 8, eyes: 8}}, {kind: "french bulldog", info: {legs: 4, eyes: 2}}, {kind: "human", info: {legs: 2, eyes: 2}}, {kind: "lobster", info: {legs: 10, eyes: 2}},]

// let array = [ {kind: "tarantula", info: {legs: 8, eyes: 8}},
//               {kind: "french bulldog", info: {legs: 4, eyes: 2}},
//               {kind: "human", info: {legs: 2, eyes: 2}},
//               {kind: "lobster", info: {legs: 10, eyes: 2}}];

// array.sort((a,b) => a.info.legs - b.info.legs);

// console.log(array);

//14 Написать функцию, которая принимает массив услуг и два числа, представляющих собой время исполнения услуг, а также возвращает все услуги, находящиеся в диапазоне времени исполнения и отсортированные от меньшего времени исполнения к большему. const services = [ {service: "service1", executionTime: 56}, {service: "service2", executionTime: 97}, {service: "service3", executionTime: 23}, {service: "service4", executionTime: 65}, {service: "service5", executionTime: 2}, {service: "service6", executionTime: 73}, {service: "service7", executionTime: 82}, {service: "service8", executionTime: 19}, {service: "service9", executionTime: 33}, {service: "service10", executionTime: 42}, ] Например, filterServices(services, 20, 60).

const services = [
  { service: "service1", executionTime: 56 },
  { service: "service2", executionTime: 97 },
  { service: "service3", executionTime: 23 },
  { service: "service4", executionTime: 65 },
  { service: "service5", executionTime: 2 },
  { service: "service6", executionTime: 73 },
  { service: "service7", executionTime: 82 },
  { service: "service8", executionTime: 19 },
  { service: "service9", executionTime: 33 },
  { service: "service10", executionTime: 42 },
];

let startTime = 20;
let endTime = 60;

function filterServices(array,start,end){
  let arrayFilterServices = [];

  for (let i=0; i<array.length; i++){
     if ((array[i].executionTime>start) && (array[i].executionTime<end)){
      arrayFilterServices.push (array[i])
  }
  }
  
  arrayFilterServices.sort((a,b) => a.executionTime - b.executionTime);

  return arrayFilterServices;
}

console.log (filterServices(services, startTime, endTime));