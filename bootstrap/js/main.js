//*************OCULTAR IMAGENES*************
var tache1 = document.getElementById("cerrar1");
var tache2 = document.getElementById("cerrar2");
var tache3 = document.getElementById("cerrar3");
var tache4 = document.getElementById("cerrar4");

function cerrar(){
    document.getElementsByClassName("polaroid")[0].style.display = "none";
}
tache1.addEventListener("click", cerrar);

function cerrar1(){
   document.getElementsByClassName("polaroid")[1].style.display = "none";
}
tache2.addEventListener("click", cerrar1);

function cerrar2(){
    document.getElementsByClassName("polaroid")[2].style.display = "none";
}
tache3.addEventListener("click", cerrar2);

function cerrar3(){
    document.getElementsByClassName("polaroid")[3].style.display = "none";
}
tache4.addEventListener("click", cerrar3);

//*************MOSTRAR IMAGENES*************
function mostrar(){
    document.getElementsByClassName("polaroid")[0].style.display = "inline-block";
    document.getElementsByClassName("polaroid")[1].style.display = "inline-block";
    document.getElementsByClassName("polaroid")[2].style.display = "inline-block";
    document.getElementsByClassName("polaroid")[3].style.display = "inline-block";
}

panda3.addEventListener("click", mostrar);

//*************OCULTAR PARRAFO IZQUIERDO*************

function parrafoMostrar(){
    document.getElementById("pUno").style.visibility = "hidden";
    panda1.removeEventListener("click", parrafoMostrar);
    panda1.addEventListener("click", parrafoOcultar);
}
function parrafoOcultar(){
    document.getElementById("pUno").style.visibility = "visible";
    panda1.removeEventListener("click", parrafoOcultar);
    panda1.addEventListener("click", parrafoMostrar);
}

panda1.addEventListener("click", parrafoMostrar);

//*************OCULTAR PARRAFOs DERECHO*************

function parrafoMostrar2(){
    document.getElementById("pDos").style.visibility = "hidden";
    panda2.removeEventListener("click", parrafoMostrar2);
    panda2.addEventListener("click", parrafoOcultar2);
}
function parrafoOcultar2(){
    document.getElementById("pDos").style.visibility = "visible";
    panda2.removeEventListener("click", parrafoOcultar2);
    panda2.addEventListener("click", parrafoMostrar2);
}

panda2.addEventListener("click", parrafoMostrar2);
