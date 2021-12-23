bookMarkList = [
	[
		["Mooc", "https://www.icourse163.org/"],
		["bilibili", "https://space.bilibili.com/456882810/favlist?fid=963174610&ftype=create"],
		["Linux Man", "https://man7.org/linux/man-pages/index.html"],
		["网页配色", "http://tool.c7sky.com/webcolor/#character_3"],
		["CSDN", "https://blog.csdn.net/nav/watchers"],
		["李文周的博客", "https://www.liwenzhou.com/"],
		["地鼠文档", "http://wen.topgoer.com/"],
		["Go指南", "https://tour.go-zh.org/"],
		["touzid", "https://www.touzid.com/"],
		["w3cschool", "https://www.w3cschool.cn/tutorial/"],
		["C语言中文网", "http://c.biancheng.net/"],
		["书栈网", "https://www.bookstack.cn/"],
		["菜鸟", "https://www.runoob.com/"],
		["divcss5", "http://www.divcss5.com/"],
		["leetcode", "https://leetcode.com/"],
		["Linux From Scratch", "https://www.linuxfromscratch.org/lfs/read.html"],
		["bstTrends", "https://www.federalreserve.gov/monetarypolicy/bst_recenttrends.htm"],
		["spglobal", "https://www.spglobal.com/"],
		["berkshire", "https://www.cnbc.com/berkshire-hathaway-portfolio/"],
		["berkshire", "https://stockzoa.com/fund/berkshire-hathaway-inc/"],
		["voxchina", "http://voxchina.org/"],
		["MBA智库百科", "https://www.mbalib.com/"],
		["爱课程", "https://www.icourses.cn/"],
		["linux265", "https://linux265.com/"],
		["搜榜", "https://www.bjsoubang.com/"]
	],
	[
		["日历", "https://www.baidu.com/s?wd=日历"],
		["dedao", "https://www.dedao.cn/"],
		["trello", "https://trello.com/"],
		["github", "https://hub.fastgit.org/"],
		["ipaddress", "https://www.ipaddress.com/"],
		["topbook", "https://topbook.cc/"],
		["少数派", "https://sspai.com/"],
		["Anki", "https://ankiuser.net/study/"],
		["有知有行", "https://youzhiyouxing.cn/materials"],
		["音频转文字", "https://app.xunjiepdf.com/voice2text"],
		["讯飞快读", "https://www.ffkuaidu.com/"],
		["vocabulary", "https://www.vocabulary.com/"],
		["全历史", "https://www.allhistory.com/"],
		["bejson", "https://www.bejson.com/"],
		["statcounter", "http://gsa.statcounter.com/"],
		["aliWebmin", "http://47.94.137.24:10000/"],
		["COVID", "https://voice.baidu.com/act/newpneumonia/newpneumonia/"],
		["图形计算器", "https://www.desmos.com/calculator?lang=zh-CN"],
		["GitHub中文社区", "https://www.githubs.cn/"],
		["GitOpt", "./html/gitopt.html"]
	],
	[
		["Algorithms", "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html"],
		["VisuAlgo", "https://visualgo.net/zh/"],
		["algorithm", "https://algorithm-visualizer.org/"],
		["redisTry", "https://try.redis.io/"],
		["EF", "https://www.ef.com/wwen/english-resources/"]
	],
	[
		["早时光书屋", "https://nt-registrar.zuoyebang.cc/static/fe-store-mis/#/store/store-list"],
		["天火平台", "https://tianhuo.zuoyebang.cc/"],
		["监控平台", "http://op.zuoyebang.cc/static/odin/#/monitor/graph"],
		["棒棒堂", "http://www.zuoyebang.cc"],
		["HR", "http://hr.zuoyebang.cc"]
	],
	[
		["便签", "https://yun.smartisan.com/#/notes"],
		["笔记", "https://note.youdao.com"],
		["新生", "https://b.xinshengdaxue.com/index.html"]
	]
];

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
document.getElementById("bookmarks").appendChild(blockMarkObj);
