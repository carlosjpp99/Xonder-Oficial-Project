let boton=document.getElementById("icono");
let botonCerrar=document.getElementById("boton-cerrar");
let enlaces=document.getElementById("menu");
let contador=0;

boton.addEventListener("click",function(uno){
    if(contador==0){
        enlaces.className=("menu dos")
        contador=1;
        boton.style.display=('none');
        botonCerrar.style.display=('block');
    }else{
        enlaces.classList.remove("dos")
        enlaces.className=("menu uno")
        contador=0;
        boton.style.display=('block');
        botonCerrar.style.display=('none');
    }
})

botonCerrar.addEventListener("click",function(uno){
    if(contador==0){
        enlaces.className=("menu dos")
        contador=1;
        boton.style.display=('none');
        botonCerrar.style.display=('block');
    }else{
        enlaces.classList.remove("dos")
        enlaces.className=("menu uno")
        contador=0;
        boton.style.display=('block');
        botonCerrar.style.display=('none');
    }
})