const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    if(username.trim() === "" || password.trim() === ""){

        document.getElementById("message").textContent =
        "Complete todos los campos";

        return;
    }

    localStorage.setItem("usuario", username);

    window.location.href = "dashboard.html";
});