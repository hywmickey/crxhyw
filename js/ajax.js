var ajax = {
    xhr : null,
    conf: {},
    init: function(callback, type) {
        ajax.xhr = new XMLHttpRequest();
        ajax.xhr.onreadystatechange = ajax.handleStateChange;
        ajax.conf.callback = callback;
        ajax.conf.type = type;
    },
    get : function(url, oParams, callback, type, async = true) {
        var strParams = this.paramMake(oParams);
        if(strParams.length > 0) {
            url = url+'?'+strParams;
        }
        
        ajax.init(callback, type);
        ajax.xhr.open('GET',url, async);
        ajax.xhr.send();
        

    },
    post : function(url,oParams,callback, type) {
        var strParams = this.paramMake(oParams);
        ajax.init(callback, type);
        ajax.xhr.open('POST',url);
        ajax.xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        //ajax.send();

        ajax.xhr.send(strParams);
    },
    handleStateChange : function() {
        if(ajax.xhr.readyState == 4){
                if(ajax.xhr.status == 200)  {
                    var responseResult;
                    if(ajax.conf.type == 'json') {
                        responseResult = JSON.parse(ajax.xhr.responseText);
                    } else {
                        responseResult = ajax.xhr.responseText;
                    }
                    ajax.conf.callback(responseResult);
                }
        }
    },

    paramMake : function (oParams) {
        var strParams = '';
        for(var i in oParams) {
            strParams += `&${i}=${oParams[i]}`;
        }
        return strParams;
    }
};
