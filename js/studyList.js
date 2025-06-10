function studyList() {

	bookMarkList = [
		[
			["Golang","https://golang.google.cn/doc/"],
			["Python","https://www.python.org/doc/"],
			["PHP","https://www.php.net/manual/"],
			["Java","https://www.liaoxuefeng.com/wiki/1252599548343744"],
			["cplusplus","https://cplusplus.com/"],
			["cppreference","https://cppreference.com/"],
			["Make","https://www.gnu.org/software/make/manual/make.html"],
			["Cmake","https://cmake.org/"],
			["lua","https://www.lua.org/docs.html"],
			["Web Dev","https://developer.mozilla.org/en-US/docs/Learn"],
			["Web API","https://developer.mozilla.org/en-US/docs/Web/API"],
			["ECMAScript","https://www.runoob.com/w3cnote/es6-concise-tutorial.html"],
			["Golang标准库", "https://pkg.go.dev/std"],
			["gorm","https://gorm.io/docs/"],
			["gin","https://gin-gonic.com/docs/"],
			["go-zero","https://go-zero.dev/docs/tasks"],
			["grpc","https://grpc.io/docs/languages/go/quickstart/"],
			["protobuf","https://protobuf.dev/"],
			["vuejs","https://vuejs.org/guide/"],
			["YII","https://www.yiiframework.com/doc/guide/"],
			["Django","https://docs.djangoproject.com/"],
			["SpringBoot","https://spring.io/guides/"],
		],
		[
			["Nginx","https://docs.nginx.com/nginx/"],
			["MySQL","https://dev.mysql.com/doc/"],
			["PostgreSQL","https://www.postgresql.org/docs/current/"],
			["Redis","https://redis.io/docs/"],
			["Mongodb","https://www.mongodb.com/docs"],
			["Docker","https://docs.docker.com/manuals/"],
			["K8s","https://kubernetes.io/zh-cn/docs/home/"],
			["K3s","https://docs.k3s.io/"],
			["Kafka","https://kafka.apache.org/documentation/"],
			["RocketMQ","https://rocketmq.apache.org/docs/"],
			["ES","https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html"],
			["Jupyter","https://docs.jupyter.org/en/latest/"],
			["Solr","https://solr.apache.org/guide/solr/latest/index.html"],
			["Logstash","https://www.elastic.co/guide/en/logstash/current/introduction.html"],
			["Kibana","https://www.elastic.co/guide/en/kibana/current/index.html"],
			["Grafana","https://grafana.com/docs/"],
			["Prometheus","https://prometheus.io/docs/"],
			["Etcd","https://etcd.io/docs/"],
			["Zookeeper","https://zookeeper.apache.org/doc/current/"],
			["Clickhouse","https://clickhouse.com/docs"],
			["Hadoop","https://hadoop.apache.org/docs/stable/"],
			["ELK","https://blog.csdn.net/weixin_40228200/article/details/123930498"],
			["Spark","https://spark.apache.org/"],
			["Tensorflow","https://www.tensorflow.org/tutorials"],
			["Garnet","https://microsoft.github.io/garnet/docs"],
			["Istio","https://istio.io/"],
			["Seata","https://seata.apache.org/docs/user/quickstart/"],
			["API Gateway","https://blog.csdn.net/github_35631540/article/details/115761241"],
			["鸟哥Linux","https://linux.vbird.org/linux_basic/"],
			["Linux Man", "https://man7.org/linux/man-pages/index.html"],
			["Coreutils","https://www.gnu.org/software/coreutils/manual/html_node/"],
			["Glibc","https://sourceware.org/glibc/manual/latest/html_node/index.html"],
			["Xcode Man","https://keith.github.io/xcode-man-pages/"],
		],
		[
			["LFS", "https://www.linuxfromscratch.org/lfs/read.html"],
			["Gentoo","https://www.gentoo.org/support/documentation/"],
			["Arch","https://wiki.archlinux.org/title/General_recommendations"],
			["Debian手册", "https://www.debian.org/doc/manuals/debian-reference/"]
		],
		[
			["CS自学指南","https://csdiy.wiki/"],
			["w3schools","https://www.w3schools.com/"],
			["javatpoint","https://www.javatpoint.com/"],
			["架构驿站","https://jiagouyizhan.com/"],
			["小徐先生编程世界","https://space.bilibili.com/317473362/video"],
			["爱编程的大丙","https://subingwen.cn/"],
			["IT老齐架构300讲","https://space.bilibili.com/359351574/channel/collectiondetail?sid=34444"],
			["Go程序设计语言","https://space.bilibili.com/283633806/channel/collectiondetail?sid=418349&ctype=0"],
			["简说linux","https://space.bilibili.com/646178510/video"],
			["重构","https://refactoring.guru/"],
			["Java设计模式","https://java-design-patterns.com/"],
			["Coding Master","https://space.bilibili.com/41036636/channel/collectiondetail?sid=1096"],
			["补给站Linux内核","https://space.bilibili.com/1270307228/article"],
			["CPP开发","https://space.bilibili.com/1112739297/video"],
			["cppguide.cn", "https://cppguide.cn/"],
			["golang云原生","https://space.bilibili.com/1522375372/video"],
			["阿布编程","https://space.bilibili.com/261582436/video"],
			["Play with Kubernetes","https://labs.play-with-k8s.com/"],
			["幼麟实验室","https://space.bilibili.com/567195437/video"],
			["李文周的博客", "https://www.liwenzhou.com/"],
			["地鼠文档", "http://wen.topgoer.com/"],
			["书栈网", "https://www.bookstack.cn/"],
			["刘丹冰作品集","https://zhuanlan.zhihu.com/p/513990972"],
			["TecMint","https://www.tecmint.com/"],
		],
		[
			["roadmap","https://roadmap.sh/"],
			["geeksforgeeks","https://www.geeksforgeeks.org/fundamentals-of-algorithms/"],
			["hackerrank","https://www.hackerrank.com/dashboard"],
			["信息学奥林匹克竞赛","https://oi-wiki.org/"],
			["数据结构和算法","https://www.runoob.com/data-structures/data-structures-tutorial.html"],
			["代码随想录","https://www.programmercarl.com/"],
			["Hello 算法","https://www.hello-algo.com/"],
			["开源算法库","https://the-algorithms.com/zh_Hans"],
			["Algorithms", "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html"],
			["VisuAlgo", "https://visualgo.net/zh/"],
			["algorithm", "https://algorithm-visualizer.org/"],
		],
		[
			["redisTry", "https://try.redis.io/"],
			["replit","https://replit.com/"],
			["Mooc", "https://www.icourse163.org/"],
			["bilibili", "https://space.bilibili.com/456882810/favlist?fid=963174610&ftype=create"],
			["0voice","https://github.com/0voice"],
			["Linux系统编程", "https://www.bilibili.com/video/BV1gb411L7fK"],
			["算法导论","https://www.bilibili.com/video/BV1B34y1S7Js/"],
			["深入理解计算机系统", "https://www.bilibili.com/video/BV1Vh411r7ef/"],
			["网页配色", "http://tool.c7sky.com/webcolor/"],
			["CSDN", "https://blog.csdn.net/nav/watchers"],
			["小林coding","https://xiaolincoding.com/"],
			["廖雪峰的官方网站", "https://www.liaoxuefeng.com/"],
			["Go指南", "https://tour.go-zh.org/"],
			["在线运行SQL","http://mysql.jsrun.net/"],
			["golinuxcloud","https://www.golinuxcloud.com/"],
			["w3cschool", "https://www.w3cschool.cn/tutorial/"],
			["C语言中文网", "http://c.biancheng.net/"],
			["金步国作品集", "http://www.jinbuguo.com/"],
			["元岛", "https://www.midorg.com/"],
			["菜鸟", "https://www.runoob.com/"],
			["编程自学之路", "https://r2coding.com/"],
			["divcss5", "http://www.divcss5.com/"],
			["leetcode", "https://leetcode.cn/problemset/all/"],
			["Unix Tutorial", "https://rc.byu.edu/documentation/unix-tutorial/"],
			["爱课程", "https://www.icourses.cn/"],
			["linux265", "https://linux265.com/"],
			["64k动画", "https://www.pouet.net/"],
			["搜榜", "https://www.bjsoubang.com/"]
		],
		[
			["Oxford", "https://www.oxfordlearnersdictionaries.com/"],
			["LDOCE", "https://www.ldoceonline.com/"],
			["am774","http://www.am774.com/textbook/textbook.shtml"],
			["EF", "https://www.ef.com/wwen/english-resources/"],
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
