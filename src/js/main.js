
function addTask(event){
    var input = document.getElementById("task-des");
    if(input.value != ""){
        if(event.which == 13 ||event.keyCode == 13){
            var task = document.createElement("div");
            
            
            
    
            task.innerHTML=
                '<div class="task-main" id="task-item" draggable="true" onclick="selectTask(event)"><span>'+input.value+'</span></div>';
    
            document.getElementById("todo-body").appendChild(task);
            
            input.value = "";
            
        }
    }
}
function launchAdd(){
    
    document.getElementById("new-task").classList.add("task-after");
}

function selectTask(event){
    var div = document.getElementById("task-item");
    //Delete Task using SUPR
}