
function drag( container, event){
    event.dataTransfer.setData('Data', container.id);
    if(container.className == "task-main"){
        document.getElementById("doing").classList.add("allowDropDoing");
    }
    else{
        document.getElementById("done").classList.add("allowDropDone");
    }

}

function drop(target, event){
    var data = event.dataTransfer.getData('Data');
    
    //To do ==> Done 

    if(document.getElementById(data).classList == "task-main" && target.id == "done-body"){
        alert(" Cannot add here");
        document.getElementById("doing").classList.remove("allowDropDoing");
    }
    else{
        //To do ==> Doing 
        if(document.getElementById(data).classList != "task-main doing-task"){
            target.appendChild(document.getElementById(data));
            document.getElementById("doing").classList.remove("allowDropDoing");
            
             //Add doing tag
            var doing = document.getElementById("doing-body");
            var array_task = doing.getElementsByTagName("div");
            for( var i = 0; i<array_task.length; i++){
                array_task[i].classList.add("doing-task");
            }
        }
        //Doing ==> Done
        else{
            target.appendChild(document.getElementById(data));
            document.getElementById("done").classList.remove("allowDropDone");
            
           
        }
    }

    //updating number of tasks
    var doing = document.getElementById("doing-body");
    var number_task_doing = document.getElementById("number-task-doing");
    var number = doing.getElementsByTagName("div").length; 
    number_task_doing.textContent = number;

    var done = document.getElementById("done-body");
    var number_task_done = document.getElementById("number-task-done");
    var number = done.getElementsByTagName("div").length;
    number_task_done.textContent = number;

}

function addTask(event){
    var new_container = document.getElementById("new-task");
    var t_title = document.getElementById("task-title");
    var t_desc = document.getElementById("task-description");
    var description = "No description";
    if(t_title.value != "" ){
        if(event.which == 13 ||event.keyCode == 13){
            if(t_desc.value != ""){
                description = t_desc.value;
            }
            var task = document.createElement("div");
            var nodeString = '<div class="task-main" id="task-item" draggable="true" ondragstart="drag(this, event)">'
                                    +'<span class="t-title"> <strong>'+t_title.value+'</strong></span><br>'
                                    +'<span class="t-description">'+description+'<span>'
                                +'</div>';

            task.innerHTML= nodeString;
            document.getElementById("todo-body").appendChild(task);
            t_title.value = "";
            t_desc.value = "";
           
        }
    }
}
function launchAdd(){
    document.getElementById("new-task").classList.add("task-after");
    loadColors();
}


function loadColors(){
    var colors = document.getElementsByClassName("color");
    
    for(var i=0; i<colors.length; i++){
        var color = colors[i].getAttribute("data-value");
        console.log(color);
        colors[i].style.backgroundColor = color;
       
    }
    
}

