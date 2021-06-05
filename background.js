let prodUrls = [
    {url: 'vrspace.lt'}
]


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab){
    if (changeInfo.status === 'complete') {
        if (resultMatch(tab.url)) {
            chrome.tabs.executeScript(tabId, {
                file: 'alertMessage.js'
            });
        }
    }
});

function resultMatch(tabUrl) {
    const parsedUrl = getParsedUrl(tabUrl)
    console.log(parsedUrl)

    for (let i = 0; i < prodUrls.length; i++) {
        console.log(prodUrls[i].url)
        if (parsedUrl === prodUrls[i].url || parsedUrl === 'www.' + prodUrls[i].url) {
            console.log(true);
            return true;
        }
    }
    console.log(false)
    return false;
}

function getParsedUrl(url) {
    const currentUrl = url.match(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/igm);
    const parsedUrl = currentUrl.toString().replace(/(^\w+:|^)\/\//, '');
    
    return parsedUrl;
}

