const personData = {
  name: "Sergio",
  lastName: "Beltran",
  age: 30,
  height: 1.7,
  isDeveloper: true,
};
const { age: age } = personData;

const newList = [
  { ...personData },
  { name: "Pepe", lastName: "Perez", age: 20 },
  { name: "Andres", lastName: "Garcia", age: 25 },
];

const newListSorted = newList.sort((a, b) => a.age - b.age);
