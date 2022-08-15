/* 
$(selector).action()  -->Forma de trabajar con JQuery

id: "#"
class: "."

*/

//Carga primero el codigo antes de empezar a ejecutar
// $("document").ready( ()=> {  //Forma comun
$( ()=> {  //Forma simplificada

    // $("#li-1").hide();

    $(".hide-btn").click(() => {
        $("h1").fadeOut();
    })

    $(".show-btn").click(() => {
        $("h1").fadeIn();
    })

    $("#li-1").click(() => {
        $("#li-1").css( {color: "red"});
    });

    $("#li-2").dblclick(() => {
        $("#li-2").css( {color: "red"});
    });

    $(".new-li").click(() => {
        // $("ul").prepend("<li>Nuevo elemento agregado</li>"); // Al principio
        $("ul").append("<li>Nuevo elemento agregado</li>");// Al final
    });

    $("li").mouseenter((elem)=> {
        elem.target.style.color = "blue";
    })

    $("li").mouseleave((elem)=> {
        elem.target.style.color = "black";
    })
});

