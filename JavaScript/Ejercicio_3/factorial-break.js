let factorial = 1;
let index = 1;
whileFactorial: while (true) {
    factorial *= index;
    if (index === 10)
        break whileFactorial;
    index++;
};
console.log(`El factorial de 10 es ${factorial}`);