function todo() {
	contentAreaDiv = document.getElementById("contentArea");
	contentAreaDiv.innerHTML = "";

    todoDiv = document.createElement("div");
    todoDiv.style.backgroundColor="#222";
    todoDiv.setAttribute("class","todo");
    //todoDiv.style.paddingTop="10px";
    todoDiv.style.padding="10px 50px";
    contentAreaDiv.appendChild(todoDiv);

    inputObj = document.createElement("input");
    inputObj.setAttribute("id","todoInput");
    inputObj.onchange = todoAdd;
    inputObj.style.width="660px";
    inputObj.style.fontSize = "32px";
    inputObj.setAttribute("placeholder","来添加一个todo吧");
    todoDiv.appendChild(inputObj);
    
    buttonObj = document.createElement("button");
    buttonObj.textContent ="批量编辑";
    buttonObj.style.backgroundColor = "#000";
    buttonObj.style.color="#fff";
    buttonObj.style.fontSize = "24px";
    buttonObj.style.marginLeft="20px";
    buttonObj.style.display="inline-box";
    buttonObj.onclick = todoEditBatch;
    todoDiv.appendChild(buttonObj);

    todoListDiv = document.createElement("div");
    todoListDiv.setAttribute("id","todoList");
    todoListDiv.style.color="white";
    todoListDiv.style.fontSize="20px";
    
    todoDiv.appendChild(todoListDiv);
    todoInitList(); // 初始化todo列表

}

function todoEditBatch() {
    todoStorageKey = "todoList";
    localTodoList = [];
    localTodoListJson = localStorage.getItem(todoStorageKey)
    if (localTodoListJson.length > 0) {
        localTodoList = JSON.parse(localTodoListJson);
    }
    //console.log(localTodoList.join("\n"));

    contentAreaDiv = document.getElementById("contentArea");

    editDivObj = document.createElement("div");
    editDivObj.style.width = (contentAreaDiv.offsetWidth-100)+"px";
    editDivObj.style.height = contentAreaDiv.offsetHeight+"px";
    //editDivObj.style.backgroundColor = "yellow";
    editDivObj.style.position = "absolute";
    editDivObj.style.left="50px";
    editDivObj.style.top="60px";
    //editDivObj.style.zIndex=1;


    editEreaObj = document.createElement("textarea");
    editEreaObj.setAttribute("id","todoBatchEdit");
    editEreaObj.style.display="block";
    editEreaObj.style.width=(contentAreaDiv.offsetWidth-110)+"px";
    
    //editEreaObjHeight = contentAreaDiv.offsetHeight > 500? 500:contentAreaDiv.offsetHeight ;
    editEreaObjHeight = 500;

    editEreaObj.style.height=editEreaObjHeight+"px";
    editEreaObj.style.margin="0 auto";
    editEreaObj.style.color="#fff";
    editEreaObj.style.backgroundColor="#000";
    editEreaObj.style.fontSize="20px";
    editEreaObj.value = "\n\n"+localTodoList.join("\n\n")+"\n\n";
    editDivObj.appendChild(editEreaObj);

    saveButtonObj = document.createElement("button");
    saveButtonObj.textContent = "保存";
    saveButtonObj.onclick = todoEditBatchSave;
    saveButtonObj.style.position="relative";
    saveButtonObj.style.top = "10px";
    saveButtonObj.style.right = (contentAreaDiv.offsetWidth*-1+150)+"px";
    saveButtonObj.style.color="#fff";
    saveButtonObj.style.backgroundColor="#000";
    saveButtonObj.style.fontSize="18px";

    editDivObj.appendChild(saveButtonObj);
    cancelButtonObj = document.createElement("button");
    cancelButtonObj.textContent = "取消";
    cancelButtonObj.onclick = todoEditBatchCancel;

    cancelButtonObj.style.position="relative";
    cancelButtonObj.style.top = "10px";
    cancelButtonObj.style.right = (contentAreaDiv.offsetWidth*-1+260)+"px";
    cancelButtonObj.style.color="#fff";
    cancelButtonObj.style.backgroundColor="#000";
    cancelButtonObj.style.fontSize="18px";

    editDivObj.appendChild(cancelButtonObj);
    contentAreaDiv.appendChild(editDivObj);
}

function todoEditBatchCancel(){
    textAreaObj = document.getElementById("todoBatchEdit");
    textAreaObj.parentNode.remove(textAreaObj);// 删除批量编辑浮层
}

function todoEditBatchSave(){

    textAreaObj = document.getElementById("todoBatchEdit");
    // alert(textAreaObj.value.split("\n"));
    contentList = textAreaObj.value.split("\n");

    newTodoList = [];
    for(var i = 0; i < contentList.length; i++) {
        lineContent = contentList[i].trim();
        if (lineContent.length > 0 ) {
            newTodoList.push(lineContent);
        }
    }
    //console.log(newTodoList);
    // 保存数据
    localStorage.setItem("todoList",JSON.stringify(newTodoList));
    //console.log(textAreaObj.parentNode);
    textAreaObj.parentNode.remove(textAreaObj);// 删除批量编辑浮层
    todoInitList();
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

    todoInitList();

    //console.log(e.target.parentNode);
}

function todoInitList(){
    todoStorageKey = "todoList";
    localTodoList = [];
    localTodoListJson = localStorage.getItem(todoStorageKey)
    //console.log(localTodoListJson,localTodoListJson == null, typeof(localTodoListJson));
    if ( typeof(localTodoListJson) == "string" && localTodoListJson.length > 0) {
        localTodoList = JSON.parse(localTodoListJson);

        document.getElementById("todoList").innerHTML="";// 清空原始数据

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
    todoItemDiv.style.padding = "4px 5px";

    if (orderNo <=0 ) {
        orderNo=todoListDiv.childElementCount;
    }

    if (orderNo%2==0) {
        todoItemDiv.style.backgroundColor="#000";
    } else {
        todoItemDiv.style.backgroundColor="#181818";
    }

    todoItemDiv.setAttribute("data-no", orderNo);

    textObj = document.createElement("span");
    textObj.textContent = strContent;
    textObj.style.width="700px";
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