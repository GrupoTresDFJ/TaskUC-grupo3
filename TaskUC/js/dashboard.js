const usuario = localStorage.getItem("usuario");

if(!usuario){
    window.location.href = "login.html";
}

document.getElementById("welcomeMessage").textContent =
`Bienvenido, ${usuario}`;

const tareas =
JSON.parse(localStorage.getItem("tasks")) || [];

const total = tareas.length;

const completadas =
tareas.filter(t => t.completed).length;

const pendientes =
total - completadas;

document.getElementById("totalTasks").textContent =
total;

document.getElementById("completedTasks").textContent =
completadas;

document.getElementById("pendingTasks").textContent =
pendientes;

document.getElementById("logoutBtn")
.addEventListener("click", () => {

    localStorage.removeItem("usuario");

    window.location.href = "login.html";
});