"use strict"

const popupCloseBtn = document.querySelector('.popup-close');
const body = document.querySelector('body');
const popup = document.querySelector('.popup');
let popupPetImage = document.querySelector('.popup__content-image');
let popupPetName = document.querySelector('.popup-pet-name');
let popupPetType = document.querySelector('.popup-pet-type');
let popupPetDescription = document.querySelector('.popup-pet-description');
let popupPetAge = document.querySelector('.pet-age-parameter');
let popupPetInoculations = document.querySelector('.pet-inoculations-parameter');
let popupPetDiseases = document.querySelector('.pet-diseases-parameter');
let popupPetParasites = document.querySelector('.pet-parasites-parameter');


watchCards();
popupCloseBtn.addEventListener('click', popupClose);


// === закрытие попапа на клик по свободной области: ===
popup.addEventListener('click', elem => {
    if (popup.classList.contains('popup_open')) {
        let target = elem.target;
       
        if (target.closest('body') && (!target.closest('.popup-close')) && (!target.closest('.popup__wrapper'))) {
            popupClose();
        }
    }    
});

//функция для навешивания обработчика на карточки (в т.ч. при анимации карусели)
function watchCards() {
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', popupToggle);
        card.addEventListener('click', () => {
            let petName = card.dataset.name;
            let petNumber = findCard(petName);
            createPopup(petNumber);
        });
    });
};

function popupToggle() {
    popup.classList.toggle('popup_open');
    document.body.classList.toggle('no-scroll');
}

function popupClose(){
    popup.classList.remove('popup_open');
    document.body.classList.remove('no-scroll');
}

function findCard(name) {
    let index;
    for (let i = 0; i < petsArray.length; i++) {
        if (petsArray[i].name == name) {
           index = i;
        }
    }
    return index;
}

function createPopup(number) {
    popupPetImage.children[0].src = petsArray[number].img;
    popupPetName.innerText = petsArray[number].name;
    popupPetType.innerText = `${petsArray[number].type} - ${petsArray[number].breed}`;
    popupPetDescription.innerText = petsArray[number].description;
    popupPetAge.innerText = petsArray[number].age;
    popupPetInoculations.innerText = petsArray[number].inoculations;
    popupPetDiseases.innerText = petsArray[number].diseases;
    popupPetParasites.innerText = petsArray[number].parasites;
}