"use strict"

const burgerButton = document.querySelector('.burger-button');
const navigationPanel = document.querySelector('.navigation-panel');
const header = document.querySelector('.header');
let menuLinks = document.querySelectorAll('.nav-link');
let mainNav = document.querySelector('.main-nav');

// === BURGER MENU REALIZATION ===
burgerButton.addEventListener('click', menuToggle);

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', closeMenu);
});

window.addEventListener('click', elem => {
    if (navigationPanel.classList.contains('navigation-panel_active')) {
        const target = elem.target;
            
        if (!target.closest('.navigation-panel') && (!target.closest('.burger-button'))) {
            closeMenu();
        }
    }    
});

function closeMenu() {
    burgerButton.classList.remove('burger-button_active');
    navigationPanel.classList.remove('navigation-panel_active')
    document.body.classList.remove('no-scroll');
    header.classList.remove('header_active');
};

function menuToggle() {
    burgerButton.classList.toggle('burger-button_active');
    navigationPanel.classList.toggle('navigation-panel_active')
    document.body.classList.toggle('no-scroll');
    header.classList.toggle('header_active');
};

// === /BURGER MENU REALIZATION ===


// === SLIDER (CAROUSEL) OF PET CARDS === 

const sliderBtnLeft = document.querySelector('#btn-left');
const sliderBtnRight = document.querySelector('#btn-right');
const sliderTrack = document.querySelector('.slider-track');

sliderBtnLeft.addEventListener('click', moveLeft);
sliderBtnRight.addEventListener('click', moveRight);

sliderTrack.addEventListener('animationend', (animation) => {
    if (animation.animationName === 'move-left') {
        sliderTrack.classList.remove('transition-left');
        let leftItems = document.querySelector('.items-left').innerHTML;
        document.querySelector('.items-active').innerHTML = leftItems;
    } else {
        sliderTrack.classList.remove('transition-right');
        let rightItems = document.querySelector('.items-right').innerHTML;
        document.querySelector('.items-active').innerHTML = rightItems;
    }
        
    sliderBtnLeft.addEventListener('click', moveLeft); //(возвращаем слушатель после окончания анимации)
    sliderBtnRight.addEventListener('click', moveRight);
});


 function moveLeft () {
    sliderTrack.classList.add('transition-left');
    sliderBtnLeft.removeEventListener('click', moveLeft);
    sliderBtnRight.removeEventListener('click', moveRight);/*(убираем слушатели, 
    чтобы пользователь не мог нажимать по стрелке пока не завершилась анимация и не засорялся стек)*/
};

function moveRight () {
    sliderTrack.classList.add('transition-right');
    sliderBtnLeft.removeEventListener('click', moveLeft);
    sliderBtnRight.removeEventListener('click', moveRight); /*(убираем слушатели, 
    чтобы пользователь не мог нажимать по стрелке пока не завершилась анимация и не засорялся стек)*/
};

function createCardTrack () {
let card = document.createElement('div');
card.classList.add('card');
return card;
}
// === /SLIDER (CAROUSEL) OF PET CARDS === 

// === PET CARDS POPUP === 


// === /PET CARDS POPUP === 