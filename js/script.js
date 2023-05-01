const overlay = document.querySelector(".overlay");
const bars = document.querySelector(".fa-bars");

bars.addEventListener("click", function() {
    if (overlay.classList.contains("hide")) {
        overlay.classList.remove("hide");
        bars.style.opacity = "0.5";
    } else {
        overlay.classList.add("hide");
        bars.style.opacity = "1";
    }
});