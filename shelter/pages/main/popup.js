"use strict"

const cards = document.querySelectorAll('.card');
const popupCloseBtn = document.querySelector('.popup-close');
const body = document.querySelector('body');
const popup = document.querySelector('.popup');



cards.forEach(card => {
    card.addEventListener('click', popupToggle);
});

popupCloseBtn.addEventListener('click', popupClose);


// === закрытие попапа на клик по свободной области: ===
popup.addEventListener('click', elem => {
    if (popup.classList.contains('popup_open')) {
        const target = elem.target;
        console.log(target);
    
        if (target.closest('body') && (!target.closest('.popup-close')) && (!target.closest('.popup__wrapper'))) {
            popupClose();
        }
    }    
});

function popupToggle() {
    popup.classList.toggle('popup_open');
    document.body.classList.toggle('no-scroll');
}

function popupClose(){
    popup.classList.remove('popup_open');
    document.body.classList.remove('no-scroll');
}

function findCard() {
    
}