const paragraph = document.querySelectorAll(".paragraph");
const sections = document.querySelectorAll(".section");

paragraph.forEach(paragraph => {
    paragraph.addEventListener("dragstart", (e) => {
        paragraph.classList.add("dragging");
        e.dataTransfer.setData("id", paragraph.id); //setea una especie de variable de contexto
        // e.dataTransfer.setDragImage(HTMLElement, 0, 0); //setea una imagen de arrastre, debe estar dentro del doc HTML
    });

    paragraph.addEventListener("dragend", () => {
        paragraph.classList.remove("dragging");
    });


});

sections.forEach(section => {
    section.addEventListener("dragover", (e)=>{
        e.preventDefault(); // para que pueda gestionar el drop al terminar, ya que es el comportamiento por defecto es denegarlo.
        e.dataTransfer.dropEffect = "move";
    });

    section.addEventListener("drop", (e) => {
        console.log(e.dataTransfer.getData("id"));
        const idPharagraph = document.getElementById(e.dataTransfer.getData("id")); //captura la variable de contexto
        section.appendChild(idPharagraph);

    })
})