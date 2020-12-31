let popup = document.querySelector('.popup');
let edit = document.querySelector('.button-edit');
let popupCont = document.querySelector('.popup__container');
let closeBtn = document.querySelector('.popup__close');
let nameProfile = document.querySelector('.profile__title');
let workProile = document.querySelector('.profile__subtitle');
let namePopup = document.querySelector('.form__name');
let workPopup = document.querySelector('.form__work');
let form = document.querySelector('.form');



let openPopup = function () {
    popup.classList.add('popup__open');
    namePopup.value = nameProfile.textContent;
    workPopup.value = workProile.textContent;
}

let closePopup = function () {
    popup.classList.remove('popup__open');
}

edit.addEventListener('click', openPopup);


function handleFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = namePopup.value;
    workProile.textContent = workPopup.value;
    closePopup();
}

form.addEventListener('submit', handleFormSubmit);

closeBtn.addEventListener('click', closePopup);

