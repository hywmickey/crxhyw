function commTab() {

	bookMarkList = [
		[
			["ToolsFun", "https://tools.fun/"],
			["知犀","https://www.zhixi.com/space?page=owner"],
			["软件替换","https://alternativeto.net/"],
			["v2free","https://cdn.v2free.net/user"],
			["v2rayse","https://v2rayse.com/"],
			["getafreenode","https://getafreenode.com/node.php?uuid=9E22EDD9-BE7C-6D3D-6540-372EA00E5CB5"],
			["clashfree","https://clashfree.eu.org/"],
		],
		[
			["IP","https://www.cip.cc/"],
			["whoer","https://whoer.net/"],
			["ITdog","https://www.itdog.cn/"],
			["不良林","https://bulianglin.com/"],
			["日历", "https://www.baidu.com/s?wd=日历"],
			["New Bing","https://bing.vcanbb.top/"],
			["ChatGPT","https://chat.zhile.io/"],
			["dedao", "https://www.dedao.cn/"],
			["trello", "https://trello.com/"],
			["GitHub代理", "https://ghproxy.com/"],
			["asciiflow","https://asciiflow.com/"],
			["tiobeIndex","https://www.tiobe.com/tiobe-index/"],
			["PYPL","https://pypl.github.io/PYPL.html"],
			["dockerHub", "https://hub.docker.com/"],
			["ipaddress", "https://www.ipaddress.com/"],
			["笔记看板milanote","https://app.milanote.com/"],
			["topbook", "https://topbook.cc/"],
			["少数派", "https://sspai.com/"],
			["Anki", "https://ankiuser.net/study/"],
			["有知有行", "https://youzhiyouxing.cn/materials"],
			["音频转文字", "https://app.xunjiepdf.com/voice2text"],
			["讯飞快读", "https://www.ffkuaidu.com/"],
			["vocabulary", "https://www.vocabulary.com/"],
			["全历史", "https://www.allhistory.com/"],
			["真实地图", "https://thetruesize.com/"],
			["中国裁判文书网", "https://wenshu.court.gov.cn/"],
			["杠杆ETF", "https://etfdb.com/themes/leveraged-etfs/"],
			["bejson", "https://www.bejson.com/"],
			["statcounter", "http://gsa.statcounter.com/"],
			["aliWebmin", "http://47.94.137.24:10000/"],
			["COVID", "https://voice.baidu.com/act/newpneumonia/newpneumonia/"],
			["图形计算器", "https://www.desmos.com/calculator?lang=zh-CN"],
			["GitHub中文社区", "https://www.githubs.cn/"],
			["古董电脑室", "https://zhuanlan.zhihu.com/retrocomputing"],
			["compiler explorer", "https://gcc.godbolt.org"],
			["GitOpt", "../html/gitopt.html"],
			["goland Activation", "http://www.lookdiv.com/"],
			["死亡公司公墓", "https://www.itjuzi.com/deathCompany"],
			["ssyoutube","https://zh.ssyoutube.com/"]
		],
		[
		    ["王志安","https://www.youtube.com/c/%E7%8E%8B%E5%BF%97%E5%AE%891/videos"],
		    ["五岳散人","https://www.youtube.com/channel/UCX8KQ5xQlm0MnZkmHO7CBDw/videos"],
		    ["Bob","https://www.youtube.com/c/LearnEnglishwithBobtheCanadian/videos"],
		    ["Peppa Pig CN","https://www.youtube.com/channel/UCLGXa2yt6TA8_8GZYZB0kOg/playlists"],
		    ["Peppa Pig EN","https://www.youtube.com/c/peppapig/playlists"],
		    ["Journey to the West","https://www.youtube.com/playlist?list=PLxM8GJG6y4n-8ydl3Ezlu21slA4Dar3tG"],
		    ["TV Series","https://www.youtube.com/c/LearnEnglishWithTVSeries/videos"],
		    ["BBC","https://www.youtube.com/c/LearnEnglishWithTVSeries/videos"],
		    ["EnglishClass101","https://www.youtube.com/c/EnglishClass101/videos"],
		    ["EnglishCourse","https://www.youtube.com/results?search_query=learn+english&sp=EgIQAg%253D%253D"]
		],
		[
			["郑州法拍房","https://space.bilibili.com/1900760964/dynamic"],
			//["从业地产13年","https://space.bilibili.com/1014368785/video"],
			["从业地产13年","https://space.bilibili.com/1176090278"],
			["郑州大飞说房","https://space.bilibili.com/2121761371/video"],
			["王纯迅","https://space.bilibili.com/479817898/video"],
			["宋鸿兵观天下","https://space.bilibili.com/390894226/dynamic"],
			["马男说投资","https://space.bilibili.com/635383128/video"],
			["马红漫","https://space.bilibili.com/579855638/dynamic"],
			["火烈鸟说金融","https://space.bilibili.com/499089442/video"],
			["刘昌松","https://www.ixigua.com/home/68552799617/"],
			["陈译辉财经","https://www.ixigua.com/home/6755783665"],
			["金岩石","https://space.bilibili.com/1454271217/dynamic"],
			["坤姐闯江湖","https://space.bilibili.com/1162818091"],
			["悦涛很二","https://space.bilibili.com/253024554/dynamic"],
			["张捷财经观察","https://space.bilibili.com/1955809864/dynamic"],
			["韩秀云讲经济","https://space.bilibili.com/673420980/dynamic"],
			["老宇投资","https://space.bilibili.com/52764688/dynamic"],
			["李大霄","https://www.ixigua.com/home/54791043962/?source=pgc_author_name&list_entrance=anyVideo"],
			["人生游戏攻略","https://space.bilibili.com/517230844/video"],
			["小Lin说","https://space.bilibili.com/520819684/dynamic"],
			["珍大户","https://space.bilibili.com/355327690/dynamic"],
			["思维实验室","https://space.bilibili.com/14583962/dynamic"],
			["小丽有事儿说","https://space.bilibili.com/1644442967"],
			["磐他","https://space.bilibili.com/533675317/dynamic"],
			["进击的沈帅波","https://space.bilibili.com/19201320/dynamic"],
			["作业帮","https://news.so.com/ns?q=%E4%BD%9C%E4%B8%9A%E5%B8%AE"],
		],
		[
			["便签", "https://yun.smartisan.com/#/notes"],
			["笔记", "https://note.youdao.com"],
			["新生", "https://b.xinshengdaxue.com/index.html"]
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
			aObj.target="_blank";
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
