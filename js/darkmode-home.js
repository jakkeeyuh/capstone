let darkButton = document.getElementById("dark-mode-toggle"); 

const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);
