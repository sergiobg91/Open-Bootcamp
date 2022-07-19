//Para usar modulos de ES6 definimos el type en el package.json

export const sum = (a, b) => a + b;
export const product = (a, b) => a * b;
export const powerOfB = (a, b) => a ** b;
export const factorial = (a) => { return a === 0 ? 1 : a * factorial(a - 1)  };

//Tambien podemos exportar constantes
export const PI = 3.1416;

//Exportar por defecto (solo uno por archivo)
const subtraction = (a, b) => a - b;
export default subtraction;