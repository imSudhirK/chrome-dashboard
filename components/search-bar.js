const searchBox = document.getElementById('searchBox');

searchBox.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const query = searchBox.value.trim();
        if (query) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    }
});

const lensIcon = document.getElementById('lens-icon');
if (lensIcon) {
    lensIcon.addEventListener('click', () => {
        window.open('https://lens.google.com', '_blank');
    });
}
