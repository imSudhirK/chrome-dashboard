// load clock
(async () => {
    const res = await fetch(chrome.runtime.getURL('components/clock.html'));
    const html = await res.text();
    document.getElementById('clock-container').innerHTML = html;

    // Load the script separately after HTML is injected
    const script = document.createElement('script');
    script.type = 'module';
    script.src = chrome.runtime.getURL('components/clock.js');
    document.body.appendChild(script);
})();

// load calendar
(async () => {
    const res = await fetch(chrome.runtime.getURL('components/calendar.html'));
    const html = await res.text();
    document.getElementById('calendar-container').innerHTML = html;

    // Load the script separately after HTML is injected
    const script = document.createElement('script');
    script.type = 'module';
    script.src = chrome.runtime.getURL('components/calendar.js');
    document.body.appendChild(script);
})();

// load search bar
(async () => {
    const res = await fetch(chrome.runtime.getURL('components/search-bar.html'));
    const html = await res.text();
    document.getElementById('search-bar-container').innerHTML = html;

    // Load the script separately after HTML is injected
    const script = document.createElement('script');
    script.type = 'module';
    script.src = chrome.runtime.getURL('components/search-bar.js');
    document.body.appendChild(script);
})();

// google accounts
(async () => {
    const res = await fetch(chrome.runtime.getURL('components/accounts.html'));
    const html = await res.text();
    document.getElementById('accounts-container').innerHTML = html;
})();

// load daily quote
(async () => {
    const res = await fetch(chrome.runtime.getURL('components/quotes.html'));
    const html = await res.text();
    document.getElementById('quotes-container').innerHTML = html;

    // Load the script separately after HTML is injected
    const script = document.createElement('script');
    script.type = 'module';
    script.src = chrome.runtime.getURL('components/quotes.js');
    document.body.appendChild(script);
})();

// load todo list
(async () => {
    const res = await fetch(chrome.runtime.getURL('components/todos.html'));
    const html = await res.text();
    document.getElementById('todos-container').innerHTML = html;

    // Load the script separately after HTML is injected
    const script = document.createElement('script');
    script.type = 'module';
    script.src = chrome.runtime.getURL('components/todos.js');
    document.body.appendChild(script);
})();
