//Objetos

const obj = {
  id: 1,
  name: "Sergio",
  isDeveloper: true,
  favoriteBooks: ["Ensayo sobre la ceguera"],
  nintendo_games: ["Mario", "Zelda", "Metroid"],
};

console.log(obj?.isGamer); //undefined
console.log(obj?.isDeveloper); //true
console.log(obj["nintendo_games"]); //['Mario', 'Zelda', 'Metroid']

const obj2 = obj;
obj2.name = "Pepe"; //Cambia el valor de obj, ya que al asignar un objeto a otro apunta al mismo punto de memoria.
console.log(obj.name); //Pepe

const obj3 = { ...obj }; //Copia el objeto a otro nuevo.
obj3.name = "Andres";

console.log(obj.name); //Pepe

//-------------//
//Ordenar listas de objetos en funcion de una propiedad
const listOfMovies = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Lord Of The Rings", year: 2003 },
  { title: "The Dark Knight", year: 2008 },
];

//ordenar por año
console.log(listOfMovies.sort((a, b) => a.year - b.year));
