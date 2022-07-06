let listaCompras = ["frutas", "carne", "lacteos", "helado"];
listaCompras.push("Aceite de Girasol");
listaCompras.pop("Aceite de Girasol");

let peliculasFavoritas = [
  {
    title: "The lord of the rings",
    director: "Peter Jackson",
    date: new Date(2001, 11, 19),
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    date: new Date(2014, 10, 7),
  },
  {
    title: "The exorcist",
    director: "William Friedkin",
    date: new Date(1973, 9, 27),
  },
];

const pelisFiltradasPorFecha = peliculasFavoritas.filter(
  (obj) => obj.date > new Date(2010, 0, 1)
);
const listaDirectores = peliculasFavoritas.map((obj) => obj.director);
const listaTitulos = peliculasFavoritas.map((obj) => obj.title);
const listaDirectoresTitulosConcat = listaDirectores.concat(listaTitulos);
const listaDirectoresTitulosPropagacion = [...listaDirectores, ...listaTitulos];
