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
		["便签", "https://yun.smartisan.com/#/notes"],
		["笔记", "https://note.youdao.com"],
		["新生", "https://b.xinshengdaxue.com/index.html"]
	],
	[
		["早时光书屋", "https://nt-registrar.zuoyebang.cc/static/fe-store-mis/#/store/store-list"],
		["git", "https://git.afpai.com/"],
		["监控平台", "http://op.zuoyebang.cc/static/odin/#/monitor/graph"],
		["OA", "http://oa.zuoyebang.cc"],
		["HR", "http://hr.zuoyebang.cc"]
	]
];

// 按列优先级的方式排列数据
c = 5; // 列数
for (index in bookMarkList) {
	if (bookMarkList[index].length <= 0) {
		continue;
	}

	r = Math.ceil(bookMarkList[index].length/c); // 行数
	//console.log("-------", r);
	rh = r-1; // 整行数
	cp = bookMarkList[index].length % c; //  前部分整列数
	cs = c - cp; // 后部分非整列数
	newBookMarkList = [];
	
	for (i = 0 ; i < r ; i++) {
		offset = 0;
		for (j = 0; j < c ; j++) {
			if (cp == 0) { // 如果没有余数
				offset = j*r + i
			} else {
				if (j == 0) {
					offset = i;
				} else if (j <= cp ) {
					//offset += r;
					offset = i + j * r; 
				} else {
					//offset +=  (j- cp -1 ) * rh
					offset = i + cp * r + ( (j - cp - 1 ) * rh )
				}
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