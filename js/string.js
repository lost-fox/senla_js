let string = 'string test example'

//1
console.log (string[0]);
console.log (string[string.length-1]);

//2
console.log (string[0].toUpperCase());
console.log (string[string.length-1].toUpperCase());

//3
console.log (string.indexOf('string'));

//4
console.log( string.indexOf(' ', string.indexOf(' ') + 1));

//5
console.log(string.substr(1,6));

//6
console.log (string.slice(0,6));

//7
let x=20, y=21;
console.log(x.toString()+y.toString());