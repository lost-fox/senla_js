//Получить и вывести в консоль:
//1 head
let heads = document.head;
console.log (heads);
//2 body
let body = document.body;
console.log (body);
//3 все дочерние элементы body
let childs = document.body.childNodes;
console.log (childs);
//4 первый div и все его дочерние узлы 
let firstChilds = document.body.firstElementChild;
console.log (firstChilds);
//4.1 вывести все дочерние узлы в консоль 
let paragraphs = document.body.firstElementChild.getElementsByTagName('p');
console.log (paragraphs);
//4.2 вывести все дочерние узлы в консоль кроме первого
for (let i = 1; i<paragraphs.length; i++){
   console.log (paragraphs[i]);
};
