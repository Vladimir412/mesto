let overlay = document.querySelector('.overlay');
let edit = document.querySelector('.button-edit');
let popup = document.querySelector('.popup');
let closeBtn = document.querySelector('.popup__close');
let nameProfile = document.querySelector('.profile__title');
let workProile = document.querySelector('.profile__subtitle');
let namePopup = document.querySelector('.form__name');
let workPopup = document.querySelector('.form__work');
let form = document.querySelector('.form__desk');

let togglePopup = function () {
overlay.classList.toggle('overlay_open');
}

edit.addEventListener('click', togglePopup)

namePopup.value = nameProfile.textContent;
workPopup.value = workProile.textContent;

function handleFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = namePopup.value;
    workProile.textContent = workPopup.value;
    togglePopup()
}

form.addEventListener('submit', handleFormSubmit)

overlay.addEventListener('click', function(event) {
    if (event.target === event.currentTarget) {
        togglePopup();
    } else if (event.target === popup) {
        togglePopup();
    }
})
 
closeBtn.addEventListener('click', togglePopup);

let like = document.querySelectorAll('.element__like');

