chrome.contextMenus.create({
    title: "Cambridge Dictionary: %s",
    contexts:["selection"],
    onclick: lookUpCambridge,
});

function lookUpCambridge(info,tab) {
    if(info){
        var token=info.selectionText;
        var cambridgeUrl = 'https://dictionary.cambridge.org/search/english/direct/?q='+token;
        lookUpSelection(token, cambridgeUrl);
    }
}


function lookUpSelection(text, url){
    if(text){
        var w = 550;
        var h = 450;
        var left = (screen.width/2)-(w/2);
        var top = (screen.height/2)-(h/2);
        chrome.windows.create({'url': url,
                            'type': 'popup',
                            'width': w,
                            'height': h,
                            'left': left,
                            'top': top }, function(window) {}
                            );
    }
}

