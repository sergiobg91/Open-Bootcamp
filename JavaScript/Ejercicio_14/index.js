const btnEnviar = document.querySelector("#btn-enviar");

btnEnviar.addEventListener("click", () => {
  alert("Click en el botón");
});

$(btnEnviar).click(()=> {
    alert("Click en el botón con JQuery");
})