const burgerButton = document.querySelector('.burger-button');
const navigationPanel = document.querySelector('.navigation-panel');

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('burger-button_active');
    navigationPanel.classList.toggle('navigation-panel_active')
    document.body.classList.toggle('no-scroll');
});