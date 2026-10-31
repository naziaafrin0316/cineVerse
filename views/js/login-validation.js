var loginForm = document.getElementById("login-container");
var loginMessage = document.getElementById("login-message");

function validateLogin(event) {

    event.preventDefault();

    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var role = document.getElementById("role").value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var errors = "";

    // Email Validation
    if (email === "") {
        errors += "Email cannot be empty.<br>";
    }
    else if (!emailPattern.test(email)) {
        errors += "Enter a valid email address.<br>";
    }

    // Password Validation
    if (password.trim() === "") {
        errors += "Password cannot be empty.<br>";
    }
    else if (password.trim().length < 6) {
        errors += "Password must contain at least 6 characters.<br>";
    }

    // User Category Validation
    if (role === "") {
        errors += "Please select a user category.<br>";
    }

    // Display Validation Messages
    if (errors !== "") {
        loginMessage.style.color = "#e50914";
        loginMessage.innerHTML = errors;
    }
    else {
        loginMessage.style.color = "green";
        loginMessage.innerHTML = "All login fields are valid!";
    }
}


// Submit Event
loginForm.addEventListener("submit", validateLogin);


// Clear messages when fields change
loginForm.addEventListener("input", function () {
    loginMessage.innerHTML = "";
});

loginForm.addEventListener("change", function () {
    loginMessage.innerHTML = "";
});


// Back to Top Button
var backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton) {

    backToTopButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}