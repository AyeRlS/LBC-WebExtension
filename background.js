chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "scrapeComplete") {
        console.log("Scraped Data:", message.data);

        // Navigate to the next page - you'll need to adjust this based on the actual website structure
        let nextPageLink = new URL(sender.tab.url);
        let currentPageNumber = parseInt(nextPageLink.searchParams.get('page') || '1');
        nextPageLink.searchParams.set('page', currentPageNumber + 1);

        // Navigate to the next page
        chrome.tabs.update(sender.tab.id, { url: nextPageLink.toString() });
    }
});