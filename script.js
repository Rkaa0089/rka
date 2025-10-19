const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

const particlesContainer = document.getElementById("particles");
for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 10 + "s";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";

    if (Math.random() > 0.5) {
        particle.style.background = "var(--secondary-color)";
        particle.style.boxShadow = "0 0 10px var(--secondary-color)";
    }

    particlesContainer.appendChild(particle);
}

const binaryRain = document.getElementById("binaryRain");
for (let i = 0; i < 20; i++) {
    const column = document.createElement("div");
    column.className = "binary-column";
    column.style.left = i * 5 + "%";
    column.style.animationDelay = Math.random() * 5 + "s";
    column.style.animationDuration = Math.random() * 5 + 10 + "s";

    let binaryText = "";
    for (let j = 0; j < 30; j++) {
        binaryText += Math.random() > 0.5 ? "1" : "0";
        if (j % 8 === 7) binaryText += " ";
    }
    column.textContent = binaryText;

    binaryRain.appendChild(column);
}