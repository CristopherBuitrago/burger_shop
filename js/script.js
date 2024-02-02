let menu = document.querySelector("#menu-icon");
let barraNavegacion = document.querySelector(".barra-navegacion")

menu.addEventListener("click", function(){
    barraNavegacion.classList.toggle("active");
});

window.onscroll = () => {
    barraNavegacion.classList.remove("active")
};