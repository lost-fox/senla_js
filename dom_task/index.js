  
document.addEventListener('DOMContentLoaded', function () {
   console.clear();
   // ваш код поместить тут
   //1 Создать функцию которая принимает два. Функция проверяет является ли первый элемент родителям для второго элемента isParent(parent, child) => true || false
   let parent = document.querySelector("article");

   let child = document.querySelector("p");

   function isParent(parent, child) {
    return parent.contains(child);
   }

  console.log (isParent(parent, child)) ;
   

   //2 Найти элемент который находится перед списком ul

   let elementsBeforeUl = document.querySelector("ul").previousElementSibling;

   console.log (elementsBeforeUl);

   //3 Найти параграф и получить его текстовые содержимое

    let  paragraphs = document.querySelector("p");
    let text = paragraphs.textContent;

    console.log (text);
   //4 Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию виде объекта о типе узла, имени узла и количестве дочерних узлов.
   let argument = document.querySelector("ul");

     function getInformation(unit){
         let objectUnit = {};

         objectUnit.type = unit.nodeType;
         objectUnit.name = unit.nodeName;
         objectUnit.amount = unit.children.length;

         return objectUnit;

     }

     console.log (getInformation(argument));

   //5 Найти список и добавить ему класс "list"
   let list = document.querySelector("ul").className = "list";

 });