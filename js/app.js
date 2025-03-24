// For Login Page
if (window.location.pathname.endsWith('index.html')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'home.html';
    });
}

// For Home Page
if (window.location.pathname.endsWith('home.html')) {
    let currentVerse = 0;

    // Check if user is logged in
    if (!localStorage.getItem('loggedInUser')) {
        window.location.href = 'index.html';
    }

    // Display initial verse
    function displayVerse(index) {
        document.getElementById('shlokaNumber').textContent = `Verse ${index + 1}`;
        document.getElementById('verseText').textContent = verses[index];
    }

    // Initialize
    displayVerse(currentVerse);

    // Next Button
    document.getElementById('nextButton').addEventListener('click', () => {
        if (currentVerse < verses.length - 1) {
            currentVerse++;
            displayVerse(currentVerse);
        } else {
            alert('You have reached the last verse!');
        }
    });
}
