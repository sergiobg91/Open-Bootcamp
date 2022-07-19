//Modulos -> Bloque de código reutilizable

const sum = (a, b) => a + b;
const product = (a, b) => a * b;
const powerOfB = (a, b) => a ** b;
const factorial = (a) => { return a === 0 ? 1 : a * factorial(a - 1)  };

module.exports = {sum, product, powerOfB, factorial};