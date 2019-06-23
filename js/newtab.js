

setInterval(function(){timeDown();}, 1000);
function timeDown() {
	var strTop = document.querySelector("body > div.top");
	//console.log(strTop.innerHTML );

	// getFullYear, getDate(), getMonth()  getHours() , getMinutes(), getSeconds()	

	var objDate = new Date();
	var strToday = objDate.getFullYear() + '-' + (objDate.getMonth() +1)+ '-' + objDate.getDate()
	// 今天中午12点
	var today12 = new Date(strToday + ' 12:00:00');
	var today18 = new Date(strToday + ' 18:00:00');
	var today20 = new Date(strToday + ' 20:00:00');


	var objDiff12 = getFormateDiffTime(objDate , today12);
	var objDiff18 = getFormateDiffTime(objDate , today18);
	var objDiff20 = getFormateDiffTime(objDate , today20);

	var arrTimeDiffList = new Array(objDiff12, objDiff18, objDiff20);
 	
 	var strNowTime = [objDate.getHours(),objDate.getMinutes(), objDate.getSeconds()].join(':');
		strNowTime = '<span>'+strNowTime+'</span>';

 	var arrTimeDiffHtml = [strNowTime];
 	for (var i = 0; i < arrTimeDiffList.length; i++) {
 		objTimeDiff = arrTimeDiffList[i];

 		strHtml = '';
 		if(objTimeDiff.sign > 0) {
 			//strHtml = 
 			strHtml = '<span>'+objTimeDiff.timeDiff+'</span>';
 		} else {
 			strHtml = '<span class="timeout">'+objTimeDiff.timeDiff+'</span>';
 		}

 		
 		arrTimeDiffHtml.push(strHtml);
 	};

	strTop.innerHTML = arrTimeDiffHtml.join('');
}


function getFormateDiffTime(intTime1, intTime2) {
	var allDiffSeconds = parseInt((intTime2 - intTime1) / 1000);
	var intSign = 1;
	if(intTime1 > intTime2) {
 		allDiffSeconds = parseInt((intTime1 - intTime2) / 1000);
 		intSign = -1;
	}

	var intHours = Math.floor(allDiffSeconds / 3600);
	var intModulo = allDiffSeconds % (24 * 60 * 60 ); // 时 + 分 + 秒 (去掉了天)
		intModulo = intModulo % (60 * 60); // 分 + 秒 
	
	var intMinutes = Math.floor(intModulo / 60);
	var intSeconds = intModulo % 60;

	var arrTime = new Array(intHours, intMinutes, intSeconds);
	var strTime = arrTime.join(':');

	return {
		'sign' : intSign,
		'timeDiff' : strTime
	}

	return strTime;
}