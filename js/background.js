chrome.runtime.onInstalled.addListener(() => {
  /*
    // 创建一个主菜单项
    chrome.contextMenus.create({
      id: "parentMenu",
      title: "Parent Menu",
      contexts: ["all"]
    });

    // 创建子菜单项
    chrome.contextMenus.create({
      id: "childMenu1",
      title: "Child Menu 1",
      parentId: "parentMenu",
      contexts: ["all"]
    });
  
    chrome.contextMenus.create({
      id: "childMenu2",
      title: "Child Menu 2",
      parentId: "parentMenu",
      contexts: ["all"]
    });
  */
    // 创建一个在选中文字时出现的菜单项
    chrome.contextMenus.create({
      id: "selectionMenu",
      title: "翻译选中文字",
      contexts: ["selection"]
    });
  });
  
  // 处理点击事件
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
    //   case "childMenu1":
    //     console.log("Child Menu 1 clicked");
    //     break;
    //   case "childMenu2":
    //     console.log("Child Menu 2 clicked");
    //     break;
      case "selectionMenu":
        //console.log("Selection Menu clicked with text: " + info.selectionText);
        chrome.storage.sync.get({defaultTranslation:""},function(items){

            var ldoceTpl="https://www.ldoceonline.com/dictionary/";
            var baiduTpl = 'https://fanyi.baidu.com/#en/zh/';
            var oxforTpl = 'https://www.oxfordlearnersdictionaries.com/definition/english/';

            transUrl = baiduTpl;
            switch (items.defaultTranslation){
                case "oxford":
                    transUrl = oxforTpl;
                    break;
                case "ldoce":
                    transUrl = ldoceTpl;
                    break;
                default:
                    transUrl = baiduTpl;
            }
            transUrl += info.selectionText;
            chrome.windows.create({
                url:transUrl, 
                type: 'popup',
                left:1200,
                top:0,
                width: 500,
                height: 800,
                focused: true,
            } ,
            (window) => {
                //console.log("open window:",window);
            });
        })
        break;
    }
  });