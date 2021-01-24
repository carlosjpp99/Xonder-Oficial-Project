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

