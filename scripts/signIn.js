let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function(e) {
    e.preventDefault(); 
    let enteredUser = document.getElementById("fname").value;
    let enteredPass = document.getElementById("password").value;

    let storedUser = getCookie("savedUsername");
    let storedPass = getCookie("savedPassword");

    if (storedUser === "" || storedPass === "") {
        alert("User not found, please Sign Up first.");
        window.location.href = "./pages/signUp.html"; 
    } 
    else if (enteredUser === storedUser && enteredPass === storedPass) {
        window.location.href = "./pages/home.html"; 
    } 
    else {
        alert("Wrong username or password.");
    }
});