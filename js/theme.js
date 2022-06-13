const toggleThemeButton = document.getElementById("theme-switcher");
const toggleThemeButtonIcon = document.getElementById("theme-switcher-icon");

const THEME_KEY = "auto-naga-theme";

const currentTheme = localStorage.getItem(THEME_KEY) ? localStorage.getItem(THEME_KEY) : null;

function setTheme(theme = "light") {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);

    if (theme === "dark") {
        toggleThemeButtonIcon.classList.remove("fa-moon");
        toggleThemeButtonIcon.classList.add("fa-sun");
    } else {
        toggleThemeButtonIcon.classList.remove("fa-sun");
        toggleThemeButtonIcon.classList.add("fa-moon");
    }
}

function onToggleTheme() {
    if (document.documentElement.getAttribute("data-theme") !== "dark") {
        setTheme("dark");
    } else {
        setTheme("light");
    }
}

function onLoad() {
    setTheme(currentTheme);
}

window.addEventListener("load", onLoad);
toggleThemeButton.addEventListener("click", onToggleTheme);
