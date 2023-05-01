const overlay = document.querySelector(".overlay");
const bars = document.querySelector(".fa-bars");

bars.addEventListener("click", function() {
    if (overlay.classList.contains("hide")) {
        overlay.classList.remove("hide");
    } else {
        overlay.classList.add("hide");
    }
});