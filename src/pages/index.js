import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {FormValidator, selectors} from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo';
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';

const editUserProfileButton = document.querySelector('.button-edit');
const formProfile = document.querySelector('.form_profile');
const formCard = document.querySelector('.form_card');
const formAvatar = document.querySelector('.form__avatar')
const plusBtn = document.querySelector('.button-plus');
const namePopup = document.querySelector('.form__input_name');
const workPopup = document.querySelector('.form__input_work');
const nameProfile = document.querySelector('.profile__title');
const workProfile = document.querySelector('.profile__subtitle');
const avatarProfile = document.querySelector('.profile__avatar');
const template = '#add-element';
const placeForElements = '.elements';
const avatarButton = document.querySelector('.button-avatar')


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co',
  authorization: 'b6b35178-16fa-4e7f-8f36-adf75a68e4d9',
  userId: 'cohort-26'
})



// Получение карточек с сервера
api.getInitialCards()
  .then((arr) => {
    placeNewCard.renderItems(arr);
  })


  //Вынести в отделную функцию(еще используется в форме настройке профиля)

api.getInfoAboutUser()
  .then(res => {
    const {name, about} = res;
    infoForm.refreshUserInfo(name, about);
  })
  .catch((err) => {
    console.log(err);
  })

api.getAvatar()
.then((res) => {
  const {avatar} = res
  infoForm.getUserAvatar(avatar);
})
.catch(err => console.log(err))


//---------------------------------------------------------------------------------------
// Настройка клсса предпросмотра карточки
const show = new PopupWithImage('.popup_image');

const myId='d6a0b80b0c8977924ae3610f';

function isLike(likes) {
  if (likes.find(item => item._id === myId)) {
    return true
  } else {
    return false
  }
}

//--------------------------------------------------------------------------------------
// Создание новой карточки
const creatNewCard = (cardData) => {
  const liked = isLike(cardData.likes);
  const card= new Card({
    data: cardData,
    myId: 'd6a0b80b0c8977924ae3610f',
    handleCardClick: () => {
      const {link, name} = cardData;
      show.open(link, name);
    },
    handleLikeClick: (cardInstance) => {
      api.updateLikes(cardInstance._liked, cardInstance._cardId)
      .then((data) => {
        cardInstance.setLikes(data.likes,isLike(data.likes))

      })
    },
    handleCardDelete: (cardInstance) => {
      popupDeleteConfirm.open()
      popupDeleteConfirm.handleFormSubmit(() => {
        api.deleteCard(cardInstance._cardId)
        .then(() => {
          cardInstance.handleDeleteCard()
          popupDeleteConfirm.close()
        })
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
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(res.status)
    })
    .then((data) => {
      const {name, about} = data
      infoForm.refreshUserInfo(name, about)
    })
    .catch(err => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      isLoading(formProfile, false);
      popupEditForm.close()
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
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      const newCard = creatNewCard(data)
      placeNewCard.addItem(newCard)
    })
    .catch(err => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      isLoading(formCard, false)
      popupAddCardForm.close()
    })
  }
})

// Настройка Формы изменения автара
const popupEditAvatar = new PopupWithForm({
  popup: '.popup_refresh-avatar',
  submitForm: (value) => {
    console.log(popupEditAvatar.popup)
    isLoading(formAvatar, true)
    api.editAvatar(value)
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(res.status);
    })
    .then((data) => {
      const {avatar} = data
      infoForm.getUserAvatar(avatar)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      isLoading(formAvatar, false)
      popupEditAvatar.close()
    })
  }
})

const popupDeleteConfirm = new PopupWithConfirm({popup: '.popup_confirm'})

//----------------------------------------------------------------------------------
// Настройка класса UserInfo
  const infoForm = new UserInfo(nameProfile, workProfile, avatarProfile);

//------------------------------------------------------------------------------------

function isLoading(form, load) {
  const saveButton = form.querySelector('.form__button_save');
  const savingButton = form.querySelector('.form__button_saving');
  if (load) {
    saveButton.classList.add('form__button_hidden');
    savingButton.classList.remove('form__button_hidden')
    console.log(saveButton)
    console.log(savingButton)
  } else {
    saveButton.classList.remove('form__button_hidden');
    savingButton.classList.add('form__button_hidden')
    console.log(saveButton)
    console.log(savingButton)
  }
}

 // Валидация форм
function renderForm(selector, form) {
  const valid = new FormValidator(selector, form);
  valid.enableValidation();
}

// Открытие редактора аватара
function openEditAvatar() {
  popupEditAvatar.open()
  renderForm(selectors, formAvatar)
}

// Открытие добавление карточки
function openPopupAddCard() {
  popupAddCardForm.open();
  renderForm(selectors, formCard);
}

// Настройка редактора
editUserProfileButton.addEventListener('click', function () {
    popupEditForm.open();
    renderForm(selectors, formProfile);
    const {firstname, profession} = infoForm.getUserInfo();
    namePopup.value = firstname;
    workPopup.value = profession;

});

// Слушатели
plusBtn.addEventListener('click', openPopupAddCard);
avatarButton.addEventListener('click', openEditAvatar)


popupEditAvatar.setEventListeners()
popupAddCardForm.setEventListeners();
show.setEventListeners()
popupDeleteConfirm.setEventListeners()
popupEditForm.setEventListeners()
