chrome.contextMenus.create({
    title: "翻译:%s",
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function(params){

        var ldoceTpl="https://www.ldoceonline.com/dictionary/";
        var baiduTpl = 'https://fanyi.baidu.com/#en/zh/';
        var oxforTpl = 'https://www.oxfordlearnersdictionaries.com/definition/english/';
        word = params.selectionText;
        
        //ldoceTpl = ldoceTpl+word;
        baiduTpl = baiduTpl+word;
        //oxforTpl = oxforTpl+word;
        
        //ldoceWin = window.open(ldoceTpl,'ldoce','left=920,top=0,width=500,height=800,location=0,status=0');
        //oxforWin = window.open(oxforTpl,'oxford','left=1000,top=0,width=500,height=800,location=0,status=0');
        newBaiduWin = window.open(baiduTpl,'baidu','left=1500,top=0,width=500,height=800,location=0,status=0');


    }
});