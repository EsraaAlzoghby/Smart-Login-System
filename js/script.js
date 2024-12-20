let userEmailInput = document.getElementById("userEmailInput");
let userPassInput = document.getElementById("userPassInput");
let buttonLogin = document.getElementById("buttonLogin");
let alertSuccessHome = document.getElementById("alertSuccessHome");
let alertEmailIncorrect = document.getElementById("alertEmailIncorrect");
let alertInvalidEmail = document.getElementById("alertInvalidEmail"); 
let alertInvalidPassword = document.getElementById("alertInvalidPassword"); 
let arrUser = [];
// Load stored user information from localStorage
if (localStorage.getItem("informationUser") !== null) {
    arrUser = JSON.parse(localStorage.getItem("informationUser"));
}
// Validation patterns
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
buttonLogin.addEventListener("click", function () {
    const emailValue = userEmailInput.value.trim();
    const passwordValue = userPassInput.value.trim();
    alertInvalidEmail.classList.add("d-none");
    alertInvalidPassword.classList.add("d-none");
    // Validate inputs
    if (!emailRegex.test(emailValue)) {
        alertInvalidEmail.classList.remove("d-none"); 
        alertEmailIncorrect.classList.add("d-none"); 
        alertSuccessHome.classList.add("d-none"); 
        return; 
    }
    if (!passwordRegex.test(passwordValue)) {
        alertInvalidPassword.classList.remove("d-none"); 
        alertEmailIncorrect.classList.add("d-none"); 
        alertSuccessHome.classList.add("d-none"); 
        return; 
    }
    for (let i = 0; i < arrUser.length; i++) {
        if (
            arrUser[i].userEmailInput === emailValue &&
            arrUser[i].userPassInput === passwordValue
        ) {
            alertSuccessHome.classList.remove("d-none");
            alertEmailIncorrect.classList.add("d-none");
            alertInvalidEmail.classList.add("d-none"); 
            alertInvalidPassword.classList.add("d-none"); 
            localStorage.setItem("userName", arrUser[i].userNameInput);
            setTimeout(function () {
                window.location.href = "home.html";
            }, 2000);
            return; 
        }
    }
    alertEmailIncorrect.classList.remove("d-none");
    alertSuccessHome.classList.add("d-none");
    alertInvalidEmail.classList.add("d-none"); 
    alertInvalidPassword.classList.add("d-none");
});
