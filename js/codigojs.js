// TRADUCCIONES COMPLETAS
const translations = {
    es: {
        "nav-inicio": "Inicio",
        "nav-gastronomia": "Gastronomía",
        "nav-cultura": "Cultura",
        "nav-naturaleza": "Naturaleza",
        "nav-arte": "Arte",
        "nav-explora": "¡Explora!",
        "nav-contacto": "Contacto",
        "nav-home": "Inicio",
        "card-gastronomy-titulo": "Gastronomía",
        "card-gastronomy-desc": "La gastronomía en Bogotá combina tradición e innovación.",
        "btn-mas": "Más información",
        "footer-leyenda": "Explorando la esencia de la capital.",
        "footer-redes": "Síguenos en redes",
        "ph-nombre": "Tu nombre...", "ph-email": "ejemplo@correo.com", "ph-mensaje": "¿En qué podemos ayudarte?"
    },
    en: {
        "nav-inicio": "Home",
        "nav-gastronomia": "Gastronomy",
        "nav-cultura": "Culture",
        "nav-naturaleza": "Nature",
        "nav-arte": "Art",
        "nav-explora": "Explore!",
        "nav-contacto": "Contact",
        "nav-home": "Home",
        "card-gastronomy-titulo": "Gastronomy",
        "card-gastronomy-desc": "Bogota's gastronomy combines tradition and innovation.",
        "btn-mas": "Read More",
        "footer-leyenda": "Exploring the essence of the capital.",
        "footer-redes": "Follow us",
        "ph-nombre": "Your name...", "ph-email": "example@mail.com", "ph-mensaje": "How can we help you?"
    }
};

// FUNCIÓN DE TRADUCCIÓN
window.changeLanguage = function() {
    const select = document.getElementById("language-select");
    if (!select) return;

    const lang = select.value;
    localStorage.setItem("selectedLanguage", lang); // Guardar en memoria

    // Traducir elementos con data-key
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Traducir Placeholders si existen
    const inputNombre = document.getElementById("input-nombre");
    if (inputNombre) {
        inputNombre.placeholder = translations[lang]["ph-nombre"];
        document.getElementById("input-email").placeholder = translations[lang]["ph-email"];
        document.getElementById("txt-mensaje").placeholder = translations[lang]["ph-mensaje"];
    }
};

// LÓGICA DEL SLIDESHOW
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
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (slides.length === 0) return;
    for (let i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (let i = 0; i < dots.length; i++) { dots[i].className = dots[i].className.replace(" active", ""); }
    slides[slideIndex-1].style.display = "block";  
    if(dots[slideIndex-1]) dots[slideIndex-1].className += " active";
    timeoutId = setTimeout(showSlides, 5000);
}

function showManual(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (slides.length === 0) return;
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
    for (let i = 0; i < dots.length; i++) { dots[i].className = dots[i].className.replace(" active", ""); }
    slides[slideIndex-1].style.display = "block";  
    if(dots[slideIndex-1]) dots[slideIndex-1].className += " active";
}

// EJECUCIÓN CRÍTICA AL CARGAR
function inicializar() {
    const savedLang = localStorage.getItem("selectedLanguage");
    const select = document.getElementById("language-select");

    if (savedLang && select) {
        select.value = savedLang;
        window.changeLanguage(); // Aplicar inmediatamente
    }
    
    // Iniciar slideshow
    if (document.getElementsByClassName("mySlides").length > 0) {
        showSlides();
    }
}

// FUNCIONES PARA EL MODAL DE REFERENCIAS
function abrirRef() {
    document.getElementById("modalRef").style.display = "block";
}

function cerrarRef() {
    document.getElementById("modalRef").style.display = "none";
}

// Cerrar si hace clic fuera de la tarjeta
window.onclick = function(event) {
    let modal = document.getElementById("modalRef");
    if (event.target == modal) {
        cerrarRef();
    }
}

// Usar load para asegurar que todo el HTML (nav, footer) esté listo
window.addEventListener("load", inicializar);