const observer = new MutationObserver(mutations => {
    // Check if the loader is still present
    const loader = document.querySelector('main .pvs-loader__shimmer');
    
    if (!loader) {
        const pageHTML = document.documentElement.outerHTML;
        console.log(pageHTML);
        observer.disconnect();  // Stop observing
        chrome.runtime.sendMessage({ action: "scrapedPage", data: pageHTML });
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
