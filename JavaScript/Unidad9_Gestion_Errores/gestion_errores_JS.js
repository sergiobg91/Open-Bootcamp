//Gestion errores con JS

const functionNumber = (value) => {
  if (typeof value === "number") {
    return 2 * value;
  }
  throw new Error(`${value} no es un numero`);
};

const myNum = "Hola";

try {
  console.log(typeof myNum);
  console.log(functionNumber(myNum));
} catch (error) {
  console.log(error);
} finally {
  console.log("Fin del programa");
}
/*Tipos de errores comunes:
    InternalError
    SyntaxError
    TypeError
    RangeError
    ReferenceError
*/
