// script.js

// Secciones animadas
const secciones = document.querySelectorAll('section');
const mostrarSeccion = () => {
    const scrollY = window.scrollY + window.innerHeight;
    secciones.forEach(sec => {
        const top = sec.offsetTop;
        if(scrollY > top + 50){
            sec.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', mostrarSeccion);
window.addEventListener('load', mostrarSeccion);

// Modal de imagen del botón
const botonImagen = document.getElementById('mostrarImagen');
const modalImagen = document.getElementById('modalImagen');
botonImagen.addEventListener('click', () => {
    modalImagen.classList.add('mostrar');
});
modalImagen.addEventListener('click', () => {
    modalImagen.classList.remove('mostrar');
});

const imagenScroll = document.getElementById('imagenScroll');

let isTouching = false;
let startY = 0;
let currentY = 0;

window.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
    isTouching = true;
});

window.addEventListener('touchmove', (e) => {
    if(!isTouching) return;
    currentY = e.touches[0].clientY;
    
    const scrollY = window.scrollY + window.innerHeight;
    const docHeight = document.body.offsetHeight;
    const delta = startY - currentY;

    if(scrollY >= docHeight - 1 && delta < 0){ // desliz hacia arriba en el final
        const rebote = Math.min(Math.abs(delta)/2, 50); // máximo 50px
        imagenScroll.style.transform = `translateY(${rebote}px)`;
        imagenScroll.style.opacity = 1;
    }
});

window.addEventListener('touchend', () => {
    isTouching = false;
    // vuelve al sitio original suavemente
    imagenScroll.style.transform = `translateY(0)`;
});