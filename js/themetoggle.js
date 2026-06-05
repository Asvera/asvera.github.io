function setTheme(mode) {
    localStorage.setItem("theme-storage", mode);
    if (mode === "dark") {
        document.getElementById("darkModeStyle").disabled = false;
        document.getElementById("dark-mode-toggle").innerHTML = "<img src='   https://cdn-icons-png.flaticon.com/512/10480/10480655.png '>";
        feather.replace()
    } else if (mode === "light") {
        document.getElementById("darkModeStyle").disabled = true;
        document.getElementById("dark-mode-toggle").innerHTML = "<img src='   https://cdn-icons-png.flaticon.com/512/1823/1823397.png ' >";
        // feather.replace()
    }
}

function toggleTheme() {
    if (localStorage.getItem("theme-storage") === "light") {
        setTheme("dark");
    } else if (localStorage.getItem("theme-storage") === "dark") {
        setTheme("light");
    }
}

var savedTheme = localStorage.getItem("theme-storage") || ((window.matchMedia("(prefers-color-scheme: dark)").matches)? "dark" : "light");
setTheme(savedTheme);
