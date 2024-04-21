function devTools() {
    contentAreaDiv = document.getElementById("contentArea");
	contentAreaDiv.innerHTML = "";
    contentAreaDiv.style.color="#fff";
    contentAreaDiv.style.fontSize="16px";
    
    // 数学工具
    // 增长率
    mathDiv = document.createElement("div");
    h3Obj = document.createElement("h3");
    h3Obj.textContent = "数学工具";
    h3Obj.style.backgroundColor="#222";
    h3Obj.style.padding = "10px 5px";
    mathDiv.appendChild(h3Obj);

    labelObj = document.createElement("label");
    labelObj.textContent ="数字1:";

    inputObj = document.createElement("input");
    inputObj.setAttribute("id","percent_num1");

    labelObj.appendChild(inputObj);
    mathDiv.appendChild(labelObj);

    labelObj = document.createElement("label");
    labelObj.textContent ="数字2:";

    inputObj = document.createElement("input");
    inputObj.setAttribute("id","percent_num2");

    labelObj.appendChild(inputObj);
    mathDiv.appendChild(labelObj);

    labelObj = document.createElement("label");
    labelObj.textContent ="期数:";
    inputObj = document.createElement("input");
    inputObj.setAttribute("id","terms");
    inputObj.value = 1;
    labelObj.appendChild(inputObj);
    mathDiv.appendChild(labelObj);


    buttonObj = document.createElement("button");
    buttonObj.innerHTML="计算";
    buttonObj.onclick=calculateIncrease
    mathDiv.appendChild(buttonObj)

    
    spanObj = document.createElement("span");
    spanObj.style.paddingLeft="5px";
    spanObj.innerHTML="--%";
    spanObj.setAttribute("id", "percent_result");
    mathDiv.appendChild(spanObj);

    spanObj = document.createElement("span");
    spanObj.style.paddingLeft="5px";
    spanObj.innerHTML="--%";
    spanObj.setAttribute("id", "increase_ratio");
    mathDiv.appendChild(spanObj);
    contentAreaDiv.appendChild(mathDiv);

    // 平均增长率
    percentavgDiv =  document.createElement("div");
    labelObj = document.createElement("label");
    labelObj.textContent ="增长率%:";
    inputObj = document.createElement("input");
    inputObj.setAttribute("id","percent_num");
    labelObj.appendChild(inputObj);
    percentavgDiv.appendChild(labelObj);


    labelObj = document.createElement("label");
    labelObj.textContent ="期数:";
    inputObj = document.createElement("input");
    inputObj.setAttribute("id","percent_terms");
    inputObj.value = 1;
    labelObj.appendChild(inputObj);
    percentavgDiv.appendChild(labelObj);
    
    buttonObj = document.createElement("button");
    buttonObj.innerHTML="平均增长率";
    buttonObj.onclick=calculateIncreaseavg
    percentavgDiv.appendChild(buttonObj)

    spanObj = document.createElement("span");
    spanObj.style.paddingLeft="5px";
    spanObj.innerHTML="--%";
    spanObj.setAttribute("id", "percent_avg");
    percentavgDiv.appendChild(spanObj);

    contentAreaDiv.appendChild(percentavgDiv);

    // 累计增长率
    percentIncDiv =  document.createElement("div");

    labelObj = document.createElement("label");
    labelObj.textContent ="增长率%:";
    inputObj = document.createElement("input");
    inputObj.setAttribute("id","per_ratio");
    labelObj.appendChild(inputObj);
    percentIncDiv.appendChild(labelObj);

    labelObj = document.createElement("label");
    labelObj.textContent ="期数:";
    inputObj = document.createElement("input");
    inputObj.setAttribute("id","incr_terms");
    inputObj.value = 1;
    labelObj.appendChild(inputObj);
    percentIncDiv.appendChild(labelObj);

    buttonObj = document.createElement("button");
    buttonObj.innerHTML="累计增长率";
    buttonObj.onclick=calculateIncrTotal
    percentIncDiv.appendChild(buttonObj)

    spanObj = document.createElement("span");
    spanObj.style.paddingLeft="5px";
    spanObj.innerHTML="--%";
    spanObj.setAttribute("id", "incr_total");
    percentIncDiv.appendChild(spanObj);
    
    contentAreaDiv.appendChild(percentIncDiv);

    // 时间戳转时间
    timestampToTimeDiv =  document.createElement("div");
    
    nowTimeObj = new Date();
    nowTimeStamp =  parseInt(nowTimeObj.getTime()/1000);
    nowTimeStampStr = devToolsGetTimeByTimeStamp(nowTimeStamp);


    h3Obj = document.createElement("h3");
    h3Obj.textContent = "时间戳转换";
    h3Obj.style.backgroundColor="#222";
    h3Obj.style.padding = "10px 5px";
    timestampToTimeDiv.appendChild(h3Obj);

    labelObj = document.createElement("label");
    labelObj.textContent ="时间戳转时间:";

    inputObj = document.createElement("input");
    inputObj.value = nowTimeStamp;
    inputObj.onchange = devToolsTimeStampToTime
    labelObj.appendChild(inputObj);
    timestampToTimeDiv.appendChild(labelObj);
    
    spanObj = document.createElement("span");
    spanObj.style.paddingLeft="5px";
    spanObj.textContent = nowTimeStampStr;
    timestampToTimeDiv.appendChild(spanObj);

    contentAreaDiv.appendChild(timestampToTimeDiv);


    // 时间转时间戳
    timeToTimeStampDiv = document.createElement("div");

    labelObj = document.createElement("label");
    labelObj.textContent ="时间转时间戳:";


    inputObj = document.createElement("input");
    inputObj.setAttribute("type","datetime");
    inputObj.value = nowTimeStampStr;
    inputObj.onchange = devToolsTimeToTimeStamp;
    labelObj.appendChild(inputObj);
    timeToTimeStampDiv.appendChild(labelObj);
    
    spanObj = document.createElement("span");
    spanObj.style.paddingLeft="5px";
    spanObj.textContent = nowTimeStamp;
    timeToTimeStampDiv.appendChild(spanObj);

    contentAreaDiv.appendChild(timeToTimeStampDiv);

    // json串格式化

    jsonStr = '{"name":"zhangsan","age":10}'
    jsonParseDiv = document.createElement("div");

    h3Obj = document.createElement("h3");
    h3Obj.style.backgroundColor="#222";
    h3Obj.style.padding = "10px 5px";
    //spanObj.style.paddingLeft="5px";
    h3Obj.textContent = "json串格式化";
    jsonParseDiv.appendChild(h3Obj);
    
    textAreaObj =  document.createElement("textarea");
    textAreaObj.value=jsonStr;
    textAreaObj.cols=110;
    textAreaObj.onchange = devToolsJsonFormate;

    jsonParseDiv.appendChild(textAreaObj);

    
    jsonObj = JSON.parse(jsonStr);
    jsonParseFormate = document.createElement("pre");
    jsonParseFormate.textContent = JSON.stringify(jsonObj, null, 4);
    jsonParseDiv.appendChild(jsonParseFormate);

    jsonParseFormDiv = document.createElement("div");
    jsonParseFormDiv.style.wordBreak="break-all";
    jsonParseFormDiv.textContent = devToolsJsonObjToForm(jsonObj);
    jsonParseDiv.appendChild(jsonParseFormDiv);

    

    contentAreaDiv.appendChild(jsonParseDiv);
    
    // url解析
    urlParseDiv =  document.createElement("div");
    h3Obj = document.createElement("h3");
    h3Obj.style.backgroundColor="#222";
    h3Obj.style.padding = "10px 5px";
    //spanObj.style.paddingLeft="5px";
    h3Obj.textContent = "URI Decode";
    urlParseDiv.appendChild(h3Obj);
    
    urlStr = 'https://fanyi.baidu.com/#zh/en/%E5%BC%A0%E4%B8%89';

    labelObj = document.createElement("label");
    labelObj.textContent ="URI:";

    inputObj = document.createElement("input");
    inputObj.value = urlStr;
    inputObj.style.width="850px";
    inputObj.onchange = devToolsUriDecode;
    //inputObj.onchange = devToolsTimeStampToTime
    labelObj.appendChild(inputObj);
    urlParseDiv.appendChild(labelObj);

    pObj = document.createElement("p");
    pObj.textContent = decodeURIComponent(urlStr);
    pObj.style.wordBreak="break-all";
    urlParseDiv.appendChild(pObj);
    contentAreaDiv.appendChild(urlParseDiv);
    
}

