let popup = document.querySelector('.popup');
let edit = document.querySelector('.button-edit');
let popupCont = document.querySelector('.popup__container');
let closeBtn = document.querySelector('.popup__close');
let nameProfile = document.querySelector('.profile__title');
let workProile = document.querySelector('.profile__subtitle');
let namePopup = document.querySelector('.form__name');
let workPopup = document.querySelector('.form__work');
let form = document.querySelector('.form__desk');



let togglePopup = function () {
popup.classList.toggle('popup__open');
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

popup.addEventListener('click', function(event) {
    if (event.target === event.currentTarget) {
        togglePopup();
    } else if (event.target === popupCont) {
        togglePopup();
    }
})
 
closeBtn.addEventListener('click', togglePopup);

