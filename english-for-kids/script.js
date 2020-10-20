"use strict"
const cards = [
    ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'],
    [
        {
            word: 'cry',
            translation: 'плакать',
            image: 'img/cry.jpg',
            audioSrc: 'audio/cry.mp3'
        },
        {
            word: 'dance',
            translation: 'танцевать',
            image: 'img/dance.jpg',
            audioSrc: 'audio/dance.mp3'
        },
        {
            word: 'dive',
            translation: 'нырять',
            image: 'img/dive.jpg',
            audioSrc: 'audio/dive.mp3'
        },
        {
            word: 'draw',
            translation: 'рисовать',
            image: 'img/draw.jpg',
            audioSrc: 'audio/draw.mp3'
        },
        {
            word: 'fish',
            translation: 'ловить рыбу',
            image: 'img/fish.jpg',
            audioSrc: 'audio/fish.mp3'
        },
        {
            word: 'fly',
            translation: 'летать',
            image: 'img/fly.jpg',
            audioSrc: 'audio/fly.mp3'
        },
        {
            word: 'hug',
            translation: 'обнимать',
            image: 'img/hug.jpg',
            audioSrc: 'audio/hug.mp3'
        },
        {
            word: 'jump',
            translation: 'прыгать',
            image: 'img/jump.jpg',
            audioSrc: 'audio/jump.mp3'
        }
    ],
    [
        {
            word: 'open',
            translation: 'открывать',
            image: 'img/open.jpg',
            audioSrc: 'audio/open.mp3'
        },
        {
            word: 'play',
            translation: 'играть',
            image: 'img/play.jpg',
            audioSrc: 'audio/play.mp3'
        },
        {
            word: 'point',
            translation: 'указывать',
            image: 'img/point.jpg',
            audioSrc: 'audio/point.mp3'
        },
        {
            word: 'ride',
            translation: 'ездить',
            image: 'img/ride.jpg',
            audioSrc: 'audio/ride.mp3'
        },
        {
            word: 'run',
            translation: 'бегать',
            image: 'img/run.jpg',
            audioSrc: 'audio/run.mp3'
        },
        {
            word: 'sing',
            translation: 'петь',
            image: 'img/sing.jpg',
            audioSrc: 'audio/sing.mp3'
        },
        {
            word: 'skip',
            translation: 'пропускать, прыгать',
            image: 'img/skip.jpg',
            audioSrc: 'audio/skip.mp3'
        },
        {
            word: 'swim',
            translation: 'плавать',
            image: 'img/swim.jpg',
            audioSrc: 'audio/swim.mp3'
        }
    ],
    [
        {
            word: 'cat',
            translation: 'кот',
            image: 'img/cat.jpg',
            audioSrc: 'audio/cat.mp3'
        },
        {
            word: 'chick',
            translation: 'цыплёнок',
            image: 'img/chick.jpg',
            audioSrc: 'audio/chick.mp3'
        },
        {
            word: 'chicken',
            translation: 'курица',
            image: 'img/chicken.jpg',
            audioSrc: 'audio/chicken.mp3'
        },
        {
            word: 'dog',
            translation: 'собака',
            image: 'img/dog.jpg',
            audioSrc: 'audio/dog.mp3'
        },
        {
            word: 'horse',
            translation: 'лошадь',
            image: 'img/horse.jpg',
            audioSrc: 'audio/horse.mp3'
        },
        {
            word: 'pig',
            translation: 'свинья',
            image: 'img/pig.jpg',
            audioSrc: 'audio/pig.mp3'
        },
        {
            word: 'rabbit',
            translation: 'кролик',
            image: 'img/rabbit.jpg',
            audioSrc: 'audio/rabbit.mp3'
        },
        {
            word: 'sheep',
            translation: 'овца',
            image: 'img/sheep.jpg',
            audioSrc: 'audio/sheep.mp3'
        }
    ],
    [
        {
            word: 'bird',
            translation: 'птица',
            image: 'img/bird.jpg',
            audioSrc: 'audio/bird.mp3'
        },
        {
            word: 'fish',
            translation: 'рыба',
            image: 'img/fish1.jpg',
            audioSrc: 'audio/fish.mp3'
        },
        {
            word: 'frog',
            translation: 'жаба',
            image: 'img/frog.jpg',
            audioSrc: 'audio/frog.mp3'
        },
        {
            word: 'giraffe',
            translation: 'жирафа',
            image: 'img/giraffe.jpg',
            audioSrc: 'audio/giraffe.mp3'
        },
        {
            word: 'lion',
            translation: 'лев',
            image: 'img/lion.jpg',
            audioSrc: 'audio/lion.mp3'
        },
        {
            word: 'mouse',
            translation: 'мышь',
            image: 'img/mouse.jpg',
            audioSrc: 'audio/mouse.mp3'
        },
        {
            word: 'turtle',
            translation: 'черепаха',
            image: 'img/turtle.jpg',
            audioSrc: 'audio/turtle.mp3'
        },
        {
            word: 'dolphin',
            translation: 'дельфин',
            image: 'img/dolphin.jpg',
            audioSrc: 'audio/dolphin.mp3'
        }
    ],
    [
        {
            word: 'skirt',
            translation: 'юбка',
            image: 'img/skirt.jpg',
            audioSrc: 'audio/skirt.mp3'
        },
        {
            word: 'pants',
            translation: 'брюки',
            image: 'img/pants.jpg',
            audioSrc: 'audio/pants.mp3'
        },
        {
            word: 'blouse',
            translation: 'блузка',
            image: 'img/blouse.jpg',
            audioSrc: 'audio/blouse.mp3'
        },
        {
            word: 'dress',
            translation: 'платье',
            image: 'img/dress.jpg',
            audioSrc: 'audio/dress.mp3'
        },
        {
            word: 'boot',
            translation: 'ботинок',
            image: 'img/boot.jpg',
            audioSrc: 'audio/boot.mp3'
        },
        {
            word: 'shirt',
            translation: 'рубашка',
            image: 'img/shirt.jpg',
            audioSrc: 'audio/shirt.mp3'
        },
        {
            word: 'coat',
            translation: 'пальто',
            image: 'img/coat.jpg',
            audioSrc: 'audio/coat.mp3'
        },
        {
            word: 'shoe',
            translation: 'туфли',
            image: 'img/shoe.jpg',
            audioSrc: 'audio/shoe.mp3'
        }
    ],
    [
        {
            word: 'sad',
            translation: 'грустный',
            image: 'img/sad.jpg',
            audioSrc: 'audio/sad.mp3'
        },
        {
            word: 'angry',
            translation: 'сердитый',
            image: 'img/angry.jpg',
            audioSrc: 'audio/angry.mp3'
        },
        {
            word: 'happy',
            translation: 'счастливый',
            image: 'img/happy.jpg',
            audioSrc: 'audio/happy.mp3'
        },
        {
            word: 'tired',
            translation: 'уставший',
            image: 'img/tired.jpg',
            audioSrc: 'audio/tired.mp3'
        },
        {
            word: 'surprised',
            translation: 'удивлённый',
            image: 'img/surprised.jpg',
            audioSrc: 'audio/surprised.mp3'
        },
        {
            word: 'scared',
            translation: 'испуганный',
            image: 'img/scared.jpg',
            audioSrc: 'audio/scared.mp3'
        },
        {
            word: 'smile',
            translation: 'улыбка',
            image: 'img/smile.jpg',
            audioSrc: 'audio/smile.mp3'
        },
        {
            word: 'laugh',
            translation: 'смех',
            image: 'img/laugh.jpg',
            audioSrc: 'audio/laugh.mp3'
        }
    ]
]
let category = cards[0];
let checkbox = document.querySelector('#switch');

