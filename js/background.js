chrome.contextMenus.create({
    title: "翻译:%s",
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function(params){

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
            transUrl += params.selectionText;
            newBaiduWin = window.open(transUrl,items.defaultTranslation,'left=1500,top=0,width=500,height=800,location=0,status=0');
    
        })

    }
});