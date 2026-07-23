// Highlight the active navigation link
const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
        link.style.color = "#60a5fa";
        link.style.fontWeight = "bold";
    }
});

// Smooth scrolling for anchor links (if you add any later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Fade in the main content when the page loads
window.addEventListener("load", () => {
    const container = document.querySelector(".container");
    if (container) {
        container.style.opacity = "0";
        container.style.transition = "opacity 0.8s ease";
        setTimeout(() => {
            container.style.opacity = "1";
        }, 100);
    }
});