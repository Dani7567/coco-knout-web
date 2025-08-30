// Secciones animadas  
const secciones = document.querySelectorAll('section');  

const mostrarSeccion = () => {  
  const scrollY = window.scrollY + window.innerHeight;  
  secciones.forEach(sec => {  
    const top = sec.offsetTop;  
    if (scrollY > top + 50) {  
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

// Imagen secreta al final del scroll  
let imagenSubida = false;  
let primeraVez = true;  
let lastScrollY = window.scrollY;  
let forzadoPorScrollUp = false; // <-- flag para controlar si fue forzado

const imagenScroll = document.getElementById('imagenScroll');  

function mostrarImagenScroll() {  
  if (forzadoPorScrollUp) return; // si fue forzado, no lo tocamos  

  const scrollY = window.scrollY + window.innerHeight;  
  const docHeight = document.documentElement.scrollHeight;  

  if (scrollY >= docHeight - 2) {    
      imagenScroll.classList.add("visible");    
      if (primeraVez) {    
        imagenScroll.style.transition = 'transform 1s ease, opacity 1s ease';    
        imagenScroll.style.transform = 'translateX(0px) translateY(50px)';    
      } else {    
        imagenScroll.style.transition = 'transform 0.2s ease, opacity 0.2s ease';    
        imagenScroll.style.transform = 'translateX(0px) translateY(100px)';    
      }    
  } else {    
      imagenScroll.classList.remove("visible");    
  }  
}  

// Scroll hacia arriba  
window.addEventListener('scroll', () => {  
  const scrollY = window.scrollY;  

  if (scrollY < lastScrollY) {    
      // Siempre baja lento (1s) cuando subes  
      imagenScroll.style.transition = 'transform 1s ease';    
      imagenScroll.style.transform = 'translateX(0px) translateY(150px)';    
      imagenSubida = false;    
      forzadoPorScrollUp = true;  
  } else {  
      forzadoPorScrollUp = false;  
  }  

  lastScrollY = scrollY;  
});  

window.addEventListener('scroll', mostrarImagenScroll);  
window.addEventListener('load', mostrarImagenScroll);  

// Toggle al click  
imagenScroll.addEventListener('click', () => {  
  if (imagenSubida) {  
    // Baja rápido  
    imagenScroll.style.transition = 'transform 0.2s ease';  
    imagenScroll.style.transform = 'translateX(0px) translateY(100px)';  
    imagenSubida = false;  
    primeraVez = false;  
  } else {  
    // Sube lento  
    imagenScroll.style.transition = 'transform 1s ease';  
    imagenScroll.style.transform = 'translateX(0px) translateY(5px)';  
    imagenSubida = true;  
  }  
});