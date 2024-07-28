document.addEventListener("DOMContentLoaded", function() {
    // Search functionality
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    searchButton.addEventListener("click", function() {
        const query = searchInput.value.trim().toLowerCase();
        const destinations = [
            "Taj Mahal, Agra",
            "Jaipur, Rajasthan",
            "Goa Beaches"
        ];
        const results = destinations.filter(destination => 
            destination.toLowerCase().includes(query)
        );

        searchResults.innerHTML = results.length ? 
            results.map(result => `<div class="result-item">${result}</div>`).join('') : 
            "<div class='result-item'>No results found</div>";
    });

    // Booking Modal form submission
    const bookingForm = document.getElementById("booking-form");
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission to server

        // Collect form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const destination = document.getElementById("destination").value;

        // Display confirmation message or handle form data
        alert(`Booking confirmed!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDestination: ${destination}`);

        // Clear form fields
        bookingForm.reset();
        $('#booking-modal').modal('hide'); // Hide modal after submission
    });

    // Login Modal form submission
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission to server

        // Collect form data
        const loginEmail = document.getElementById("login-email").value;
        const loginPassword = document.getElementById("login-password").value;

        // Display confirmation message or handle login data
        alert(`Login attempt!\nEmail: ${loginEmail}\nPassword: ${loginPassword}`);

        // Clear form fields
        loginForm.reset();
        $('#login-modal').modal('hide'); // Hide modal after submission
    });

    // Toggle modals
    const loginLink = document.getElementById("login-link");
    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        $('#login-modal').modal('show');
    });
});

document.querySelectorAll('.booking-btn').forEach(button => {
    button.addEventListener("click", function() {
        $('#booking-modal').modal('show');
    });
});
// Add the destination name to the booking modal form input
document.querySelectorAll('.booking-btn').forEach(button => {
    button.addEventListener('click', () => {
        const featureBox = button.closest('.feature-box');
        const destination = featureBox.getAttribute('data-destination');
        document.getElementById('destination').value = destination;
    });
});






