chrome.contextMenus.create({
  title: "Oxford Dictionary: %s", 
  contexts:["selection"],
  onclick: lookUpOxford,
});

function lookUpOxford(info,tab) {
    if(info){
    	var token=info.selectionText;
    	var oxfordUrl = 'https://www.oxfordlearnersdictionaries.com/search/english/?q='+token;
    	lookUpSelection(token, oxfordUrl);
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
// 
// chrome.tabs.executeScript( {
// 	code: "window.getSelection().toString();"
// }, function(selection) {
//     if(selection){
//     	var token=selection[0];
//     	lookUpSelection(token);
//    	}
// });
