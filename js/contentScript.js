


// 站点设置
var strhref = window.location.href;
var wxre = /wx.qq.com/;
var bdfyre = /fanyi.baidu.com/;
var bdre = /www.baidu.com/;
var wxmpret = /mp.weixin.qq.com/;
var soret = /www.so.com/;
var newssoret = /news.so.com/;
var sogou123ret = /123.sogou.com/;
var jb51ret = /www.jb51.net/;
var biliret = /bilibili.com/
// 微信页面处理
if(wxre.test(strhref)) {
    commonsetting();
    wxpage();
} else if(bdfyre.test(strhref)) {
    //commonsetting();
    bdfypage();
} else if(bdre.test(strhref)) {
    //commonsetting();
    //bdpage();
} else if(wxmpret.test(strhref)) {
    //commonsetting();
    //wxmppage();
}
// else if(soret.test(strhref)) {
//     commonsetting();
//     sopage();
// } 
// else if(newssoret.test(strhref)) {
//     commonsetting();
//     newssopage();
// } 
else if(sogou123ret.test(strhref)) {
    commonsetting();
    sogou123page();
} else if (biliret.test(strhref)) {
    biliPage();
}
// else if(jb51ret.test(strhref)) {
//     jb51page();
// }


//默认设置
function commonsetting() {
    document.body.style.background = '#b8b8b8';
}


function wxpage() {

    // 隐藏顶部导航
    var wxnav = document.querySelector("body > div.main > div > div.panel.give_me > div.tab");
    if (wxnav) wxnav.style.display = 'none';
    

    // 隐藏下载导航
    var downloadWx = document.querySelector("body > div.main > div > div.panel.give_me > div.download_entry.ng-scope");
    if (downloadWx) downloadWx.style.visibility="hidden";

    // 改变背景色
    document.body.style.background = 'black';

    // 好友列表修改
    var frinedList = document.querySelector("body > div.main > div > div.panel.give_me > div:nth-child(6)");
    if (frinedList) frinedList.style.top = '50px';

    // 删除用户信息展现
    var header = document.querySelector("body > div.main > div > div.panel.give_me > div.header");
    if (header) header.parentNode.removeChild(header);

    // 聊天区域修改
    var chatArea = document.querySelector("#chatArea");
    if (chatArea) chatArea.addEventListener('mouseover', function(e) {

        // 整个顶部置黑
        var box_hd = document.querySelector("#chatArea");
        box_hd.style.background = 'black';
        box_hd.style.backgroundColor = 'black';

        box_hd = document.querySelector("#chatArea > div.box_hd");
        box_hd.style.background = 'black';

        // 顶部title 样式变更
        box_hd = document.querySelector("#chatArea > div.box_hd > div.title_wrap");
        box_hd.style.background = 'black';
        box_hd.style.color = 'white';

        box_hd = document.querySelector("#chatArea > div.box_hd > div.title_wrap > div > a");
        box_hd.style.color = 'white';

        // 聊天输出框修改
        var chatAreaOutput = document.querySelector("#chatArea > div.scroll-wrapper.box_bd.chat_bd.scrollbar-dynamic")
        chatAreaOutput.style.background = "black";

        // 聊天输入框修改
        var chatAreaInput = document.querySelector("#chatArea > div.box_ft.ng-scope")
        chatAreaInput.style.background = 'black';
        chatAreaInput.style.color = 'white';

    });

    // 好友列表修改
    var friendList = document.querySelector("#J_NavChatScrollBody > div");
    friendList.addEventListener('mouseover', function(e) {
        // 隐藏好友头像
        var avatarList = document.getElementsByClassName('avatar');
        for (var i = avatarList.length - 1; i >= 0; i--) {
            avatarList[i].style.visibility = 'hidden';
        }

        // 删除好友列表中某个好友
        var chatItemList = document.getElementsByClassName('chat_item');
        var re = /8fda04592504422cef3c787c353998c30c3662db131f25bdcc335e76bdd91c7c/;
        for (var i = chatItemList.length - 1; i >= 0; i--) {
             chatItem = chatItemList[i];
             chatItem.style.background = 'black';

             datausername = chatItem.getAttribute('data-username');
             if(re.test(datausername)) {
                    console.log(datausername);
                    chatItem.parentNode.removeChild(chatItem);
             }
        }
    });

}
// 百度翻译页面处理
function bdfypage() {

    // 删除左边导航
    // var sidenav = document.querySelector("#side-nav");
    // sidenav.parentNode.removeChild(sidenav);
    // 正文内容紧贴窗口左边
    // document.querySelector("#main-outer > div > div").style.margin = '0px';
    // 删除页面右边广告
    var transOtherRight = document.querySelector("#transOtherRight")
    transOtherRight.parentNode.removeChild(transOtherRight);
    var transRight = document.querySelector("#main-outer > div > div > div.translate-wrap > div.translateio > div.translate-main.clearfix > div.trans-right");
    transRight.style.float = "none";
    var transLeft = document.querySelector("#main-outer > div > div > div.translate-wrap > div.translateio > div.translate-main.clearfix > div.trans-left");
    transLeft.style.float = "none";
    //transRight.style.clear = "both";
    
}

