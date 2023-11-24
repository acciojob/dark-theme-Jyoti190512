// Add an event listener to the button
document.querySelector('button').addEventListener('click', swapTheme);

function swapTheme() {
    var mainElement = document.querySelector('main');

    // Toggle between day and night themes
    if (mainElement.classList.contains('day')) {
        mainElement.classList.remove('day');
        mainElement.classList.add('night');
    } else {
        mainElement.classList.remove('night');
        mainElement.classList.add('day');
    }
}


