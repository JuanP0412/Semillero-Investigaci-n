// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// Botón volver arriba
const btnTop = document.getElementById('btnTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        btnTop.classList.add('visible');
    } else {
        btnTop.classList.remove('visible');
    }
});

btnTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Inicializar AOS
AOS.init({
    duration: 800,  // duración de la animación en ms
    once: false,     // animar cada vez que se hace scroll
});

new Typed('#typewriter', {
    strings: ['Semillero de Investigación', "Conectamos ideas", 'Construimos el futuro'],
    typeSpeed: 80,
    showCursor: true,
    cursorChar: '|',
    startDelay: 500,
    backDelay: 2000,
    loop: true
});