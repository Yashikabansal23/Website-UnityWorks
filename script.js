let menuIcon = document.getElementById("menu-icon");
let navLinks = document.querySelector(".nav-link");

menuIcon.addEventListener("click", function () {
  navLinks.classList.toggle("open");
  menuIcon.classList.toggle("fa-xmark");
});


// Line 1: Find the "Learn More" button
let learnMoreBtn = document.getElementById("learn-more-btn");

// Line 2: Find the Programs section
let programsSection = document.getElementById("programs");

// Line 3: When button is clicked, run this function
learnMoreBtn.addEventListener("click", function(e) {

    // Line 4: Stop the page from jumping (default link behavior)
    e.preventDefault();

    // Line 5: Smoothly scroll to the programs section
    programsSection.scrollIntoView({ behavior: "smooth" });

});


// ---- Step 3: Scroll Animations ----

// Line 1: Grab ALL elements that have the "fade-in" class
let fadeElements = document.querySelectorAll(".fade-in");

// Line 2: Create an IntersectionObserver — it watches elements
let observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            // ADD THIS LINE — removes "visible" when section leaves screen
            entry.target.classList.remove("visible");
        }
    });
}, { threshold: 0.2 });

// Line 7: Tell the observer to watch every fade-in element
fadeElements.forEach(function(el) {
    observer.observe(el);
});

// ---- Step 4: Testimonial Slider ----

// Line 1: Grab all testimonial cards
let testimonials = document.querySelectorAll(".testimonials-col");

// Line 2: Grab the prev and next buttons
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");

// Line 3: Track which testimonial is currently showing
let currentIndex = 0;

// Line 4: This function shows only ONE testimonial at a time
function showTestimonial(index) {
    // Remove "active" from ALL testimonials first
    testimonials.forEach(function(t) {
        t.classList.remove("active");
    });
    // Add "active" only to the current one
    testimonials[index].classList.add("active");
}

// Line 5: Show the first one when page loads
showTestimonial(currentIndex);

// Line 6: Next button clicked
nextBtn.addEventListener("click", function() {
    currentIndex++;
    // If we go past the last one, go back to first
    if (currentIndex >= testimonials.length) {
        currentIndex = 0;
    }
    showTestimonial(currentIndex);
});

// Line 7: Previous button clicked
prevBtn.addEventListener("click", function() {
    currentIndex--;
    // If we go before the first one, jump to last
    if (currentIndex < 0) {
        currentIndex = testimonials.length - 1;
    }
    showTestimonial(currentIndex);
});

// Line 8: Auto slide every 3 seconds
let autoSlide = setInterval(function() {
    currentIndex++;
    if (currentIndex >= testimonials.length) {
        currentIndex = 0;
    }
    showTestimonial(currentIndex);
}, 3000);


// ---- Step 5: Back to Top Button ----

// Line 1: Grab the button
let backToTopBtn = document.getElementById("back-to-top");

// Line 2: Watch the page as user scrolls
window.addEventListener("scroll", function() {

    // Line 3: If user scrolled more than 300px down
    if (window.scrollY > 300) {

        // Line 4: Show the button
        backToTopBtn.style.display = "block";

    } else {

        // Line 5: Hide the button
        backToTopBtn.style.display = "none";
    }
});

// Line 6: When button is clicked, scroll to top smoothly
backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ---- Step 6: Sticky Navbar ----

// Line 1: Grab the navbar
let navbar = document.querySelector("nav");

// Line 2: Save the navbar's original position on the page
let navbarTop = navbar.offsetTop;

// Line 3: Watch the page as user scrolls
window.addEventListener("scroll", function() {

    // Line 4: If user scrolled past the navbar's original position
    if (window.scrollY > navbarTop + 250) {

        // Line 5: Add sticky class — navbar sticks to top
        navbar.classList.add("sticky");

    } else {

        // Line 6: Remove sticky class — navbar goes back to normal
        navbar.classList.remove("sticky");
    }
});