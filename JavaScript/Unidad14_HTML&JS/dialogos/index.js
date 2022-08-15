const btnEnviar = document.querySelector("#btn-enviar");
const btnInfo = document.querySelector("#btn-info");

btnEnviar.addEventListener("click", () => {
  confirm("Estás de acuerdo?") ? console.log("OK") : console.log("NO OK");
});


btnInfo.addEventListener("click", () => {
    const name = prompt("Escribe tu nombre: ");
    console.log(name);
});