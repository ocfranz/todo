function drag( container, event){
    event.dataTransfer.setData('Data', container.id);
    if(container.className == "task-main"){
        document.getElementById("doing").classList.add("allowDrop");
    }
    else{
        
    }
    
    

}

function drop(target, event){
    var data = event.dataTransfer.getData('Data');
    console.log(data);
    target.appendChild(document.getElementById(data));
    document.getElementById("doing").classList.remove("allowDrop");
    var doing = document.getElementById("doing-body");
    var number_task_doing = document.getElementById("number-task-doing");
    var number = doing.getElementsByTagName("div").length;
    console.log(number);
    number_task_doing.textContent = number;
    //Add doing tag
    var array_task = doing.getElementsByTagName("div");
    for( var i = 0; i<array_task.length; i++){
        array_task[i].classList.add("doing-task");
    }
}




function addTask(event){
    var input = document.getElementById("task-des");
    if(input.value != ""){
        if(event.which == 13 ||event.keyCode == 13){
            var task = document.createElement("div");
            task.innerHTML=
                '<div class="task-main" id="task-item" draggable="true" ondragstart="drag(this, event)"><span>'+input.value+'</span></div>';
    
            document.getElementById("todo-body").appendChild(task);
            
            input.value = "";
            
        }
    }
}
function launchAdd(){
    
    document.getElementById("new-task").classList.add("task-after");
}
