const taskForm =
document.getElementById("taskForm");

const taskContainer =
document.getElementById("taskContainer");

let tasks =
JSON.parse(localStorage.getItem("tasks"))
|| [];

renderTasks();

taskForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const task = {

        id: Date.now(),

        name:
        document.getElementById("taskName").value,

        course:
        document.getElementById("course").value,

        priority:
        document.getElementById("priority").value,

        deadline:
        document.getElementById("deadline").value,

        completed:false
    };

    tasks.push(task);

    saveTasks();

    renderTasks();

    taskForm.reset();
});

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function renderTasks(){

    taskContainer.innerHTML="";

    tasks.forEach(task=>{

        const div =
        document.createElement("div");

        div.className =
        task.completed
        ? "task completed"
        : "task";

        div.innerHTML = `

        <div class="task-info">

            <strong>${task.name}</strong>

            <span>Curso: ${task.course}</span>

            <span>Prioridad: ${task.priority}</span>

            <span>Entrega: ${task.deadline}</span>

        </div>

        <div class="actions">

            <button
            class="complete-btn"
            onclick="toggleTask(${task.id})">

            <i class="fa-solid fa-check"></i>

            </button>

            <button
            class="delete-btn"
            onclick="deleteTask(${task.id})">

            <i class="fa-solid fa-trash"></i>

            </button>

        </div>

        `;

        taskContainer.appendChild(div);

    });

}

function toggleTask(id){

    tasks = tasks.map(task=>{

        if(task.id===id){

            task.completed =
            !task.completed;
        }

        return task;
    });

    saveTasks();

    renderTasks();
}

function deleteTask(id){

    tasks =
    tasks.filter(task=>task.id!==id);

    saveTasks();

    renderTasks();
}