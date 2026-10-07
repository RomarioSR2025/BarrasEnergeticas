/* =========================================
   MENÚ PARA CELULAR
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


/* =========================================
   CERRAR MENÚ AL HACER CLIC EN UN ENLACE
========================================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* =========================================
   PREGUNTAS FRECUENTES - FAQ
========================================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const faqItem = question.parentElement;

        const answer = faqItem.querySelector(".faq-answer");

        const isActive = faqItem.classList.contains("active");


        /* Cerrar todas las preguntas */

        document.querySelectorAll(".faq-item").forEach(function (item) {

            item.classList.remove("active");

            const itemAnswer = item.querySelector(".faq-answer");

            itemAnswer.style.maxHeight = null;

        });


        /* Abrir la seleccionada */

        if (!isActive) {

            faqItem.classList.add("active");

            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});


/* =========================================
   FORMULARIO DE CONTACTO
========================================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const nombre = document.getElementById("nombre").value.trim();

    const email = document.getElementById("email").value.trim();

    const mensaje = document.getElementById("mensaje").value.trim();


    if (
        nombre === "" ||
        email === "" ||
        mensaje === ""
    ) {

        alert("Por favor, completa todos los campos.");

        return;

    }


    alert(
        "¡Gracias, " +
        nombre +
        "! Tu mensaje ha sido enviado correctamente."
    );


    contactForm.reset();

});


/* =========================================
   BOTÓN VOLVER ARRIBA
========================================= */

const backToTop = document.getElementById("backToTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   ANIMACIÓN AL APARECER EN PANTALLA
========================================= */

const cards = document.querySelectorAll(
    ".info-card, .type-card, .ingredient, .benefit, .step"
);


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform = "translateY(25px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});


/* =========================================
   ESTILO DE LAS TARJETAS VISIBLES
========================================= */

const style = document.createElement("style");

style.textContent = `

    .info-card.visible,
    .type-card.visible,
    .ingredient.visible,
    .benefit.visible,
    .step.visible {

        opacity: 1 !important;

        transform: translateY(0) !important;

    }

`;

document.head.appendChild(style);


/* =========================================
   MENSAJE EN CONSOLA
========================================= */

console.log(
    "⚡ Barras Energéticas - Página cargada correctamente."
);