// TRADUCCIONES
const translations = {
    es: {
        "nav-inicio": "Inicio",
        "nav-gastronomia": "Gastronomía",
        "nav-cultura": "Cultura",
        "nav-naturaleza": "Naturaleza",
        "nav-arte": "Arte",
        "nav-explora": "¡Explora!",
        "nav-contacto": "Contacto",
        "card-gastronomy-titulo": "Gastronomía",
        "card-gastronomy-desc": "La gastronomía en Bogotá combina tradición e innovación.",
        "btn-mas": "Más información",
        "footer-leyenda": "Explorando la esencia de la capital.",
        "footer-redes": "Síguenos en redes"
    },
    en: {
        "nav-inicio": "Home",
        "nav-gastronomia": "Gastronomy",
        "nav-cultura": "Culture",
        "nav-naturaleza": "Nature",
        "nav-arte": "Art",
        "nav-explora": "Explore!",
        "nav-contacto": "Contact",
        "card-gastronomy-titulo": "Gastronomy",
        "card-gastronomy-desc": "Bogota's gastronomy combines tradition and innovation.",
        "btn-mas": "Read More",
        "footer-leyenda": "Exploring the essence of the capital.",
        "footer-redes": "Follow us"
    }
};

// CAMBIAR IDIOMA
window.changeLanguage = function() {
    const select = document.getElementById("language-select");
    if (!select) return; // Seguridad por si no encuentra el select

    const lang = select.value;
    const elements = document.querySelectorAll("[data-key]");

    elements.forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
};

// SLIDESHOW 
let slideIndex = 0;
let timeoutId;

window.plusSlides = function(n) {
    clearTimeout(timeoutId);
    showManual(slideIndex += n);
}

window.currentSlide = function(n) {
    clearTimeout(timeoutId);
    showManual(slideIndex = n);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (slides.length === 0) return;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    if(dots[slideIndex-1]) dots[slideIndex-1].className += " active";
    timeoutId = setTimeout(showSlides, 5000);
}

function showManual(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    if(dots[slideIndex-1]) dots[slideIndex-1].className += " active";
}

document.addEventListener("DOMContentLoaded", showSlides);