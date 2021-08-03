import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {FormValidator, selectors} from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo';
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import {editUserProfileButton, formProfile, formCard, formAvatar, plusBtn, namePopup, workPopup, nameProfile, workProfile, avatarProfile, template, placeForElements, avatarButton} from '../utils/constants.js'

let userId = null;


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co',
  authorization: 'b6b35178-16fa-4e7f-8f36-adf75a68e4d9',
  userId: 'cohort-26'
})

function checkError(err) {
  console.log(err)
}

  Promise.all([api.getInfoAboutUser(), api.getInitialCards()])
  .then(([dataUser, dataCards]) => {
      const {name, about, avatar, _id} = dataUser;
      infoForm.setUserInfo(name, about, avatar, _id);
      userId = _id
      placeNewCard.renderItems(dataCards);
  })
  .catch(checkError)

//---------------------------------------------------------------------------------------
// Настройка клсса предпросмотра карточки
const show = new PopupWithImage('.popup_image');

function isLike(likes) {
  if (likes.find(item => item._id === userId)) {
    return true
  } else {
    return false
  }
}

//--------------------------------------------------------------------------------------
// Создание новой карточки
const creatNewCard = (cardData) => {
  const liked = isLike(cardData.likes);
  const card = new Card({
    data: cardData,
    myId: userId,
    handleCardClick: () => {
      const {link, name} = cardData;
      show.open(link, name);
    },
    handleLikeClick: (cardInstance) => {
      api.updateLikes(cardInstance.liked, cardInstance.cardId)
      .then((data) => {
        cardInstance.setLikes(data.likes,isLike(data.likes))
      })
      .catch(checkError)
    },
    handleCardDelete: (cardInstance) => {
      popupDeleteConfirm.open()
      popupDeleteConfirm.handleFormSubmit(() => {
        api.deleteCard(cardInstance.cardId)
        .then(() => {
          cardInstance.handleDeleteCard()
          popupDeleteConfirm.close()
        })
        .catch(checkError)
      })
    }
    },
    template, liked)
  .generateCard();
  return card;
}

//----------------------------------------------------------------------------------
// Настройка класса Section для отображения карточек
const placeNewCard = new Section({
  renderer: (data) => {
    const card = creatNewCard(data);
    placeNewCard.addItem(card);
}}, placeForElements);

//---------------------------------------------------------------------------------------------------
// Настройка формы редактирования профиля
const popupEditForm = new PopupWithForm({
  popup: '.popup_profile',
  submitForm: (values) => {
    isLoading(formProfile, true)
    api.editUserProfile(values)
    .then((data) => {
      const {name, about} = data
      infoForm.refreshUserInfo(name, about)
      popupEditForm.close()
    })
    .catch(checkError)
    .finally(() => {
      isLoading(formProfile, false);
    })
  }
})

//-----------------------------------------------------------------------------------------------------
// Настройка формы добавлени карточки
const popupAddCardForm = new PopupWithForm({
  popup: '.popup_card',
  submitForm: (data) => {
    isLoading(formCard, true)
    api.sentNewCard(data)
    .then((data) => {
      const newCard = creatNewCard(data)
      placeNewCard.addItem(newCard)
      popupAddCardForm.close()
    })
    .catch(checkError)
    .finally(() => {
      isLoading(formCard, false)
    })
  }
})

// Настройка Формы изменения автара
const popupEditAvatar = new PopupWithForm({
  popup: '.popup_refresh-avatar',
  submitForm: (value) => {
    isLoading(formAvatar, true)
    api.editAvatar(value)
    .then((data) => {
      const {avatar} = data
      infoForm.refreshUserAvatar(avatar)
      popupEditAvatar.close()
    })
    .catch(checkError)
    .finally(() => {
      isLoading(formAvatar, false)
    })
  }
})

const popupDeleteConfirm = new PopupWithConfirm({popup: '.popup_confirm'})

//----------------------------------------------------------------------------------
// Настройка класса UserInfo
  const infoForm = new UserInfo(nameProfile, workProfile, avatarProfile);

//------------------------------------------------------------------------------------

const validFormProfile = new FormValidator(selectors, formProfile)
const validFormAddCard = new FormValidator(selectors, formCard)
const validFormAvatar = new FormValidator(selectors, formAvatar)

function isLoading(form, load) {
  const formButton = form.querySelector('.form__button')
  if (load) {
    formButton.textContent = 'Сохранение...'
  } else {
    formButton.textContent = 'Сохранить'
  }
}

// Открытие редактора аватара
function openEditAvatar() {
  popupEditAvatar.open()
}

// Открытие добавление карточки
function openPopupAddCard() {
  popupAddCardForm.open();
}

// Настройка редактора
editUserProfileButton.addEventListener('click', function () {
    popupEditForm.open();
    const {firstname, profession} = infoForm.getUserInfo();
    namePopup.value = firstname;
    workPopup.value = profession;

});

// Слушатели
plusBtn.addEventListener('click', openPopupAddCard);
avatarButton.addEventListener('click', openEditAvatar)

validFormProfile.enableValidation()
validFormAddCard.enableValidation()
validFormAvatar.enableValidation()
popupEditAvatar.setEventListeners()
popupAddCardForm.setEventListeners();
show.setEventListeners()
popupDeleteConfirm.setEventListeners()
popupEditForm.setEventListeners()
