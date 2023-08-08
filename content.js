// Logic to click on the "Next" button
function clickNextAndScrape() {
    let nextPageButton = document.querySelector('YOUR_NEXT_BUTTON_SELECTOR_HERE');
    if (nextPageButton && scrapedPages < 2) {
        nextPageButton.click();

        // Wait for the next page to load and then scrape again
        setTimeout(() => {
            scrapeData();
            scrapedPages++;
            clickNextAndScrape();
        }, 5000);  // Adjust the delay as needed
    } else {
        // If no next button or reached the limit, send a message to the background to close the tab
        chrome.runtime.sendMessage({ action: "closeTab" });
    }
}

scrapeData();
scrapedPages++;
clickNextAndScrape();