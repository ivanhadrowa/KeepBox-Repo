document.querySelector(".bars__menu").addEventListener("click", animatedBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var desplegable = document.querySelector(".menu__desplegable")

var mostrar = true;

function animatedBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    desplegable.classList.toggle("activemenu__desplegable");
}


let modo = document.querySelector('#modo');
let body = document.body;
let boton = document.querySelector('.bi-toggle-on')



modo.addEventListener('click', function () {
    let valor = body.classList.toggle('dark');
    localStorage.setItem("modo", valor)
    boton.classList.toggle('dark-mode')


})

let valor = localStorage.getItem("modo")

if (valor=="true"){
    body.classList.add("dark")
}else{
    body.classList.remove("dark")
}




//SLIDEEER

function enableSliders() {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
      const slider = product.querySelector('.slider');
      const prevBtn = product.querySelector('.prev-btn');
      const nextBtn = product.querySelector('.next-btn');
      const images = slider.querySelectorAll('img');
      let currentIndex = 0;

      // Muestra la imagen actual y actualiza el índice
      function showImage(index) {
        images.forEach(image => {
          image.classList.remove('active');
        });
        images[index].classList.add('active');
        currentIndex = index;
      }

      // Evento para mostrar la siguiente imagen
      nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= images.length) {
          currentIndex = 0;
        }
        showImage(currentIndex);
      });

      // Evento para mostrar la imagen anterior
      prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = images.length - 1;
        }
        showImage(currentIndex);
      });

      // Mostrar la primera imagen inicialmente
      showImage(currentIndex);
    });
  }

  // Llamar a la función para habilitar los sliders al cargar la página
  window.addEventListener('load', enableSliders);
  

