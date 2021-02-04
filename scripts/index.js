// Animacion para el boton de menu

let boton=document.getElementById("btn-icono");
let botonCerrar=document.getElementById("boton-cerrar");
let enlaces=document.getElementById("menu");
let btnIcono=document.getElementById("btn-icono");
let contador=0;

boton.addEventListener("click",function(uno){
    if(contador==0){
        enlaces.className=("menu dos")
        contador=1;
    }else{
        enlaces.classList.remove("dos")
        enlaces.className=("menu uno")
        contador=0;
    }
}) 

//FIN

//Animacion de scroll para los textos

let animacionScroll=document.querySelectorAll(".animacion-scroll-arriba");

function mostrarScroll(){
    let scrollTop1=document.documentElement.scrollTop;
    for(let i=0;i < animacionScroll.length ;i++){
        let alturaAnimnado=animacionScroll[i].offsetTop;
        if(alturaAnimnado+250<scrollTop1){
            animacionScroll[i].style.opacity=1;
            animacionScroll[i].classList.add("mostrarAarriba");
        }
    }
}

window.addEventListener('scroll',mostrarScroll);
//FIN