import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {FormValidator, selectors} from '../components/FormValidator.js';
import {initialCards} from '../script/initial-cards.js';
import UserInfo from '../components/UserInfo';


const editUserProfileButton = document.querySelector('.button-edit');
const formProfile = document.querySelector('.form_profile');
const formCard = document.querySelector('.form_card');
const plusBtn = document.querySelector('.button-plus');
const namePopup = document.querySelector('.form__input_name');
const workPopup = document.querySelector('.form__input_work');
const nameProfile = document.querySelector('.profile__title');
const workProfile = document.querySelector('.profile__subtitle');


//---------------------------------------------------------------------------------------

const popupOpenImage = (img, head) => {
  const show = new PopupWithImage('.popup_image');
          show.open(img, head);
}

//--------------------------------------------------------------------------------------

const creatNewCard = (card) => {
  return new Card(
    card,
    {handleCardClick: popupOpenImage},
    '#add-element'
  ).generateCard()
}

//----------------------------------------------------------------------------------------------------

function renderCard(item) {
  const addArrCards = new Section({
    items: item,
    renderer: (item) => {
      const card = creatNewCard(item)
      const cardElement = card;
      addArrCards.addItem(cardElement)
    }
  }, '.elements')
  addArrCards.renderItems()
}

//---------------------------------------------------------------------------------------------------

  const popupEditForm = new PopupWithForm({
    popup: '.popup_profile',
    submitForm: (values) => {
      const {firstname, profession} = values
      infoForm.setUserInfo(firstname, profession)
    }
  }
  )

//-----------------------------------------------------------------------------------------------------

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

  const infoForm = new UserInfo(nameProfile, workProfile)

//-------------------------------------------------------------------------------

const insertCard = (element) => {
  const insert = new Section({
    element,
    renderer: element
  },
  '.elements'
  )
  insert.addItem(element)
}

//------------------------------------------------------------------------------------

 // Валидация форм
 function renderForm(selector, form) {
  const valid = new FormValidator(selector, form)
  valid.enableValidation()
}

  // Добавление карточек
  function addCard() {
    popupAddCardForm
 
  }

// Открытие добавление карточки
function openPopupAddCard() {
  popupAddCardForm.open()
  formCard.reset()
  renderForm(selectors, formCard);
}

// Добавление информации в profile
function handleFormSubmit () {
    popupEditForm
}

// Настройка редактора
editUserProfileButton.addEventListener('click', function () {
    popupEditForm.open();
    renderForm(selectors, formProfile);
    infoForm.getUserInfo(namePopup, workPopup);
});

// Слушатели
plusBtn.addEventListener('click', openPopupAddCard);

formProfile.addEventListener('submit', handleFormSubmit);

formCard.addEventListener('submit', addCard)

renderCard(initialCards)