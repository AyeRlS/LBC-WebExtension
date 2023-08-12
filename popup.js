document.getElementById('startScrape').addEventListener('click', function() {
    // Get the URL of the currently active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        let currentTab = tabs[0];
        let currentUrl = currentTab.url;

        // Create a new background tab with the current URL
        chrome.tabs.create({ url: currentUrl, active: false }, function(tab) {
            // Execute the content script on the new tab after a short delay to allow the page to load
            // open dev tools to see console.log output

            setTimeout(() => {
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ['content.js']
                });
            }, 2000);  // 2-second delay, adjust as needed
        });
    });
});
