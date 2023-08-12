chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "closeTab") {
        chrome.tabs.remove(sender.tab.id);
    }

    if (message.action === "scrapedUrls") {
        console.log("Received URLs:", message.data);
        // Process or store the received URLs as needed
    }

    if (message.action === "scrapedPage") {
        console.log("Received page HTML:", message.data);
        // Process or store the received page HTML as needed
    }
});