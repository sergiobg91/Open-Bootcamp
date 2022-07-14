//Conjunto ordenado de elementos
const array = [1, 2, 3, 4, 5, 1, { id: 5 }, { id: 5 }];
console.log(array); //[1, 2, 3, 4, 5, 1, {id: 5}, {id: 5}];

//Conjunto no ordenado de elementos unicos, no acepta valores repetidos
//Los objetos si bien tienen la misma composicion son diferentes (toma los dos).
const set = new Set(array);

//Metodos de sets
set.add(6);
set.delete(1);
console.log(set); //{ 2, 3, 4, 5, 6, {id: 5}, {id: 5}, 6 }

set.has(6); //true
set.has(1); //false

set.size; //7

set.forEach((element) => {
  element;
});

const iteratorSet = set.values();
console.log(iteratorSet); // { [Iterator]}

const setToArray = [...set];
console.log(setToArray[0]); //2
