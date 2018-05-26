console.log('test');
console.log(chrome);

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    console.log('test',url);
});
