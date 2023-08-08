const waitForElement = (selector, maxWait = 10000, interval = 500) => {
    return new Promise((resolve, reject) => {
        let totalWait = 0;
        
        const intervalId = setInterval(() => {
            const element = document.querySelector(selector);

            if (element) {
                clearInterval(intervalId);
                resolve(element);
            }

            totalWait += interval;

            if (totalWait >= maxWait) {
                clearInterval(intervalId);
                console.log(`Element ${selector} not found after ${maxWait}ms.`);
                reject(new Error(`Element ${selector} not found after ${maxWait}ms.`));
            }
        }, interval);
    });
};

const waitForElements = async (selector, maxWait = 10000, interval = 500) => {
    return new Promise((resolve, reject) => {
        let totalWait = 0;

        const intervalId = setInterval(() => {
            const elements = [...document.querySelectorAll(selector)];

            if (elements.length > 0) {
                clearInterval(intervalId);
                resolve(elements);
            }

            totalWait += interval;

            if (totalWait >= maxWait) {
                clearInterval(intervalId);
                console.log(`Elements ${selector} not found after ${maxWait}ms.`);
                reject(new Error(`Elements ${selector} not found after ${maxWait}ms.`));
            }
        }, interval);
    });
};

const scrapeCurrentPage = async () => {
    return await waitForElements('.search-results-container ul .entity-result__title-line a.app-aware-link');
};

const clickNextButton = async () => {
    return new Promise((resolve) => {
        const nextButton = document.querySelector('.artdeco-pagination--has-controls button.artdeco-pagination__button--next');
        if (nextButton) {
            nextButton.click();
            setTimeout(() => resolve(true), 1000);  // Resolve with true after 1s timeout
        } else {
            resolve(false);  // Resolve with null if no next button is found
        }
    });
};

const scrapeAllResults = async () => {
    let allResults = [];
    let shouldContinue = true;
    let currentPage = 1;

    while (shouldContinue && currentPage++ < 3) {
        const currentPageResults = await scrapeCurrentPage();
        allResults.push(...currentPageResults.map((el) => el.href)));

        // Check if there's a next button and click it
        const clicked = await clickNextButton();
        console.log(clicked);
        shouldContinue = clicked;
    }

    return allResults;
};

// Start the scraping process
const getUrls = async () => {
    const results = await scrapeAllResults();
    // Some debug that will be done later
};

