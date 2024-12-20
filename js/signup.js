let userNameInput = document.getElementById("userNameInput");
let userEmailInput = document.getElementById("userEmailInput");
let userPassInput = document.getElementById("userPassInput");
let buttonSignUp = document.getElementById("buttonSignUp");
let alertSuccess = document.getElementById("alertSuccess");
let alertEmail = document.getElementById("alertEmail");
let alertInvalidInput = document.getElementById("alertInvalidInput"); 
let alertInvalidName = document.getElementById("alertInvalidName"); 
let alertInvalidEmail = document.getElementById("alertInvalidEmail"); 
let alertInvalidPassword = document.getElementById("alertInvalidPassword"); 
let arrUser = [];
// Check for existing user data in localStorage
if (localStorage.getItem("informationUser") !== null) {
    arrUser = JSON.parse(localStorage.getItem("informationUser"));
    console.log(arrUser);
}
// Validation patterns
const nameRegex = /^[a-zA-Z\s'-]{1,50}$/; 
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
buttonSignUp.addEventListener("click", function () {
    const nameValue = userNameInput.value.trim();
    const emailValue = userEmailInput.value.trim();
    const passwordValue = userPassInput.value.trim();
    alertInvalidName.classList.add("d-none");
    alertInvalidEmail.classList.add("d-none");
    alertInvalidPassword.classList.add("d-none");
    alertInvalidInput.classList.add("d-none"); 
    if (!nameRegex.test(nameValue)) {
        alertInvalidName.classList.remove("d-none"); 
        return;
    }
    if (arrUser.find((person) => person.userEmailInput === emailValue)) {
        alertEmail.classList.remove("d-none"); 
        return;
    }
    if (!emailRegex.test(emailValue)) {
        alertInvalidEmail.classList.remove("d-none");
        return;
    }
    if (!passwordRegex.test(passwordValue)) {
        alertInvalidPassword.classList.remove("d-none"); 
        return;
    }
    let user = {
        userNameInput: nameValue,
        userEmailInput: emailValue,
        userPassInput: passwordValue,
    };
    arrUser.push(user);
    console.log(arrUser);
    localStorage.setItem("informationUser", JSON.stringify(arrUser));
    alertEmail.classList.add("d-none");
    alertInvalidInput.classList.add("d-none");
    alertInvalidName.classList.add("d-none");
    alertInvalidEmail.classList.add("d-none");
    alertInvalidPassword.classList.add("d-none");
    alertSuccess.classList.remove("d-none");
    setTimeout(function () {
        window.location.href = "index.html";
    }, 2000);
});
