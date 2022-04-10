var wordSentenceData = {};

function wordSentenceBlank() {

    contentAreaDiv = document.getElementById("contentArea");
	contentAreaDiv.innerHTML = "";
    contentAreaDiv.style.color = "white";

    sentenceDiv = document.createElement("div");
    sentenceDiv.style.padding = "10px 50px";
    sentenceDiv.style.backgroundColor = "#222";
    sentenceDiv.style.fontSize = "18px";
    sentenceDiv.setAttribute("id","sentenceDiv");
    contentAreaDiv.appendChild(sentenceDiv);

    wordSentenceBlankGetQ();


}
// 获取一个问题
function wordSentenceBlankGetQ(){
    strUrl = backendApiHost+"/hyw/word/sentenceblankquiz";
    ajax.get(strUrl,{},wordSentenceBlankRenderQ,"json");

}

function wordSentenceBlankRenderQ(result) {

    if(result.errNo > 0 ) {
        alert(result.errMsg);
        return
    }
    
    sentenceDiv = document.getElementById("sentenceDiv");
    sentenceDiv.innerHTML = "";

    wordSentenceData = result.data;// 备用-检查答案

    //console.log(result.data);

    // 添加问题

    subSentence = result.data.sentence.split(result.data.answer);

    h3Obj = document.createElement("h3");
    h3Obj.textContent="例句回顾";
    h3Obj.style.backgroundColor = "#333";
    h3Obj.style.padding = "5px 10px";
    sentenceDiv.appendChild(h3Obj);

    pObj = document.createElement("p");
    //pObj.textContent = "111111";
    
    textObj = document.createTextNode("Question: "+subSentence[0]);
    pObj.appendChild(textObj);

    inputObj = document.createElement("input");
    inputObj.style.textAlign="center";
    inputObj.setAttribute("size", result.data.answer.length+2);

    inputObj.onchange = wordSentenceBlankCheckAnswer;

    pObj.appendChild(inputObj);

    textObj = document.createTextNode(subSentence[1]);
    pObj.appendChild(textObj);

    sentenceDiv.appendChild(pObj);
    
    // 添加选项
    answerOptionCnt = result.data.wordList.length+1;// 选项个数
    randomNo = parseInt(Math.random()*10)%answerOptionCnt;
    
    answerOptionList = [];
    for (var i = 0; i<answerOptionCnt; i++) {
        optionStr = String.fromCharCode(65+i)+". ";
        

        if (i== randomNo) {
            answerOptionList.push(optionStr+result.data.answer);
        } else {
            answerOptionList.push(optionStr+result.data.wordList.pop());
        }
    }

    //console.log(randomNo);
    //console.log(answerOptionList);

    pObj = document.createElement("p");
    
    textObj = document.createTextNode("Options: ");
    pObj.appendChild(textObj);

    for (i in answerOptionList) {
        spanObj = document.createElement("span");
        spanObj.textContent = answerOptionList[i];
        spanObj.style.padding = "0 15px";
        pObj.appendChild(spanObj);
    }
    
    sentenceDiv.appendChild(pObj);

    pObj = document.createElement("p");
    pObj.textContent = "chinese: "+result.data.chinese;
    sentenceDiv.appendChild(pObj);
    
    pObj = document.createElement("p");
    pObj.setAttribute("id","checkResult");
    sentenceDiv.appendChild(pObj);


    nextButtonObj = document.createElement("button");
    nextButtonObj.textContent = "Next";
    nextButtonObj.style.color="white";
    nextButtonObj.style.backgroundColor="black";
    nextButtonObj.onclick = wordSentenceBlankGetQ;
    sentenceDiv.appendChild(nextButtonObj);
    
}

function wordSentenceBlankCheckAnswer(e) {
    //console.log(e.target.value);

    checkResultObj = document.getElementById("checkResult");
    checkResultObj.innerHTML = "";
    //console.log(wordSentenceData);

    if (e.target.value.trim() == wordSentenceData.answer) {
        checkResultObj.textContent = "Correct";
        checkResultObj.style.color = "green";

 
    } else {
        checkResultObj.textContent = "Wrong";
        checkResultObj.style.color = "red";
    }

    


}
