function todo() {
    //alert("todo");

	contentAreaDiv = document.getElementById("contentArea");
	contentAreaDiv.innerHTML = "";

    todoDiv = document.createElement("div");
    todoDiv.style.backgroundColor="#222";
    todoDiv.setAttribute("class","todo");
    todoDiv.style.paddingTop="10px";
    todoDiv.style.paddingLeft="100px";
    
    inputObj = document.createElement("input");
    inputObj.setAttribute("id","todoInput");
    inputObj.onchange = todoAdd;
    inputObj.style.width="600px";
    inputObj.style.fontSize = "32px";
    //inputObj.style.backgroundColor = "#aaa";
    //inputObj.style.color = "#fff";
    // addButton = document.createElement("button");
    // addButton.textContent="添加";
    // addButton.onclick=todoAdd;

    todoListDiv = document.createElement("div");
    todoListDiv.setAttribute("id","todoList");
    todoListDiv.style.color="white";
    todoListDiv.style.fontSize="24px";
    

    todoDiv.appendChild(inputObj);
    //todoDiv.appendChild(addButton);
    todoDiv.appendChild(todoListDiv);
    contentAreaDiv.appendChild(todoDiv);

    todoInitList(); // 初始化todo列表

}

function todoAdd(){
    inputObj = document.getElementById("todoInput");

    if (inputObj.value.length > 0) {
        todoToDiv(inputObj.value);
        todoToStorage(inputObj.value);

        inputObj.value="";
    }

}

function todoDel(e){
    parentObj = e.target.parentNode;
    
    todoContent = parentObj.getElementsByTagName("span")[0].textContent;
    console.log(todoContent);
    parentObj.remove(e.target);
    todoToDel(todoContent);
    //console.log(e.target.parentNode);
    

}

function todoInitList(){
    todoStorageKey = "todoList";
    localTodoList = [];
    localTodoListJson = localStorage.getItem(todoStorageKey)
    //console.log(localTodoListJson,localTodoListJson == null, typeof(localTodoListJson));
    if ( typeof(localTodoListJson) == "string" && localTodoListJson.length > 0) {
        localTodoList = JSON.parse(localTodoListJson);

        for(i in localTodoList) {
            //console.log(i,localTodoList[i]);
            todoToDiv(localTodoList[i]);
        }

    }
}

function todoToDiv(strContent){
    todoListDiv = document.getElementById("todoList");

    todoListDiv.style.marginTop = "20px";
    todoItemDiv = document.createElement("div");
    todoItemDiv.style.padding = "5px";

    pObj = document.createElement("span");
    pObj.textContent = strContent

    delOpt = document.createElement("span");
    delOpt.textContent = "×";
    delOpt.style.margin="1em";
    delOpt.style.cursor = "pointer";
    delOpt.onclick = todoDel
    

    todoItemDiv.appendChild(pObj);
    todoItemDiv.appendChild(delOpt);

    todoListDiv.appendChild(todoItemDiv);
}

function todoToStorage(strContent){
    todoStorageKey = "todoList";
    localTodoList = [];
    localTodoListJson = localStorage.getItem(todoStorageKey)
    console.log(localTodoListJson);
    if (typeof(localTodoListJson) == "string" && localTodoListJson.length > 0) {
        localTodoList = JSON.parse(localTodoListJson);
    }

    localTodoList.push(strContent)
    
    localTodoListJson = JSON.stringify(localTodoList);

    localStorage.setItem(todoStorageKey, localTodoListJson);

    // console.log(localTodoList);
}

function todoToDel(strContent){
    todoStorageKey = "todoList";
    localTodoList = [];
    localTodoListJson = localStorage.getItem(todoStorageKey)
    if (localTodoListJson.length > 0) {
        localTodoList = JSON.parse(localTodoListJson);
    }

    localTodoListNew = [];

    for (i in localTodoList) {
        if (strContent == localTodoList[i]) {
            //localTodoList.remove(strContent);
            console.log(strContent,  localTodoList[i]);
        } else {
            localTodoListNew.push(localTodoList[i]);
        }
    }

    localTodoList =  localTodoListNew;

    //localTodoList.push(strContent)
    
    localTodoListJson = JSON.stringify(localTodoList);

    localStorage.setItem(todoStorageKey, localTodoListJson);

    //console.log(localTodoList);
}