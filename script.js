document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }
        
        alert("Thank you, " + name + "! Your message has been sent.");
        contactForm.reset();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const eventDate = new Date("2025-05-31"); // Set exact event date here
    const daysLeftElement = document.getElementById("days-left");

    function updateCountdown() {
        const now = new Date();
        const diffTime = eventDate - now;
        const daysLeft = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        document.getElementById('days-left').innerText = daysLeft >= 0 ? daysLeft : 0;
    }

    updateCountdown();
    setInterval(updateCountdown, 86400000); // Update daily
});

