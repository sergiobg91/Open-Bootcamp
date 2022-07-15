//Parametros indefinidos
function productoNumeros(...args) {
    return args.reduce((a, b)=> a * b);
};

//Funciones asíncronas
const myAsync = new Promise((resolve, reject) => {
    if (false)
        resolve();
    else
        reject();
    }
);

myAsync
    .then(() => console.log("Ejecucion de promesa correcta"))
    .catch(() => console.log("Ejecucion de promesa fallida"))
    .finally(() => console.log("Ejecucion de promesa finalizada"));


//Funciones generadoras
function* idGenerator() {
    let id = 0;
    while (true) {
        yield ++id;
        if (id >= 10)
            return id;
    }
}

//Objeto del tipo {Generator}
const idGeneratorInstance = idGenerator();

//con .next llamamos el siguiente valor generado por yield
console.log(idGeneratorInstance.next()); // {value: 1, done: false}
console.log(idGeneratorInstance.next()); // {value: 2, done: false}

//.value para obtener solo valor
console.log(idGeneratorInstance.next().value); // 3