let signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click", function(e) {
    e.preventDefault(); 

    let userInput = document.getElementById("fname").value;
    let passInput = document.getElementById("password").value;

    if(userInput === "" || passInput === "") {
        alert("You should enter your username and password");
        return; 
    }
    if (passInput.length <= 8) {
        alert("Your Password should more than 8");
        return;
    }

    if (!/\d/.test(passInput)) {
        alert("Your password should contain numbers");
        return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(passInput)) {
        alert("Your password should contain special charcaters");
        return;
    }

    let lettersCount = (passInput.match(/[a-zA-Z]/g) || []).length;
    if (lettersCount < 3) {
        alert("Your password should contain at least 3 letters");
        return;
    }
    setCookie("savedUsername", userInput, 7);
    setCookie("savedPassword", passInput, 7);
    
    alert("You sign up successfully you will redirecting to login page ....");
    window.location.href = "../index.html"; 
});