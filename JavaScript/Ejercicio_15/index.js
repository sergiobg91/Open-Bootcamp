const myName = "Sergio";
const myLastName = "Beltran";

const person = { myName, myLastName};

// sessionStorage.setItem("sessionPerson", JSON.stringify(person));
// localStorage.setItem("localPerson", JSON.stringify(person));

document.cookie = `person=${JSON.stringify(person)};expires=${ (new Date().getTime() + (2*60000)) }`;

