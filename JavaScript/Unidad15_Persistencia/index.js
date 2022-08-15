localStorage.setItem('nombre', 'Sergio');
localStorage.setItem('person', JSON.stringify({name: 'Sergio', age: '30'}));

console.log(JSON.parse(localStorage.getItem('person')));

//Guarda hasta cerrar la tab.
sessionStorage.setItem("apellido", "Beltran");

//Cookies
document.cookie = "nombreCookie=Sergio";
document.cookie = `nombreCaducidad=Sergio;expires=${new Date(2023, 0, 1).toUTCString()}`;

//Listar todas las cookies
console.log(document.cookie);
