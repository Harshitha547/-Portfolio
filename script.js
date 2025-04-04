// Welcome alert
window.onload = function () {
    alert("Welcome to Harshitha Dhanpal's Portfolio!");
};

// Scroll-to-top functionality
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Button animation
document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 100);
    });
});

// Hackathon card hover effect
document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio loaded successfully!");

    let hackathonCards = document.querySelectorAll('.hackathon-card');

    hackathonCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = "scale(1.1)";
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = "scale(1)";
        });
    });

    // Typing animation trigger
    const typingText = document.getElementById('typing-text');
    setTimeout(() => {
        typingText.style.animationPlayState = 'running';
    }, 1000);
});

// Contact Form submission
document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual submission
    alert("Thank you for reaching out! I'll get back to you soon.");
    this.reset(); // Reset the form
});

// Navigation link activation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('nav ul li a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});
