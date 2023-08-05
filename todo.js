const container = document.getElementById("container");
const todoItempInput = container.children[0];
const timeInput = container.children[1];
const todoContainer = document.getElementById("todos-container")


function addTodo(){
    let todoText = todoItempInput.value.trim(); 
    // trim function added to avoid capture of multiple spaces
    let time = timeInput.value;
    let div = document.createElement("div");
    div.className = "todo-item";
    let b = document.createElement("b");
    let span = document.createElement("span");
    b.innerText = todoText;
    span.innerText = time;
    console.log(todoText);

    if(todoText && time) {
        // then only add the item inside, means both are there
        div.appendChild(b);
        div.appendChild(span);
        todoContainer.appendChild(div);
    }
}

 