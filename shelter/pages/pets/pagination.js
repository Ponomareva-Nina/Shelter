const currentPageNumber = document.querySelector('.current-page');
const bntBack = document.querySelector('.btn-back');
const btnForward = document.querySelector('.btn-forward');
const btnFirstPage = document.querySelector('.btn-first-page');
const btnLastPage = document.querySelector('.btn-last-page');
const petsTemplate = document.querySelector('.pets-grid');

const desktop = window.matchMedia("(min-width: 1279px)");
const tablet = window.matchMedia("(max-width: 1279px) and (min-width: 768px)");
const mobile = window.matchMedia("(max-width: 767px)");

const itemWidth = 310; //ширина карточки + gap (для подсчета на сколько скроллить сетку с питомцами)

let numberOfCardsOnPage;
let numberOfColumnsOnPage;
let numberOfPages; /*при наличии реального массива большого количества объектов numberOfPages будет высчитываться как petsArray.length / numberOfCardsOnPage */
if (desktop.matches) { numberOfCardsOnPage = 8;
    numberOfColumnsOnPage = 4;
    numberOfPages = 6 };
if (tablet.matches) { numberOfCardsOnPage = 6;
    numberOfColumnsOnPage = 2;
    numberOfPages = 8 };
if (mobile.matches) { numberOfCardsOnPage = 3;
    numberOfColumnsOnPage = 1;
    numberOfPages = 16 };

let movePosition = itemWidth * numberOfColumnsOnPage;
let position = 0;

document.addEventListener('DOMContentLoaded', createCardTemplate());
watchCards(); // на созданных карточках отслеживаем pop-up события 


bntBack.addEventListener('click', moveRight);
btnForward.addEventListener('click', moveLeft);
btnFirstPage.addEventListener('click', moveFirst);
btnLastPage.addEventListener('click', moveLast);


function moveLeft(){
    position -= movePosition;
    petsTemplate.style.transform = `translateX(${position}px)`;
};
function moveRight(){
    position += movePosition;
    petsTemplate.style.transform = `translateX(${position}px)`;
};
function moveLast(){
    position = movePosition * (numberOfPages - 1);
    petsTemplate.style.transform = `translateX(-${position}px)`;
};
function moveFirst(){
    position = 0;
    petsTemplate.style.transform = `translateX(${position}px)`;
};

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

//функция для создания массива из порядковых номеров карточек для 1 страницы в рандомном порядке
function createRandomCardNumbersArray() {
    let cardNumbersArray = [];


    while (cardNumbersArray.length < numberOfCardsOnPage) {
       let i = Math.floor(Math.random() * petsArray.length);
       if (!cardNumbersArray.includes(i)) {
        cardNumbersArray.push(i);
       }
    }
    return cardNumbersArray;
}

//функция для создания массива из порядковых номеров всех карточек
function createAllCardNumbersArray(){
    let randomCardsTotalNumber = [];

    for (let i = 0; i < numberOfPages; i++){
    let arr = createRandomCardNumbersArray();
    randomCardsTotalNumber.push(arr);
    }
    return randomCardsTotalNumber.flat(1);
}

// функция для создания и добавления карточек для всех страниц
 function createCardTemplate() {
    petsTemplate.innerHTML = "";
    let numbers = createAllCardNumbersArray();

    for (let i = 0; i < numbers.length; i++){
    let card = createCard(numbers[i]);
    petsTemplate.appendChild(card);
    }
}
