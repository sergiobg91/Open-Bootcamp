//Formas de importar y exportar modulos
/* 
    * CommonJS -> requiere
    * Import ES6 -> import
*/

 //CommonJS
const mathModule = require('./maths');                              //Opcion 1
const { factorial, powerOfB, sum, product } = require("./maths");   //Opcion 2

console.log(factorial(5));
console.log(powerOfB(5, 2));
console.log(sum(4, 6));
console.log(product(7, 7));

