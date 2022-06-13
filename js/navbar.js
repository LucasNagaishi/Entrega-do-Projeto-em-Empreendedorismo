const navbarToggle = document.getElementById("navbar-toggle");
const navbarMenu = document.querySelector(".navbar .navbar-menu");
const navbarIcon = document.querySelector("i.fa-bars");
const navbarLinks = document.querySelectorAll(".navbar-menu .menu-option a");

const toggleNavbar = () => {
    navbarMenu.classList.toggle("show-menu");
    navbarToggle.classList.toggle("fixed-top");
    navbarIcon.classList.toggle("fa-bars");
    navbarIcon.classList.toggle("fa-times");

    navbarLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbarMenu.classList.remove("show-menu");
            navbarToggle.classList.remove("fixed-top");
            navbarIcon.classList.remove("fa-times");
            navbarIcon.classList.add("fa-bars");
        });
    });
}

navbarToggle.addEventListener("click", toggleNavbar);
