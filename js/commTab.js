function commTab() {

	bookMarkList = [
		[
			["早时光书屋", "https://calmis-base-cc.suanshubang.cc//static/fe-store-qiankun/#/home/index"],
			["早时光书屋", "https://calmis.zuoyebang.cc/static/fe-store-qiankun/#/micro-app-mis/student/ty-selection-period"],
			["售卖sku查询", "http://sellmis.zuoyebang.cc/static/sellgoods/index.html#/goods/goods-manage/sku-manage-list"],
			["天火平台", "https://tianhuo.zuoyebang.cc/"],
			["监控平台", "http://op.zuoyebang.cc/static/odin/#/monitor/graph"],
			["grafana监控", "https://grafana-inf.zuoyebang.cc/grafana/d/KoprN1-nk/ntsell-shou-mai-fu-wu-jian-kong?orgId=1"],
			["棒棒堂", "http://www.zuoyebang.cc"],
			["HR", "http://hr.zuoyebang.cc"],
			["ToolsFun", "https://tools.fun/"]
		],
		[
			["日历", "https://www.baidu.com/s?wd=日历"],
			["dedao", "https://www.dedao.cn/"],
			["trello", "https://trello.com/"],
			["github", "https://hub.fastgit.org/"],
			["dockerHub", "https://hub.docker.com/"],
			["ipaddress", "https://www.ipaddress.com/"],
			["topbook", "https://topbook.cc/"],
			["少数派", "https://sspai.com/"],
			["Anki", "https://ankiuser.net/study/"],
			["有知有行", "https://youzhiyouxing.cn/materials"],
			["音频转文字", "https://app.xunjiepdf.com/voice2text"],
			["讯飞快读", "https://www.ffkuaidu.com/"],
			["vocabulary", "https://www.vocabulary.com/"],
			["全历史", "https://www.allhistory.com/"],
			["真实地图", "https://thetruesize.com/"],
			["bejson", "https://www.bejson.com/"],
			["statcounter", "http://gsa.statcounter.com/"],
			["aliWebmin", "http://47.94.137.24:10000/"],
			["COVID", "https://voice.baidu.com/act/newpneumonia/newpneumonia/"],
			["图形计算器", "https://www.desmos.com/calculator?lang=zh-CN"],
			["GitHub中文社区", "https://www.githubs.cn/"],
			["古董电脑室", "https://zhuanlan.zhihu.com/retrocomputing"],
			["compiler explorer", "https://gcc.godbolt.org"],
			["GitOpt", "./html/gitopt.html"],
			["goland Activation", "http://www.lookdiv.com/"],
			["死亡公司公墓", "https://www.itjuzi.com/deathCompany"],
			["ssyoutube","https://zh.ssyoutube.com/"]
		],
		[
			["便签", "https://yun.smartisan.com/#/notes"],
			["笔记", "https://note.youdao.com"],
			["新生", "https://b.xinshengdaxue.com/index.html"]
		]
	];
	/*
	// 按列优先级的方式排列数据
	c = 5; // 列数
	for (index in bookMarkList) {
		if (bookMarkList[index].length <= 0) {
			continue;
		}
	
		if (bookMarkList[index].length <= c) {
			continue;
		}
	
		r = Math.ceil(bookMarkList[index].length/c); // 行数
	
		rh = r // 整行的数量 或非整列在行内的索引步长
		cp = c // 整列数的数量
		remainder =  bookMarkList[index].length % c; // 余数
		if (remainder > 0 ) {
			rh = r-1
			cp = remainder
		} 
		newBookMarkList = [];
		for (i = 0 ; i < r ; i++) { // 遍历行
			for (j = 0; j < c ; j++) { // 遍历列
				offset = 0;
				if (j <= cp){ //如果当前列是整列或紧挨整列后的一列
					offset = i + j * r; 
				} else  { // 当前列为非整列， 【行号】+ 整列索引步长 * 整列数量 + 当前列到非整列距离* 非整列在行内索引步长
					offset = i + cp * r + ( (j - cp -1 ) * rh )
				}
				if (offset < bookMarkList[index].length) {
					newBookMarkList.push(bookMarkList[index][offset]);
					//console.log(index,offset,bookMarkList[index][offset]);
				}
			}
		}
		bookMarkList[index] = newBookMarkList
	}
	*/

	contentAreaDiv = document.getElementById("contentArea");
	contentAreaDiv.innerHTML = "";
	
	bookmarksDiv  = document.createElement("div");
	bookmarksDiv.setAttribute("id","bookmarks")


	blockMarkObj = document.createDocumentFragment();
	for (i in bookMarkList) {
		itemObj = document.createElement("div");
		itemObj.setAttribute("class","items");
		for (k in bookMarkList[i]) {
			aObj = document.createElement("a");
			aObj.text = bookMarkList[i][k][0];
			aObj.href=bookMarkList[i][k][1];
			pObj = document.createElement("p");
			pObj.appendChild(aObj);
			itemObj.appendChild(pObj);
		}
		blockMarkObj.appendChild(itemObj);
	}
	//document.getElementById("bookmarks").appendChild(blockMarkObj);
	bookmarksDiv.appendChild(blockMarkObj);
	contentAreaDiv.appendChild(bookmarksDiv);
	
}
