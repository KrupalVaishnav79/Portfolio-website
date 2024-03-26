
// (function () {
    
//     [...document.querySelectorAll(".control")].forEach(button => {
//         button.addEventListener("click", function() {
//             document.querySelector(".active-btn").classList.remove("active-btn");
//             this.classList.add("active-btn");
//             document.querySelector(".active").classList.remove("active");
//             document.getElementById(button.dataset.id).classList.add("active");
//         })
//     });
//     document.querySelector(".theme-btn").addEventListener("click", () => {
//         document.body.classList.toggle("light-mode");
//     })
// })();

// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     // Perform form validation and submit logic here
//     // If the form is valid and submitted successfully, redirect to the "thank-you.html" page
//     window.location.href = "Thank-you.html";
// });

// document.addEventListener('error', function(event) {
//     if (event.target.tagName === 'IMG' && event.target.src === '404.html') {
//         // Redirect to the "404.html" page
//         window.location.href = "404.html";
//     }
// });


(function () {
    // Navigation controls
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

    // Theme toggle button
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

    // Form submission logic
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Perform form validation and submit logic here
        // If the form is valid and submitted successfully, redirect to the "thank-you.html" page
        window.location.href = "Thank-you.html";
    });

    // Error handling for missing images
    document.addEventListener('error', function(event) {
        if (event.target.tagName === 'IMG' && event.target.src === '404.html') {
            // Redirect to the "404.html" page
            window.location.href = "404.html";
        }
    });
})();
