function toggleMenu() {
    document.querySelector('nav').classList.toggle('active');
}

function toggleMenu() {
    document.querySelector('nav').classList.toggle('active');
}

function openFullscreen(src) {
    const fullscreen = document.querySelector('.fullscreen');
    const fullscreenImage = fullscreen.querySelector('img');
    fullscreenImage.src = src;
    fullscreen.style.display = 'flex';
}

function closeFullscreen() {
    document.querySelector('.fullscreen').style.display = 'none';
}