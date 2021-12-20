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
		["dedao", "https://www.dedao.cn/"],
		["trello", "https://trello.com/"],
		["topbook", "https://topbook.cc/"],
		["少数派", "https://sspai.com/"],
		["Anki", "https://ankiuser.net/study/"],
		["有知有行", "https://youzhiyouxing.cn/materials"],
		["日历", "https://www.baidu.com/s?wd=日历"],
		["音频转文字", "https://app.xunjiepdf.com/voice2text"],
		["讯飞快读", "https://www.ffkuaidu.com/"],
		["vocabulary", "https://www.vocabulary.com/"],
		["全历史", "https://www.allhistory.com/"],
		["json", "https://www.json.cn/"],
		["statcounter", "http://gsa.statcounter.com/"],
		["aliWebmin", "http://47.94.137.24:10000/"],
		["COVID", "https://voice.baidu.com/act/newpneumonia/newpneumonia/"],
		["图形计算器", "https://www.desmos.com/calculator?lang=zh-CN"],
		["github", "https://hub.fastgit.org/"],
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
		["新生", "https://b.xinshengdaxue.com/index.html"],
		["枯燥", "./html/text.html"]
	],
	[
		["早时光书屋", "https://nt-registrar.zuoyebang.cc/static/fe-store-mis/#/store/store-list"],
		["git", "https://git.afpai.com/"],
		["监控平台", "http://op.zuoyebang.cc/static/odin/#/monitor/graph"],
		["OA", "http://oa.zuoyebang.cc"],
		["HR", "http://hr.zuoyebang.cc"]
	]
];




for (i in bookMarkList) {
	
	lineNum = Math.ceil(bookMarkList[i].length/5);
	newBookMarkList = [];
	for (c =0 ; c<5; c++) {
		for(r=0; r<lineNum;r++){
			offset = r*lineNum + c;
			if (offset < bookMarkList[i].length){
				//console.log(offset);
				newBookMarkList.push(bookMarkList[i][offset]);
			}
			
		}
	}
	bookMarkList[i] = newBookMarkList;

	//console.log(lineNum);
	
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