function scrapeData() {
    // Example scraping logic - you'll need to adjust this based on the actual website structure
    let results = [];
    let items = document.querySelectorAll('.result-item'); // Assuming each result has a class "result-item"
    
    items.forEach(item => {
        // Example: get the title and link from each item
        let title = item.querySelector('.title').innerText;
        let link = item.querySelector('a').href;

        results.push({ title, link });
    });

    return results;
}

// When the scraping is done, send a message to background script to navigate to the next page
chrome.runtime.sendMessage({
    action: "scrapeComplete",
    data: scrapeData()
});