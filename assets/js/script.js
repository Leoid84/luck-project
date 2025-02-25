




/*========================== NAVBAR ====================== */

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".menu").addEventListener("click", function() {
        this.classList.toggle("active");
    });
});

window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("nav-fixed");
    } else {
        navbar.classList.remove("nav-fixed");
    }
});

/*========================== Menu ====================== */

document.addEventListener("scroll", function() {
    let scrollTop = window.scrollY; // Obtém a posição do scroll

    document.querySelectorAll(".parallax").forEach(parallax => {
        let speed = parallax.dataset.speed || 8; // Pega a velocidade do HTML (padrão = 5)
        let yPos = -(scrollTop / speed); // Calcula a posição

        parallax.style.backgroundPosition = `center ${yPos}px`; // Aplica o efeito
    });
});
