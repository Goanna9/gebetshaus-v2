const hamMenu = document.querySelector('.hamburger');
const offScreenMenu = document.querySelector('.offscreen-menu');
const body = document.querySelector('body');

hamMenu.addEventListener('click', () => {
    body.classList.toggle('no-scroll');
    offScreenMenu.classList.toggle('active');
    hamMenu.classList.toggle('opened');
    hamMenu.setAttribute('aria-expanded');
    hamMenu.classList.contains('opened');
})