// 百度搜索页面处理
function bdpage() {
    // 改变背景色
    document.body.style.background = '#d8d8d8';


    // content_left
    var wrapper = document.querySelector("#wrapper");
    wrapper.addEventListener('mouseover', function(e) {
        document.querySelector("#content_right").style.visibility='hidden'; 
    });



    // 删掉右侧内容
    document.querySelector("#content_right").style.visibility='hidden'; 
    document.querySelector("#content_right").style.display='none';

    document.querySelector("#head > div").style.background = '#d8d8d8';

    document.querySelector("#s_tab").style.background = '#d8d8d8';
}

// 微信文章页面
function wxmppage() {
    //document.querySelector("#page-content").style.background = '#d8d8d8';
    //document.querySelector("#page-content").style.background = '#378826';
    var qrcode = document.querySelector("#js_pc_qr_code");
    qrcode.parentNode.removeChild(qrcode);
}

// 360 搜索
function sopage() {
    // 改变背景色
    document.body.style.background = '#b8b8b8';
    // 删掉右侧内容
    //document.querySelector("#main").style.background='gray';

    document.querySelector("#side").style.visibility='hidden'; 

    document.querySelector("#g-hd").style.background = '#378826';

    document.querySelector("#tabs-wrap").style.background = '#378826';
    //document.querySelector("#head > div").style.background = '#378826';

    document.querySelector("#main > div.info-stream").style.visibility='hidden'; 

    //document.querySelector("#s_tab").style.background = '#378826';
}

function newssopage() {
    document.querySelector("#side").style.visibility='hidden'; 
    var sidebar = document.querySelector("#main > div.info-stream > div");
    sidebar.parentNode.removeChild(sidebar); 
    //document.querySelector("#mvdiv_1036212_holder").style.visibility = 'hidden';
}

function sogou123page() {
    document.querySelector("body").style.visibility='hidden'; 
}

function jb51page() {
    removeByQuerySelector('#container > div.pt10.clearfix');
    removeByQuerySelector('#aswift_0');
    removeByQuerySelector('#aswift_1');
    removeByQuerySelector('#_as98qfrbiws');
    removeByQuerySelector('#content > div.lbd_bot.clearfix');
    removeByQuerySelector('#article > div.tags.clearfix');
    removeByQuerySelector('#sidebar-right > div.mt10.rFixedBox');
    removeByQuerySelector('#pic_container');
    removeByQuerySelector('#sidebar-right > div:nth-child(9)');
    removeByQuerySelector('#sidebar-right > div:nth-child(5)');
    removeByQuerySelector('#sidebar-right > div:nth-child(3)');
    removeByQuerySelector('#article > div:nth-child(7)');
    removeByQuerySelector('#sidebar-right > div.sidebox-recomm');
    removeByQuerySelector('#sidebar-right > div:nth-child(1)');
    removeByQuerySelector('#header');
    
}

function biliPage(){
    // 判断 indow.location.href 是不是包含 https://www.bilibili.com/?
    if (window.location.host == 'www.bilibili.com' && window.location.pathname == "/") {
        document.head.innerHTML = '<style>body{background-color:black;}</style>';
        document.body.innerHTML = '<div style="width:100%;height:100vh;background-color:black;"></div>';
    } else if (window.location.host == "t.bilibili.com") { // 视频页
        var style = document.createElement('style');
        style.innerHTML = '.bili-dyn-list__item {margin: 0px;display:inline-block;width: 33%;} ';
        style.innerHTML += '.bili-dyn-publishing {display:none;} ';
        style.innerHTML += 'aside.left,aside.right {display:none;} ';
        style.innerHTML += '#app > div.bili-dyn-home--member {width: 100%;} ';
        style.innerHTML += '#app > div.bili-dyn-home--member > main {width:100%;} ';
        style.innerHTML += '.bili-dyn-item__main {padding: 0 0 0 0;} ';
        //style.innerHTML += '.bili-dyn-avatar {display:none;} ';
        document.head.appendChild(style);
    }
}


function removeIframe() {

}


function removeByQuerySelector(strSelector) {
    var oDom = document.querySelector(strSelector);

    if(!isNull(oDom)) {
        oDom.remove(); 
    } else {
        console.log('not fund:'+strSelector);
    }
}


function setHiddenByQuerySelector(strSelector) {
    var oDom = document.querySelector(strSelector);

    if(!isNull(oDom)) {
        oDom.style.visibility='hidden'; 
    } else {
        console.log('not fund:'+strSelector);
    }
}


function isNull(value) {
    if (!value && typeof value != "undefined" && value != 0) {
        return true;
    } else {
        return false;
    }
}