function burgerMenu(selector) {
    let menu = document.querySelector(selector);
    let button = menu.querySelector('.burger-menu_button', '.burger-menu_lines');
    let overlay = menu.querySelector('.burger-menu_overlay');
    category.forEach(function (e, i) {
        let category = document.createElement("a");
        category.innerText = e;
        makeLinks(e, i, category);
        document.querySelector(".burger-menu_nav").appendChild(category);
        category.classList.add("burger-menu_link");
        category.addEventListener('click', () => { menu.classList.remove('burger-menu_active'); });
    })
    button.addEventListener('click', (e) => { toggleMenu(e); });
    overlay.addEventListener('click', () => { menu.classList.remove('burger-menu_active'); });
    function toggleMenu(e) {
        e.preventDefault();
        if (menu.classList.value != "burger-menu") {
            menu.classList.remove('burger-menu_active');
        } else {
            menu.classList.add('burger-menu_active');
        }
    }
}

burgerMenu('.burger-menu');

let main;
let presentCard = {};
let presentCategory = [];
let cardN = 0;
let mistakes = 0;

let state = {
    mood: "train",
    categoryName: '',
    category: 1,
}

//Пересоздание main при перекоючении чекбокса

function OnChangeCheckbox(event) {
    main.remove();
    if (checkbox.checked) {
        createPlayCategory(state.categoryName, state.category);
    } else {
        createTrainingCategory(state.categoryName, state.category);
    }
}

function remove_underline() {
    document.querySelectorAll('.burger-menu_link').forEach(element => {
        element.classList.remove('active_link');
    });
}


