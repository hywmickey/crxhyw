document.getElementById("commTab").onclick = commTab;
document.getElementById("wordStudy").onclick = wordStudy;
document.getElementById("todo").onclick = todo;
document.getElementById("studyList").onclick = studyList;


chrome.storage.sync.get({defaultPage:""},function(items){

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
        default:
            commTab();
    }
})

