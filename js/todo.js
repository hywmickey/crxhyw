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
        todoToDiv(-1,inputObj.value);
        todoToStorage(inputObj.value);

        inputObj.value="";
    }

}

function todoUp(e) {

    parentObj = e.target.parentNode;

    dataNo = parseInt(parentObj.getAttribute('data-no'));
    
    // 避免越界
    if (dataNo == 0) {
        return
    }

    // 当前todo的内容
    curTodo = parentObj.parentNode.childNodes[dataNo];
    curTodoText = curTodo.getElementsByTagName("span")[0].textContent;
    //console.log( curTodo,curTodo.getElementsByTagName("span")[0].textContent);
    // 上个todo的内容
    preTodo = parentObj.parentNode.childNodes[dataNo-1];
    
    // 交换两个todo的内容
    curTodo.getElementsByTagName("span")[0].textContent = preTodo.getElementsByTagName("span")[0].textContent;

    preTodo.getElementsByTagName("span")[0].textContent = curTodoText;

    // 保存顺序
    todoContentList = [];
    for(i = 0; i < parentObj.parentNode.childElementCount; i++) {
        todoContentList.push(parentObj.parentNode.childNodes[i].getElementsByTagName("span")[0].textContent);
    }
    // 存储数据
    localStorage.setItem("todoList",JSON.stringify(todoContentList));
    
}


function todoDown(e) {
    parentObj = e.target.parentNode;

    dataNo = parseInt(parentObj.getAttribute('data-no'));
    
    // 避免越界
    if (dataNo == parentObj.parentNode.childElementCount-1) {
        return
    }

    // 当前todo的内容
    curTodo = parentObj.parentNode.childNodes[dataNo];
    curTodoText = curTodo.getElementsByTagName("span")[0].textContent;
    //console.log( curTodo,curTodo.getElementsByTagName("span")[0].textContent);
    // 下个todo的内容
    nextTodo = parentObj.parentNode.childNodes[dataNo+1];
    
    // 交换两个todo的内容
    curTodo.getElementsByTagName("span")[0].textContent = nextTodo.getElementsByTagName("span")[0].textContent;

    nextTodo.getElementsByTagName("span")[0].textContent = curTodoText;

    // 保存顺序
    todoContentList = [];
    for(i = 0; i < parentObj.parentNode.childElementCount; i++) {
        todoContentList.push(parentObj.parentNode.childNodes[i].getElementsByTagName("span")[0].textContent);
    }
    // 存储数据
    localStorage.setItem("todoList",JSON.stringify(todoContentList));
    
}

function todoDel(e){
    parentObj = e.target.parentNode;
    
    todoContent = parentObj.getElementsByTagName("span")[0].textContent;
    
    if(confirm("确定删除【"+todoContent+"】吗？")){
        //console.log(todoContent);
        parentObj.remove(e.target);
        todoToDel(todoContent);
    }
    

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
            todoToDiv(i,localTodoList[i]);
        }

    }
}

function todoToDiv(orderNo, strContent){
    todoListDiv = document.getElementById("todoList");

    todoListDiv.style.marginTop = "20px";
    todoItemDiv = document.createElement("div");
    todoItemDiv.style.padding = "5px";

    if (orderNo <=0 ) {
        orderNo=todoListDiv.childElementCount;
    }

    todoItemDiv.setAttribute("data-no", orderNo);

    textObj = document.createElement("span");
    textObj.textContent = strContent;
    textObj.style.width="600px";
    textObj.style.display="inline-block";

    todoItemDiv.appendChild(textObj);


    upOpt = document.createElement("span");
    upOpt.textContent = " ↑ ";
    //upOpt.style.margin="1em";
    upOpt.style.cursor = "pointer";
    upOpt.onclick = todoUp
    todoItemDiv.appendChild(upOpt);

    downOpt = document.createElement("span");
    downOpt.textContent = " ↓ ";
    //downOpt.style.margin="1em";
    downOpt.style.cursor = "pointer";
    downOpt.onclick = todoDown
    todoItemDiv.appendChild(downOpt);


    delOpt = document.createElement("span");
    delOpt.textContent = " × ";
    //delOpt.style.margin="1em";
    delOpt.style.cursor = "pointer";
    delOpt.onclick = todoDel
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
            //console.log(strContent,  localTodoList[i]);
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