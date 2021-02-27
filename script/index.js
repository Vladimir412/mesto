import {Card} from './Card.js';
import {FormValidator, selectors} from './FormValidator.js'
export {image, showTitle, popupImage, openPopup};


const editUserProfileButton = document.querySelector('.button-edit');
const formProfile = document.querySelector('.form_profile');
const formCard = document.querySelector('.form_card');
const plusBtn = document.querySelector('.button-plus');
const popupImage = document.querySelector('.popup_image');
const image = popupImage.querySelector('.show-image__image');
const showTitle = popupImage.querySelector('.show-image__title');
const elementsContainer = document.querySelector('.elements');
const namePopup = document.querySelector('.form__input_name');
const workPopup = document.querySelector('.form__input_work');
const nameProfile = document.querySelector('.profile__title');
const workProile = document.querySelector('.profile__subtitle');
const placeUrl = document.querySelector('.form__input_address-place');
const place = document.querySelector('.form__input_place');
const popupProfile = document.querySelector('.popup_profile');
const popupCard = document.querySelector('.popup_card');
const closeButtonProfile = popupProfile.querySelector('.button-close_profile');
const closeButtonImage = popupImage.querySelector('.button-close_image');
const closeButtonCard = popupCard.querySelector('.button-close_card');
const buttonEsc = 27;
let activePopup = null;


// Добавление каточки на страницу
function renderCard(wrap, data, selector) {
  const card = new Card(data, selector);
  const cardElement = card.generateCard()
  wrap.prepend(cardElement);
 }

 // Валидация форм
 function renderForm(selector, form) {
  const valid = new FormValidator(selector, form)
  valid.enableValidation()
}

initialCards.forEach((item) => {
  renderCard(elementsContainer, item, '#add-element')
});

  // Добавление карточек
  function addCard(evt) {
    evt.preventDefault();
    const card = {
      title: place.value,
      photo: placeUrl.value
      }

    renderCard(elementsContainer, card, '#add-element')
    closePopup(popupCard);
  }

// Переключатель попапа
function openPopup(popup) {
  activePopup = popup;
  popup.classList.add('popup__open');
  document.addEventListener('keydown', closePopupEsc);
  popup.addEventListener('mousedown', closePopupOther);
}

// Открытие добавление карточки
function openPopupAddCard() {
  openPopup(popupCard);
  formCard.reset()
  renderForm(selectors, formCard);
}

// Закрытие попапа
function closePopup(popup) {
  activePopup = null;
  popup.classList.remove('popup__open');
  document.removeEventListener('keydown', closePopupEsc);
  popup.removeEventListener('mousedown', closePopupOther);
}

// Добавление информации в profile
function handleFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = namePopup.value;
    workProile.textContent = workPopup.value;
    closePopup(popupProfile);
}


// Настройка редактора
editUserProfileButton.addEventListener('click', function () {
    namePopup.value = nameProfile.textContent;
    workPopup.value = workProile.textContent;
    openPopup(popupProfile);
    renderForm(selectors, formProfile);
});

// Закрытие попап по клику вне формы
function closePopupOther(evt) {
  if (evt.target === evt.currentTarget) {
           closePopup(evt.currentTarget);
       }
}

// Закрытие попап по нажатию ESC
function closePopupEsc(evt) {
  if (evt.keyCode === buttonEsc) {
    closePopup(activePopup)
  }
}

// Слушатели
plusBtn.addEventListener('click', openPopupAddCard);

formProfile.addEventListener('submit', handleFormSubmit);

formCard.addEventListener('submit', addCard);

closeButtonProfile.addEventListener('click', () => closePopup(popupProfile));
closeButtonImage.addEventListener('click', () => closePopup(popupImage));
closeButtonCard.addEventListener('click', () => closePopup(popupCard));
