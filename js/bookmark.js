function bookmark() {
    console.log("book mark");

    //var bookmarks = [];

    chrome.bookmarks.getTree(bookmarkPage);

    //console.log(bookmarks);
  
}

function bookmarkPage(bookmarkInfo){
    var bookmarks =  bookmarkInfo[0].children[0].children;
    
	contentAreaDiv = document.getElementById("contentArea");
	contentAreaDiv.innerHTML = "";
	
	bookmarksDiv  = document.createElement("div");
	bookmarksDiv.setAttribute("id","bookmarks")

	blockMarkObj = document.createDocumentFragment();
	itemObj = document.createElement("div");
	itemObj.setAttribute("class","items");
	for (i in bookmarks) {
        //console.log(bookmarks[i]);

		//aObj = document.createElement("a");
		//aObj.text = bookmarks[i]["title"];

		//console.log(bookmarks[i]["title"]);
		spanObj = document.createElement("span");
		spanObj.textContent = bookmarks[i].title;
		spanObj.onclick = bookmarkPageItems;
		spanObj.setAttribute("data-bmkid",bookmarks[i].id);

		//aObj.href=bookMarkList[i][k][1];

		pObj = document.createElement("p");
		pObj.appendChild(spanObj);
		itemObj.appendChild(pObj);
	}

	blockMarkObj.appendChild(itemObj);
	//document.getElementById("bookmarks").appendChild(blockMarkObj);
	bookmarksDiv.appendChild(blockMarkObj);
	contentAreaDiv.appendChild(bookmarksDiv);

	bookmarkItemsDiv  = document.createElement("div");
	bookmarkItemsDiv.setAttribute("id","bookmarkItems")
	contentAreaDiv.appendChild(bookmarkItemsDiv);

}

// 显示标签列表
function bookmarkPageItems(e){
	bmkid = e.target.getAttribute("data-bmkid");
	chrome.bookmarks.getChildren(bmkid, bookmarkPageItemsDisplay);
}

function bookmarkPageItemsDisplay(bookmarks){


	bookmarkItemsDiv = document.getElementById("bookmarkItems");
	bookmarkItemsDiv.innerHTML = "";
	bookmarkItemsDiv.setAttribute("data-bmkid",bmkid);

	blockMarkObj = document.createDocumentFragment();
	itemObj = document.createElement("div");
	itemObj.setAttribute("class","bookmarkItems");
	for (i in bookmarks) {
		//console.log(bookmarks[i]);

		//aObj = document.createElement("a");
		//aObj.text = bookmarks[i]["title"];

		//console.log(bookmarks[i]["title"]);
		aObj = document.createElement("a");
		aObj.textContent = bookmarks[i].title;
		aObj.href=bookmarks[i].url;
		aObj.onclick = bookmarkPageItemUrl;


		//aObj.href=bookMarkList[i][k][1];

		pObj = document.createElement("p");
		pObj.style.fontSize="24px";
		pObj.appendChild(aObj);

		aObj = document.createElement("a");
		aObj.textContent = "　X　";
		aObj.style.cursor='pointer';
		aObj.onclick = bookmarkPageItemDel;
		


		aObj.setAttribute("data-bmkid",bookmarks[i].id);


		pObj.appendChild(aObj);

		itemObj.appendChild(pObj);
	}
	blockMarkObj.appendChild(itemObj);
	bookmarkItemsDiv.appendChild(blockMarkObj);
}


function bookmarkPageItemUrl(e){
	window.open(e.target.href, "_blank");
	return false;
}

function bookmarkPageItemDel(e){

	bmlkId = e.target.getAttribute("data-bmkid");
	
	if (confirm("确定要删除")) {
	
		bookmarkItemsDiv = document.getElementById("bookmarkItems");
		parentBmkid= bookmarkItemsDiv.getAttribute("data-bmkid");

		chrome.bookmarks.remove(bmlkId)

		chrome.bookmarks.getChildren(parentBmkid, bookmarkPageItemsDisplay);


	} 
	
	//console.log(e.target);
}