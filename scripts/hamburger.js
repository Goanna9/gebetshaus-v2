const hamMenu = document.querySelector('.hamburger');
const offScreenMenu = document.querySelector('.offscreen-menu');

hamMenu.addEventListener('click', () => {
    offScreenMenu.classList.toggle('active');
    hamMenu.classList.toggle('opened');
    hamMenu.setAttribute('aria-expanded');
    hamMenu.classList.contains('opened');
})