// 计算百分比
function calculateIncrease(e) {
    num1 = document.getElementById("percent_num1");
    if(isNaN(num1.value)) {
        alert("第一个值不是数字");
        return;
    }

    num2 = document.getElementById("percent_num2");
    if(isNaN(num2.value)) {
        alert("第二个值不是数字");
        return;
    }

    terms = document.getElementById("terms");
    if(isNaN(terms.value)) {
        alert("期数不是数字");
        return;
    }

    diffnum= (num2.value - num1.value)/num1.value ;
    //percentNum = Math.round(diffnum);
    //alert(diffnum);
    percentResult = document.getElementById("percent_result");
    percentResult.innerHTML =  (diffnum*100).toFixed(2)+"%";

    inceaseRation = Math.pow(diffnum+1,1/terms.value)-1;
    increaseRatio= document.getElementById("increase_ratio");
    increaseRatio.innerHTML =  (inceaseRation*100).toFixed(2)+"%";
    
}

// 计算平均增长率
function calculateIncreaseavg(e){
    percentnum = document.getElementById("percent_num");
    if (isNaN(percentnum.value)) {
        alert("输入的百分比不是数字");
        return
    }

    terms = document.getElementById("percent_terms");
    if (isNaN(terms.value)) {
        alert("输入的期数不是数字");
        return
    }

    avgRatio = Math.pow(percentnum.value/100+1,1/terms.value)-1;
    
    percentAvg = document.getElementById("percent_avg");
    percentAvg.innerHTML = (avgRatio*100).toFixed(2)+"%";

}

