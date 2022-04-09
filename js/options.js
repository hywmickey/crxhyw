// Saves options to chrome.storage
function save_options() {

    var defaultPageRatios = document.getElementsByName("defaultPage");

    var defaultPageName = "";
    for (var i=0; i<defaultPageRatios.length; i++) {
        if(defaultPageRatios[i].checked) {
            defaultPageName = defaultPageRatios[i].value
        }
    }

    //console.log(defaultPageName);

    chrome.storage.sync.set({
        defaultPage:defaultPageName
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.innerHTML = '<p>保存成功</p>';
        setTimeout(function() {
            status.innerHTML = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
    defaultPage:"",
    }, function(items) {
        var defaultPageRatios = document.getElementsByName("defaultPage");
        for (var i=0; i<defaultPageRatios.length; i++) {
            if(defaultPageRatios[i].value == items.defaultPage) {
                defaultPageRatios[i].checked = true;
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