//Создание карточек с категориями
function createCard() {
    checkbox.removeEventListener("click", OnChangeCheckbox);
    main = document.createElement("main");
    document.body.appendChild(main);
    category.forEach(function (e, i) {
        let category = document.createElement("div");
        makeLinks(e, i, category);
        let url = cards[i + 1][0].image;
        category.innerHTML = `<figure><img src=${url} alt=${e}><figcaption>${e}</figcaption></figure>`;
        category.classList.add("category");
        main.appendChild(category);

    });

};
//прикрепление EventListener к категориям
function makeLinks(e, i, category) {
    i++;

    category.addEventListener("click", () => {
        checkbox.addEventListener("click", OnChangeCheckbox);
        remove_underline();
        category.classList.add("active_link");
        state.category = i;
        state.categoryName = e;
        if (!checkbox.checked) createTrainingCategory(e, i); else createPlayCategory(e, i);
    });
}


createCard();

//Создание страницы для тренировки
function createTrainingCategory(e, i) {
    main.remove();
    main = document.createElement("main");
    document.body.appendChild(main);
    cards[i].forEach(e => {
        let audioSrc = e.audioSrc;
        let card = document.createElement("div");
        main.appendChild(card);


        card.innerHTML = `<div class='front'><figure><img src=${e.image} alt=${e.word}><img src='img/rotate.svg' class = "img"><figcaption>${e.word}</figcaption></figure></div><div class='back'><figure><img src=${e.image} alt=${e.word}><figcaption>${e.translation}</figcaption></figure></div>`;
        let rotate = card.querySelector(".img");
        card.classList.add("card");

        rotate.addEventListener("click", (e) => {

            voice(audioSrc);
            let back = card.querySelector(".back");
            let front = card.querySelector(".front");
            back.style = "transform:rotateY(360deg);";
            front.style = "transform:rotateY(180deg);";
            back.addEventListener('mouseleave', () => {
                back.style = "transform:rotateY(180deg);";
                front.style = "transform:rotateY(0deg);";
            })

        });



    });
}
//Создание страницы с игрой
function createPlayCategory(e, i) {
    main.remove();
    main = document.createElement("main");
    document.body.appendChild(main);
    main.style = "display: block;";
    let starN = 0;
    let section3 = document.createElement("section");
    let section = document.createElement("section");
    let section2 = document.createElement("section");
    main.appendChild(section3);
    section3.classList.add("stars");
    main.appendChild(section);
    main.appendChild(section2);
    cards[i].forEach(e => {
        let card = document.createElement("div");
        section.appendChild(card);
        card.innerHTML = `<div class='front'><figure><img src=${e.image} alt=${e.word}><figcaption></figcaption></figure></div>`;
        card.classList.add("card");
        card.addEventListener("click", cardF);
        function cardF() {
            let star = document.createElement("img");
            star.style = 'order: ' + starN + ';';
            starN--;
            section3.appendChild(star);
            if (e.word == presentCard.word) {
                card.removeEventListener("click", cardF);
                cardN++;
                voice('audio/correct.mp3');
                star.src = 'img/star-win.svg';
                card.style = "cursor: auto;";
                card.classList.add("done");
                setTimeout(game, 500);
            } else {
                voice('audio/error.mp3');
                star.src = 'img/star.svg';
                mistakes++;
            }


        }



    });

    let button;
    //Создаем кнопку для старта

    function createButton() {
        button = document.createElement("input");
        section2.appendChild(button);

        button.type = "button";

        button.value = "Start game";
        button.addEventListener("click", start);
    }

    createButton();


    function start() {
        presentCategory = [];
        button.removeEventListener("click", start);
        mistakes = 0;
        cardN = 0;
        button.addEventListener("click", () => { voice(); });
        button.value = "";
        button.classList.add("active_button");
        letPresentCategory();
        game();

    }


    function game() {
        if (cardN < presentCategory.length) {
            presentCard = presentCategory[cardN];
            voice();
        } else { end(); }

    }




    function letPresentCategory() {
        let category = [];
        cards[state.category].forEach(element => {
            let copy = Object.assign({}, element);
            category.push(copy);
        });

        while (category.length > 0) {
            let i = Math.floor(Math.random() * category.length);
            presentCategory.push(...category.splice(i, 1));
        }

    }


    function end() {
        main.remove();
        main = document.createElement("main");
        let image;
        let result;
        document.body.appendChild(main);
        if (mistakes == 0) {
            voice('audio/success.mp3');
            image = 'img/success.jpg';
            result = "Великолепно";

        } else {
            voice('audio/failure.mp3');
            image = 'img/failure.jpg';
            result = "Всё очень плохо, количество ошибок =" + mistakes;
        }
        main.innerHTML = `<figure><img src=${image} alt=${result}><figcaption>${result}</figcaption></figure>`;
        setTimeout(() => { main.remove(); createCard(); }, 3000);
    }
}





function voice(song = presentCard.audioSrc) {
    let audio = new Audio();
    audio.src = song;
    audio.load();
    audio.play();
}