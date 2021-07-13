import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {FormValidator, selectors} from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo';

const initialCards = [
  {
    title: 'Архыз',
    photo: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    photo: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    photo: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    photo: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    photo: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    photo: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const editUserProfileButton = document.querySelector('.button-edit');
const formProfile = document.querySelector('.form_profile');
const formCard = document.querySelector('.form_card');
const plusBtn = document.querySelector('.button-plus');
const namePopup = document.querySelector('.form__input_name');
const workPopup = document.querySelector('.form__input_work');
const nameProfile = document.querySelector('.profile__title');
const workProfile = document.querySelector('.profile__subtitle');
const template = '#add-element';
const placeForElements = '.elements';

//---------------------------------------------------------------------------------------
// Настройка клсса предпросмотра карточки
const show = new PopupWithImage('.popup_image');

//--------------------------------------------------------------------------------------
// Создание новой карточки
const creatNewCard = (card) => {
  return new Card({
    data: card,
    handleCardClick: () => {
      const {photo, title} = card;
      show.open(photo, title);
    }},
    template
  ).generateCard()
}

//---------------------------------------------------------------------------------------------------     
// Функция рендера массива карточек
function renderCard() {
 placeNewCard.renderItems()
}

//-------------------------------------------------------------------------------
// Функция добавления новой карточки
function insertCard(element) {
  placeNewCard.addItem(element)
}

//----------------------------------------------------------------------------------
// Настройка класса Section для отображения карточек
const placeNewCard = new Section({
  items: initialCards,
  renderer: (data) => {
    const card = creatNewCard(data)
    placeNewCard.addItem(card)
}}, placeForElements)
  

//---------------------------------------------------------------------------------------------------
// Настройка формы редактирования профиля
  const popupEditForm = new PopupWithForm({
    popup: '.popup_profile',
    submitForm: (values) => {
      const {firstname, profession} = values
      infoForm.setUserInfo(firstname, profession)
    }
  })

//-----------------------------------------------------------------------------------------------------
// Настройка формы добавлени карточки
const popupAddCardForm = new PopupWithForm({
  popup: '.popup_card',
  submitForm: (data) => {
    const {title, address} = data;
    const newCard = {};
    newCard.title = title
    newCard.photo = address
    insertCard(creatNewCard(newCard))
  }
})

//----------------------------------------------------------------------------------
// Настройка класса UserInfo
  const infoForm = new UserInfo(nameProfile, workProfile)

//------------------------------------------------------------------------------------

 // Валидация форм
 function renderForm(selector, form) {
  const valid = new FormValidator(selector, form)
  valid.enableValidation()
}

// Открытие добавление карточки
function openPopupAddCard() {
  popupAddCardForm.open()
  renderForm(selectors, formCard);
  popupAddCardForm.setEventListeners()
}

// Настройка редактора
editUserProfileButton.addEventListener('click', function () {
    popupEditForm.open()
    renderForm(selectors, formProfile);
    const {firstname, profession} = infoForm.getUserInfo()
    namePopup.value = firstname
    workPopup.value = profession
    popupEditForm.setEventListeners()
});

// Слушатели
plusBtn.addEventListener('click', openPopupAddCard);

renderCard()