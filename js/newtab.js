document.getElementById("commTab").onclick = commTab;
document.getElementById("wordStudy").onclick = wordStudy;
document.getElementById("todo").onclick = todo;
document.getElementById("studyList").onclick = studyList;
document.getElementById("devTools").onclick = devTools;

//var backendApiHost= "http://localhost:8081";
var backendApiHost= "http://47.94.137.24:8081";

chrome.storage.sync.get({defaultPage:""},function(items){
    //wordSentenceBlank();
    //wordStudy();
    //return;
    switch (items.defaultPage){
        case "commTab":
            commTab();
            break;
        case "wordStudy":
            wordStudy();
            break;
        case "todo":
            todo();
            break;
        case "studyList":
            studyList();
            break;
        case "devTools":
            devTools();
            break;
        default:
            commTab();
    }
})


