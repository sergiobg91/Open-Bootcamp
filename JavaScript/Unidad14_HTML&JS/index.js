new TypeIt("#myElement", {
    strings: "This is what will be typed!",
  }).go();

//Eventos comunes de JS
const form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
    console.log(e);
    e.preventDefault();
})

//Evento personalizado
const hText = document.querySelector("#h-text");
console.log(hText);

hText.addEventListener("changedText", e => {
  console.log(e.detail);
  hText.innerText = e.detail.text;
  hText.style.color =e.detail.color;
});

function changeText(newText, color) {
  const event = new CustomEvent("changedText", { 
    detail: {
      text : newText,
      color
    }
  });
  hText.dispatchEvent(event);
};

