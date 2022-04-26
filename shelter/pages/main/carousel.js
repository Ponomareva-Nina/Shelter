// === SLIDER (CAROUSEL) OF PET CARDS === 
let petsArray = [ 
    {   "name": "Jennifer",
        "img": "../../assets/images/jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {   "name": "Sophia",
        "img": "../../assets/images/sophia.jpg",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "../../assets/images/katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/charly.jpg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
]

const sliderBtnLeft = document.querySelector('#btn-left');
const sliderBtnRight = document.querySelector('#btn-right');
const sliderTrack = document.querySelector('.slider-track');
let leftItems = document.querySelector('.items-left');
let rightItems = document.querySelector('.items-right');
let activeItems = document.querySelector('.items-active');

sliderBtnLeft.addEventListener('click', moveLeft);
sliderBtnRight.addEventListener('click', moveRight);

sliderTrack.addEventListener('animationend', (animation) => {
    watchCards();
    if (animation.animationName === 'move-left') {
        sliderTrack.classList.remove('transition-left');
        activeItems.innerHTML = leftItems.innerHTML; 
        leftItems.innerHTML = "";

        createNewCardsTemplate(leftItems);
        
        rightItems.innerHTML = leftItems.innerHTML;

    } else {
        sliderTrack.classList.remove('transition-right');
        activeItems.innerHTML = rightItems.innerHTML;
        rightItems.innerHTML = "";
       
        createNewCardsTemplate(rightItems);

        leftItems.innerHTML = rightItems.innerHTML;
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
}

function createNewCardsTemplate(sideItems) {
    let activeArray = [];
    for (i = 0; i < activeItems.children.length; i++){
        activeArray.push(activeItems.children[i].classList[1]); 
    }; //создадим массив имен текущих питомцев (для проверки отсутствия новой карточки в текущей активной группе)
    
    let index = Math.floor(Math.random() * petsArray.length); //создаем рандомный индекс для генерации карточки питомца
    
    for (i = index; i < petsArray.length; i++) {
        let card = createCard(i);

        if(!activeArray.includes(card.classList[1])){
            sideItems.appendChild(card);
        }
        if(sideItems.children.length < 3 && i == petsArray.length - 1) {
            i = 0;
        }
        if (sideItems.children.length == 3){
            break;
        }
    }
}

// === /SLIDER (CAROUSEL) OF PET CARDS === 