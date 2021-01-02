let popup = document.querySelector('.popup');
let edit = document.querySelector('.button-edit');
let closeBtn = document.querySelector('.popup__close');
let nameProfile = document.querySelector('.profile__title');
let workProile = document.querySelector('.profile__subtitle');
let namePopup = document.querySelector('.form__input_name');
let workPopup = document.querySelector('.form__input_work');
let form = document.querySelector('.form');



let openPopup = function () {
    namePopup.value = nameProfile.textContent;
    workPopup.value = workProile.textContent;
    popup.classList.add('popup__open');
}


let closePopup = function () {
    popup.classList.remove('popup__open');
}


function handleFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = namePopup.value;
    workProile.textContent = workPopup.value;
    closePopup();
}

edit.addEventListener('click', openPopup);

form.addEventListener('submit', handleFormSubmit);

closeBtn.addEventListener('click', closePopup);

