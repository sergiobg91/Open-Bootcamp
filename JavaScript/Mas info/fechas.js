//Fechas

const date = new Date();
console.log(date); //Thu Jul 14 2002 08:27:10 GTM-0300

//Los meses empiezan en 0 hasta 11
const date2 = new Date(1987, 6);
console.log(date2);

//Milisengudos =0, 1 enero de 1970 00:00 (con diferencia horaria segun region)
const date3 = new Date(0);
console.log(date3); //Wed Dec 31 1969 21:00:00 GMT-0300

const date4 = new Date("December 25, 1991");
console.log(date4); //Wed Dec 25 1991 00:00:00 GMT-0200

console.log(date3 < date4); //true

const date5 = new Date(1987, 10, 20, 1, 23, 52, 192);
const date6 = new Date(1987, 10, 20, 1, 23, 52, 192);
console.log(date3 === date4); //false

//Para comparar fechas se deben convertir a milisegundos
console.log(date5.getTime() === date6.getTime()); //true

//Formatos segun region
const date7 = new Date();
console.log(date7.toLocaleDateString("es-AR")); //14/7/2022
console.log(date7.toLocaleTimeString("es-AR")); //08:57:35
console.log(date7.toLocaleString("es-AR")); //14/7/2022 08:57:35
