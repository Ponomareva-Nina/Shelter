const currentPageNumber = document.querySelector('.current-page');
const bntBack = document.querySelector('.btn-back');
const btnForward = document.querySelector('.btn-forward');
const btnFirstPage = document.querySelector('.btn-first-page');
const btnLastPage = document.querySelector('.btn-last-page');
const petsTemplate = document.querySelector('.pets-grid');

let desktop = window.matchMedia("(min-width: 1279px)");
let tablet = window.matchMedia("(max-width: 1279px) and (min-width: 768px)");
let mobile = window.matchMedia("(max-width: 767px)");

document.addEventListener('DOMContentLoaded', createCardTemplate());
watchCards(); // на созданных карточках отслеживаем pop-up события 





function createCard(i) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = petsArray[i].name;
    card.classList.add(petsArray[i].name);
    card.appendChild(document.createElement('img'))
    card.querySelector('img').src = petsArray[i].img;
    card.appendChild(document.createElement('p'));
    card.querySelector('p').classList.add('font-title', 'pet-name');
    card.querySelector('.pet-name').innerHTML = petsArray[i].name;
    card.appendChild(document.createElement('button'));
    card.querySelector('button').innerHTML = 'Learn more';
    card.querySelector('button').classList.add('btn');
    return card;
};

//создаем массив из порядковых номеров карточек для 1 страницы в рандомном порядке
function createRandomCardNumbersArray() {
    let cardNumbersArray = [];

    let numberOfCardsOnPage;
    if (desktop.matches) { numberOfCardsOnPage = 8 };
    if (tablet.matches) { numberOfCardsOnPage = 6 };
    if (mobile.matches) { numberOfCardsOnPage = 3 };


    while (cardNumbersArray.length < numberOfCardsOnPage) {
       let i = Math.floor(Math.random() * petsArray.length);
       if (!cardNumbersArray.includes(i)) {
        cardNumbersArray.push(i);
       }
    }
    return cardNumbersArray;
}
//создаем массив из порядковых номеров всех карточек
function createAllCardNumbersArray(){
    let randomCardsTotalNumber = [];
    let numberOfPages;
    if (desktop.matches) { numberOfPages = 6 }; /*при наличии реального массива большого количества объектов numberOfPages будет высчитываться как petsArray.length / numberOfCardsOnPage */
    if (tablet.matches) { numberOfPages = 8 };
    if (mobile.matches) { numberOfPages = 16 };

    for (let i = 0; i < numberOfPages; i++){
    let arr = createRandomCardNumbersArray();
    randomCardsTotalNumber.push(arr);
    }
    return randomCardsTotalNumber.flat(1);
}

// создаем и добавляем карточки для всех страниц
 function createCardTemplate() {
    petsTemplate.innerHTML = "";
    let numbers = createAllCardNumbersArray();

    for (let i = 0; i < numbers.length; i++){
    let card = createCard(numbers[i]);
    petsTemplate.appendChild(card);
    }
}
