function studyList() {

	bookMarkList = [
		[
			["Oxford", "https://www.oxfordlearnersdictionaries.com/"],
			["LDOCE", "https://www.ldoceonline.com/"],
			["Mooc", "https://www.icourse163.org/"],
			["bilibili", "https://space.bilibili.com/456882810/favlist?fid=963174610&ftype=create"],
			["Linux系统编程", "https://www.bilibili.com/video/BV1gb411L7fK"],
			["深入理解计算机系统", "https://www.bilibili.com/video/BV1Gf4y1H71W"],
			["Linux Man", "https://www.kernel.org/doc/man-pages/"],
			["网页配色", "http://tool.c7sky.com/webcolor/#character_3"],
			["Web API", "https://developer.mozilla.org/zh-CN/docs/Web/API"],
			["CSDN", "https://blog.csdn.net/nav/watchers"],
			["李文周的博客", "https://www.liwenzhou.com/"],
			["地鼠文档", "http://wen.topgoer.com/"],
			["Go指南", "https://tour.go-zh.org/"],
			["golang标准库", "https://pkg.go.dev/"],
			["touzid", "https://www.touzid.com/"],
			["w3cschool", "https://www.w3cschool.cn/tutorial/"],
			["C语言中文网", "http://c.biancheng.net/"],
			["金步国作品集", "http://www.jinbuguo.com/"],
			["元岛", "https://www.midorg.com/"],
			["书栈网", "https://www.bookstack.cn/"],
			["菜鸟", "https://www.runoob.com/"],
			["编程自学之路", "https://r2coding.com/"],
			["divcss5", "http://www.divcss5.com/"],
			["leetcode", "https://leetcode.com/"],
			["Linux From Scratch", "https://www.linuxfromscratch.org/lfs/read.html"],
			["Unix Tutorial", "https://rc.byu.edu/documentation/unix-tutorial/"],
			["bstTrends", "https://www.federalreserve.gov/monetarypolicy/bst_recenttrends.htm"],
			["spglobal", "https://www.spglobal.com/"],
			["berkshire", "https://www.cnbc.com/berkshire-hathaway-portfolio/"],
			["berkshire", "https://stockzoa.com/fund/berkshire-hathaway-inc/"],
			["voxchina", "http://voxchina.org/"],
			["MBA智库百科", "https://www.mbalib.com/"],
			["爱课程", "https://www.icourses.cn/"],
			["linux265", "https://linux265.com/"],
			["64k动画", "https://www.pouet.net/"],
			["搜榜", "https://www.bjsoubang.com/"]
		],
		[
			["Algorithms", "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html"],
			["VisuAlgo", "https://visualgo.net/zh/"],
			["algorithm", "https://algorithm-visualizer.org/"],
			["redisTry", "https://try.redis.io/"],
			["EF", "https://www.ef.com/wwen/english-resources/"]
		],
		[
			["刷新世界观合集","https://www.bilibili.com/read/readlist/rl244892"],
		],
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