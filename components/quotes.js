const quoteEl = document.getElementById('quote');

async function loadQuote() {
  try {
    const response = await chrome.runtime.sendMessage({ type: 'GET_QUOTE' });
    if (response && response.q && response.a) {
      quoteEl.textContent = `“${response.q}” – ${response.a}`;
    } else {
      quoteEl.textContent = '“Stay positive. Work hard. Make it happen.”';
    }
  } catch (err) {
    console.error('Failed to load quote:', err);
    quoteEl.textContent = '“Stay positive. Work hard. Make it happen.”';
  }
}

loadQuote();
