//Nueva forma de importar modulos

// import * as mathsModule from './maths.js';  --> importa todo el modulo
import { sum, product, powerOfB, factorial, PI } from './maths.js';

//export default
import substraction from './maths.js';

console.log(factorial(5));
console.log(powerOfB(5, 2));
console.log(sum(4, 6));
console.log(product(7, 7));
console.log(PI);
console.log(substraction(10, 2));