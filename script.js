document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Parallax effect
    window.addEventListener("scroll", function () {
        document.querySelectorAll(".parallax").forEach(parallax => {
            let offset = window.pageYOffset;
            let speed = parallax.getAttribute("data-speed") || 0.5;
            parallax.style.backgroundPositionY = -(offset * speed) + "px";
        });
    });

    // Change images based on screen size
    function updateImages() {
        if (window.Width < 768) {
            document.getElementById("munnar").style.backgroundImage = "url('images/munnar-mobile.jpeg')";
            document.getElementById("alleppey").style.backgroundImage = "url('images/alleppey-mobile.jpg')";
            document.getElementById("wayanad").style.backgroundImage = "url('images/wayanad-mobile.jpg')";
            document.getElementById("kovalam").style.backgroundImage = "url('images/kovalam-mobile.jpg')";
            document.getElementById("thekkady").style.backgroundImage = "url('images/thekkady-mobile.jpg')";
        } else {
            document.querySelectorAll(".parallax").forEach(section => {
                let desktopImage = section.getAttribute("data-desktop");
                section.style.backgroundImage = `url(${desktopImage})`;
            });
        }
    }

    window.addEventListener("resize", updateImages);
    updateImages();

    // Button hover effect with visible border
    document.querySelectorAll(".btn").forEach(button => {
        button.style.border = "2px solid rgba(255, 255, 255, 0.81)";
        button.style.color = "#fff";
        button.style.background = "transparent";
        button.style.padding = "10px 20px";
        button.style.borderRadius = "5px";
        button.style.transition = "all 0.3s ease";
        
        button.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1)";
            this.style.background = "rgba(255, 255, 255, 0.2)";
        });
        button.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.background = "transparent";
        });
    });

    // Form submission handling
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
        this.reset();
    });

    // Change background image for contact section dynamically
    document.querySelector(".contact").style.backgroundImage = "url('images/contact-bg.jpg')";
});