// 计算累计增长率
function calculateIncrTotal(e) {
    percentnum = document.getElementById("per_ratio");
    if (isNaN(percentnum.value)) {
        alert("输入的百分比不是数字");
        return
    }

    terms = document.getElementById("incr_terms");
    if (isNaN(terms.value)) {
        alert("输入的期数不是数字");
        return
    }
    totalRatio = Math.pow(percentnum.value/100+1,terms.value)-1
    
    totalRatioObj = document.getElementById("incr_total");
    totalRatioObj.innerHTML = (totalRatio*100).toFixed(2)+"%";
}

// json 转form
function devToolsJsonObjToForm(jsonObj){
    strForm = "";
    for(i in jsonObj) {
        strForm += `&${i}=`+encodeURI(jsonObj[i]);
    }

    return strForm;
}

function devToolsUriDecode(e) {
    try {
        urlStr = e.target.value;
        e.target.parentNode.nextSibling.textContent =decodeURIComponent(urlStr);
    } catch(error) {
        //console.log(e.toString());
        e.target.parentNode.nextSibling.textContent = error.toString();
    }
}

function devToolsJsonFormate(e){
    jsonStr =  e.target.value;

    if(typeof jsonStr != 'string') {
        e.target.nextSibling.textContent = "JSON串格式错误";
    }

    try {
        jsonObj = JSON.parse(jsonStr);
        e.target.nextSibling.textContent = JSON.stringify(jsonObj, null, 4);
        e.target.nextSibling.nextSibling.textContent  = devToolsJsonObjToForm(jsonObj);

    } catch(error) {
        //console.log(e.toString());
        e.target.nextSibling.textContent = error.toString();
    }
}

function devToolsTimeToTimeStamp(e){
    try {
        timeStr = e.target.value.trim();
        
        if (timeStr.length == 10) {
            timeStr+= " 00:00:00";
        }
        timeObj = new Date(timeStr);
        e.target.parentNode.nextSibling.textContent= parseInt(timeObj.getTime()/1000);
    } catch(error) {
        e.target.parentNode.nextSibling.textContent = error.toString();
    }

}

function devToolsTimeStampToTime(e) {

    try {
        timeStampInt = parseInt(e.target.value);
        e.target.parentNode.nextSibling.textContent = devToolsGetTimeByTimeStamp(timeStampInt);
    } catch(error) {
        e.target.parentNode.nextSibling.textContent = error.toString();
    }
}

function devToolsGetTimeByTimeStamp(timeStampInt){
    dateObj = new Date(timeStampInt*1000)
    //console.log(dateObj);
    timeStr =[
        [ 
            dateObj.getFullYear(),
            (dateObj.getMonth()+1).toString().padStart(2,'0'),
            dateObj.getDate().toString().padStart(2,'0')
        ].join("-"),
        [ 
            dateObj.getHours().toString().padStart(2,'0'),
            dateObj.getMinutes().toString().padStart(2,'0'),
            dateObj.getSeconds().toString().padStart(2,'0')
        ].join(":")

    ].join(' ');
    return timeStr;
}