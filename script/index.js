import {Card} from './Card.js';
export {image, showTitle, popupImage, openPopup};


const editUserProfileButton = document.querySelector('.button-edit');
const formProfile = document.querySelector('.form_profile');
const formCard = document.querySelector('.form_card');
const plusBtn = document.querySelector('.button-plus');
// const cardTemplate = document.querySelector('#add-element').content;
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
const cardFormSubmitButton = popupCard.querySelector('.form__button');
const profileFormSubmitButton = popupProfile.querySelector('.form__button');
const buttonEsc = 27;
let activePopup = null;


// function createCard(card) {
//   // const cardElement = cardTemplate.cloneNode(true);
//   // const photo = cardElement.querySelector('.element__photo');
//   // const title = cardElement.querySelector('.element__title');
//   // const buttonDelete = cardElement.querySelector('.buton-delete');
//   // const buttonLike = cardElement.querySelector('.element__like');
//   // buttonDelete.addEventListener('click', handleDeleteCard);
//   // photo.src = card.link;
//   // photo.alt = card.name;
//   // photo.addEventListener('click', () => handleShowPicture(card));
//   // title.textContent = card.name;
//   // buttonLike.addEventListener('click', handleAddLike);
//   return cardElement;
// }

// class Card {
//   constructor(data, selector) {
//     this._title = data.title;
//     this._photo = data.photo;
//     this._selector = selector;
//   }
  
//   _getTemplate() {
//        const cardElement = document.querySelector(this._selector).content.querySelector('.element').cloneNode(true);
//       return cardElement;
//   }

//   generateCard() {
//     this._element = this._getTemplate();
//     this._setEventListener();
    
//     this._element.querySelector('.element__photo').src = this._photo;
//     this._element.querySelector('.element__photo').alt = this._title;
//     // this._element.querySelector('.element__photo').addEventListener('click', () => handleShowPicture());
//     this._element.querySelector('.element__title').textContent = this._title;
//     // this._element.querySelector('.buton-delete').addEventListener('click', () => _handleDeleteCard(evt));
//     // this._element.querySelector('.element__like').addEventListener('click', () => _handleAddLike(evt));
    
//     return this._element
//   }
  
//   // Удаление карточки
//   _handleDeleteCard(evt) {
//       this._element.closest('.element').remove();
//   }

//   // Переключение лайка
//   _handleAddLike(evt) {
//       this._element.classList.toggle('element__like_active');
//   }

//   // Открытие картинки
//   _handleShowPicture() {
//       showTitle.textContent = this._title;
//       image.src = this._photo;
//       image.alt = this._title;
//       openPopup(popupImage)
//   }
//   _setEventListener() {
//     this._element.querySelector('.buton-delete').addEventListener('click', () => {
//       this._handleDeleteCard();
//     })

//     this._element.querySelector('.element__like').addEventListener('click', () => {
//       this._handleAddLike();
//     })

//     this._element.querySelector('.element__photo').addEventListener('click', () => {
//       this._handleShowPicture()
//     })
//   }
// }

// Добавление каточки на страницу
function renderCard(wrap, data, selector) {
  const card = new Card(data, selector);
  const cardElement = card.generateCard()
  wrap.prepend(cardElement);
 }

function clearInputValidation(selector, form) {
  const clear = new FormValidator(selector, form);
  const clearInput = clear.clearValidation()
}

 function renderForm(selector, form) {
  const valid = new FormValidator(selector, form)
  const validForm = valid.enableValidation()
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

  // // Удаление карточки
  // function handleDeleteCard(evt) {
  //   evt.target.closest('.element').remove();
  // }

  // // Переключение лайка
  // function handleAddLike(evt) {
  //   evt.target.classList.toggle('element__like_active');
  // }

//   // Открытие картинки
// function handleShowPicture(card) {
//   showTitle.textContent = card.name;
//   image.src = card.link;
//   image.alt = card.name;
//   openPopup(popupImage)
// }

// Переключатель попапа
function openPopup(popup) {
  activePopup = popup;
  popup.classList.add('popup__open');
  document.addEventListener('keydown', closePopupEsc);
}

// Открытие добавление карточки
function openPopupAddCard() {
  openPopup(popupCard);
  place.value = '';
  placeUrl.value = '';
  clearInputValidation(selectors, formCard);
  debugger
}

// Закрытие попапа
function closePopup(popup) {
  activePopup = null;
  popup.classList.remove('popup__open');
  document.removeEventListener('keydown', closePopupEsc);
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
    clearInputValidation(selectors, formProfile);
});

// Слушатели
plusBtn.addEventListener('click', openPopupAddCard);

formProfile.addEventListener('submit', handleFormSubmit);

formCard.addEventListener('submit', addCard);

closeButtonProfile.addEventListener('click', () => closePopup(popupProfile));
closeButtonImage.addEventListener('click', () => closePopup(popupImage));
closeButtonCard.addEventListener('click', () => closePopup(popupCard));

function closePopupOther(evt) {
  if (evt.target === evt.currentTarget) {
           closePopup(evt.currentTarget);
       }
}

popupCard.addEventListener('mousedown', closePopupOther);
popupImage.addEventListener('mousedown', closePopupOther);
popupProfile.addEventListener('mousedown', closePopupOther);

function closePopupEsc(evt) {
  if (evt.keyCode === buttonEsc) {
    closePopup(activePopup)
  }
}
renderForm(selectors, formCard);
renderForm(selectors, formProfile);
