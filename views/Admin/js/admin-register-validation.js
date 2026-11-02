var registerForm = document.getElementById("register-container");

var registerMessage = document.getElementById("register-message");


// Display Error Message
function showError(errorId, message) {

    document.getElementById(errorId).innerHTML = message;

}


// Clear All Error Messages
function clearErrors() {

    document.getElementById("fullname-error").innerHTML = "";
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("phone-error").innerHTML = "";
    document.getElementById("password-error").innerHTML = "";
    document.getElementById("confirm-password-error").innerHTML = "";

}


// 1. Name Validation
function validateName() {

    var name = document.getElementById("fullname").value.trim();

    var namePattern = /^[A-Za-z ]+$/;

    if (name === "") {

        showError("fullname-error", "Name cannot be empty.");
        return false;

    }
    else if (!namePattern.test(name)) {

        showError("fullname-error", "Name should contain only letters.");
        return false;

    }

    return true;

}


// 2. Email Validation
function validateEmail() {

    var email = document.getElementById("email").value.trim();

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        showError("email-error", "Email cannot be empty.");
        return false;

    }
    else if (!emailPattern.test(email)) {

        showError("email-error", "Enter a valid email address.");
        return false;

    }

    return true;

}


// 3. Phone Number Validation
function validatePhone() {

    var phone = document.getElementById("phone").value.trim();

    var phonePattern = /^[0-9]{11}$/;

    if (phone === "") {

        showError("phone-error", "Phone number cannot be empty.");
        return false;

    }
    else if (!phonePattern.test(phone)) {

        showError("phone-error", "Phone number must contain exactly 11 digits.");
        return false;

    }

    return true;

}


// 4. Password Validation
function validatePassword() {

    var password = document.getElementById("password").value;

    var numberPattern = /[0-9]/;

    if (password === "") {

        showError("password-error", "Password cannot be empty.");
        return false;

    }
    else if (password.length < 6 || !numberPattern.test(password)) {

        showError("password-error", "Password must contain at least 6 characters and one number.");
        return false;

    }

    return true;

}


// 5. Confirm Password Validation
function validateConfirmPassword() {

    var password = document.getElementById("password").value;

    var confirmPassword = document.getElementById("confirm-password").value;

    if (confirmPassword === "") {

        showError("confirm-password-error", "Please confirm your password.");
        return false;

    }
    else if (password !== confirmPassword) {

        showError("confirm-password-error", "Passwords do not match.");
        return false;

    }

    return true;

}


// Validate All Registration Fields
function validateRegistration() {

    clearErrors();

    registerMessage.innerHTML = "";

    var isValid = true;


    if (!validateName()) {
        isValid = false;
    }

    if (!validateEmail()) {
        isValid = false;
    }

    if (!validatePhone()) {
        isValid = false;
    }

    if (!validatePassword()) {
        isValid = false;
    }

    if (!validateConfirmPassword()) {
        isValid = false;
    }


    return isValid;

}


// Form Submit Event
registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (validateRegistration()) {

        registerMessage.style.color = "green";

        registerMessage.innerHTML = "Registration Successful!";

    }

});


// Input Event: Clear Error When User Starts Correcting a Field
registerForm.addEventListener("input", function (event) {

    var errorId = event.target.id + "-error";

    var errorElement = document.getElementById(errorId);

    if (errorElement) {
        errorElement.innerHTML = "";
    }

    registerMessage.innerHTML = "";

});


// Change Event: Validate a Field After Editing
registerForm.addEventListener("change", function (event) {

    registerMessage.innerHTML = "";

    if (event.target.id === "fullname") {
        validateName();
    }
    else if (event.target.id === "email") {
        validateEmail();
    }
    else if (event.target.id === "phone") {
        validatePhone();
    }
    else if (event.target.id === "password") {
        validatePassword();
    }
    else if (event.target.id === "confirm-password") {
        validateConfirmPassword();
    }

});


// Back to Top Click Event
var backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton) {

    backToTopButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}