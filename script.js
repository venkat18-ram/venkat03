// Typewriter Effect
const texts = ["Web Developer", "UI/UX Designer", "Creative Thinker"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typewriter").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Pause at end
    } else {
        setTimeout(type, 100);
    }
}());

// Scroll Reveal Animation
window.addEventListener("scroll", () => {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
    }
});

// Trigger scroll once on load to show hero content
window.dispatchEvent(new Event('scroll'));




function openModal(imgSrc) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("fullCertImage");
    modal.style.display = "flex"; // Using flex to center the image
    modalImg.src = imgSrc;
}

function closeModal() {
    document.getElementById("certModal").style.display = "none";
}


document.addEventListener('DOMContentLoaded', () => {
    const emailBtn = document.getElementById('finalMailBtn');
    
    if (emailBtn) {
        emailBtn.addEventListener('click', function(e) {
            // 1. Copy to clipboard automatically
            const email = "battikerivenkatram2006@gmail.com";
            navigator.clipboard.writeText(email);
            
            // 2. Visual Feedback
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> Email Copied & Opening...';
            
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 3000);

            // 3. Log to console to verify the code is running
            console.log("Contact button successfully triggered.");
        });
    }
});


