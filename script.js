// Selecciona todas las secciones
const secciones = document.querySelectorAll('section');

// Función que muestra la sección cuando entra en pantalla
const mostrarSeccion = () => {
  const scrollY = window.scrollY + window.innerHeight;

  secciones.forEach(sec => {
    const top = sec.offsetTop;
    if (scrollY > top + 50) { // 50px de margen
      sec.classList.add('visible');
    }
  });
};

// Detecta scroll y carga de página
window.addEventListener('scroll', mostrarSeccion);
window.addEventListener('load', mostrarSeccion);

const botonImagen = document.getElementById('mostrarImagen');
const modalImagen = document.getElementById('modalImagen');

botonImagen.addEventListener('click', () => {
    modalImagen.classList.add('mostrar');
});

modalImagen.addEventListener('click', () => {
    modalImagen.classList.remove('mostrar');
});