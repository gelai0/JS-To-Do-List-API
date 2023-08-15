//inputs
let taskInp = document.querySelector("#task");
let date = document.querySelector("#date");

//button
let taskBtn = document.querySelector("#taskBtn");

let toDo = JSON.parse(localStorage.getItem("entries"));

let getId = localStorage.getItem("id");

let taskList = document.querySelector("#taskList ");

let id = "";


if(getId == null) {
    localStorage.setItem("id", 0);
    id = 0;
}else {
    id = localStorage.getItem("id");
}               


if(toDo == null) {
    toDo = [];
    taskList.innerHTML =` <tr><p class= "noTask">No task</p></tr>`
} else if (toDo == " ") {
    taskList.innerHTML = `<tr><p class= "noTask">No task</p></tr>`
}
  else {
let data = "";


toDo.forEach(x => {
    data +=`
    <tr>
    <td>${x.task}</td>
    <td>${x.date}</td>
    <td><button data-id="${x.id}" class="deleteBtn" onclick="deleteBtn('${x.id}')">Delete</button>
    </tr>
    `
});
taskList.innerHTML = data;
}

let deleteButtons;
// the add task button
taskBtn.addEventListener("click", ()  => {


    let toDoList = JSON.parse(localStorage.getItem("entries"));
    let taskList = document.querySelector("#taskList ");
        
    
    if (toDoList == null) {
        toDoList   =  [];
    } 
    if (document.getElementsByClassName("noTask")[0]) {
        document.getElementsByClassName("noTask")[0].style.display = "none"
    }
    let Id =  localStorage.getItem("id");
    localStorage.setItem("id",parseInt(Id) + 1);

    //task object 

    let task = { 
        task: taskInp.value, 
        date: date.value,
        id: Id
    }
    
    toDoList.push(task);

    

    localStorage.setItem("entries",JSON.stringify
    (toDoList));

    
    let data = "";
    toDoList.forEach(x => {
    data += `
    <tr>
    <td>${x.task}</td>
    <td>${x.date}</td>
    <td><button data-id="${x.id}" class="deleteBtn" onclick="deleteBtn('${ x.id }')">Delet</button>
    </tr>
    `
    
})
taskList.innerHTML = data;
})


function deleteBtn(idrem) {
    // let deleteBtn = document.querySelector("#delBtn");
    let toDoList = JSON.parse(localStorage.getItem("entries"));
            let newTodo = toDoList.filter(x => {
                return parseInt(x.id) !== parseInt(idrem) 
            })
           localStorage.setItem("entries",JSON.stringify(newTodo));
    
           let data = "";
           newTodo.forEach(x => {
           data += `
               <tr>
               <td>${x.task}</td>
               <td>${x.date}</td>
               <td>
               <button data-id="${x.id}" class="deleteBtn" onclick="deleteBtn('${x.id}')">Delete</button>
               </tr>
           `
           
       })
       taskList.innerHTML = data;

        if (newTodo == "")  {
        taskList.innerHTML =` <tr><p class= "noTask">No task</p></tr>`;
    }
}

