function devTools() {
    contentAreaDiv = document.getElementById("contentArea");
	contentAreaDiv.innerHTML = "";
    contentAreaDiv.style.color="#fff";
    contentAreaDiv.style.fontSize="16px";

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
    pObj.textContent = decodeURI(urlStr);
    urlParseDiv.appendChild(pObj);
    contentAreaDiv.appendChild(urlParseDiv);
    
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
        e.target.parentNode.nextSibling.textContent =decodeURI(urlStr);
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