// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'GET_QUOTE') {
        fetch('https://zenquotes.io/api/random')
            .then((res) => res.json())
            .then((data) => {
                const quote = data[0];
                sendResponse({ q: quote.q, a: quote.a });
            })
            .catch((err) => {
                console.error('Fetch error:', err);
                sendResponse(null);
            });

        return true; // IMPORTANT: keep message channel open
    }
});
