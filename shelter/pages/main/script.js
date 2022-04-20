"use strict"

const burgerButton = document.querySelector('.burger-button');
const navigationPanel = document.querySelector('.navigation-panel');
const header = document.querySelector('.header');
let menuLinks = document.querySelectorAll('.nav-link');
let mainNav = document.querySelector('.main-nav');

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('burger-button_active');
    navigationPanel.classList.toggle('navigation-panel_active')
    document.body.classList.toggle('no-scroll');
    header.classList.toggle('header_active');
});

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', () => {
    burgerButton.classList.remove('burger-button_active');
    navigationPanel.classList.remove('navigation-panel_active')
    document.body.classList.remove('no-scroll');
    header.classList.remove('header_active');
    });
});

window.addEventListener('click', elem => {
    if (navigationPanel.classList.contains('navigation-panel_active')) {
        const target = elem.target;
            
        if (!target.closest('.navigation-panel') && (!target.closest('.burger-button'))) {
            burgerButton.classList.remove('burger-button_active');
            navigationPanel.classList.remove('navigation-panel_active')
            document.body.classList.remove('no-scroll');
            header.classList.remove('header_active');
        }
    }    
});


