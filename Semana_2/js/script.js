// Mensagem de boas-vindas no console
console.log("Bem-vindo à Página Inicial!");

// Efeito de clique nos links do menu
const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        // Animação de clique
        this.style.transform = "scale(0.9)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
            window.location.href = this.href;
        }, 150);
    });
});

// Saudação dinâmica baseada no horário
const nav = document.querySelector("nav");

    // Create greeting element
    const greeting = document.createElement("div");
    greeting.classList.add("sidebar-greeting");

    const hour = new Date().getHours();
    let message = "";

    if (hour < 12) {
        message = "Bom dia! ☀️";
    } else if (hour < 18) {
        message = "Boa tarde! 🌤️";
    } else {
        message = "Boa noite! 🌙";
    }

    greeting.textContent = message;

nav.insertBefore(greeting, nav.firstChild);


// Highlight current page in sidebar navigation

document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {

        const linkPage = link.getAttribute("href");

        // If homepage (index.html) OR exact match
        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {
            link.classList.add("active");
        }
    });

});