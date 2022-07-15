//1
function alwaysTrue() {
  return true;
}
alwaysTrue();

//2
const asyncSetTime = async () => {
  setTimeout(() => {
    console.log("Hola, soy una promesa");
  }, 5000);
};
asyncSetTime();

//3
function* pairIndex() {
  let index = 0;
  while (true) {
    yield (index += 2);
  }
}
const pairIndexInstance = pairIndex();
