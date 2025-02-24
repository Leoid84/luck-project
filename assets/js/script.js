




/*========================== Menu ====================== */

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