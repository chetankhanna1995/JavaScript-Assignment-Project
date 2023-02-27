let taskinput = document.querySelector(".task-input");
let inputBtn = document.querySelector(".input-btn");

let tasklist = document.querySelector("#tasklist")


inputBtn.addEventListener("click", addTask);

function addTask() {
    if (taskinput.value == "") {
        console.log(taskinput.value)
        alert("Enter a TODO List")
    }
    else {
        let tasks=document.querySelector(".tasks");

        let taskDiv=document.createElement("div");
        taskDiv.classList="task";

        let contentDiv=document.createElement("div");
        contentDiv.classlist="content";

        let taskinputElement=document.createElement("input");
        taskinputElement.classList="task-output";
        taskinputElement.type="text";
        taskinputElement.value=taskinput.value;
        taskinputElement.setAttribute("readonly","readonly");


        contentDiv.appendChild(taskinputElement)

         let actionDiv=document.createElement("div");
         actionDiv.classList="action";

         let editBtn=document.createElement("button");
         editBtn.classList="editBtn";
        editBtn.innerText="Edit";

        let deleteBtn=document.createElement("button")
        deleteBtn.classList="delBtn";
        deleteBtn.innerText="Delete";


        actionDiv.appendChild(editBtn);
        actionDiv.appendChild(deleteBtn);

        taskDiv.appendChild(contentDiv);
        taskDiv.appendChild(actionDiv);
        tasks.appendChild(taskDiv)

        taskinput.value="";
        
        editBtn.addEventListener("click", ()=>{
            if(editBtn.innerText.toLowerCase()=="edit"){
                taskinputElement.removeAttribute("readonly");
                editBtn.innerText="Save";
            }
            else{
                editBtn.innerHTML="Edit"
                taskinputElement.setAttribute("readonly","readonly");
            }
        })

        deleteBtn.addEventListener("click", ()=>{
            tasks.removeChild(taskDiv);
        })

    }
}
