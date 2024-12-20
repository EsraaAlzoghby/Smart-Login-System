let TextWelcome = document.getElementById("TextWelcome")
if(localStorage.getItem("userName")){
    let userName = localStorage.getItem("userName")
TextWelcome.innerHTML = `Welcome ${userName}`
}
else{
    TextWelcome.innerHTML = "you are not logged in  to login page"
    setTimeout(function(){
        window.location.href ="index.html"
    } ,2000)
}


