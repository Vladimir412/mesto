const popup = document.querySelectorAll('.popup');
const editUserProfileButton = document.querySelector('.button-edit');
const closeBtn = document.querySelectorAll('.button-close');
const formProfile = document.querySelector('.form_profile');
const formCard = document.querySelector('.form_card');
const plusBtn = document.querySelector('.button-plus');
const cardTemplate = document.querySelector('#add-element').content;
const elementsContainer = document.querySelector('.elements');
const elementContainer = document.querySelectorAll('.element');
const namePopup = document.querySelector('.form__input_name');
const workPopup = document.querySelector('.form__input_work');
const nameProfile = document.querySelector('.profile__title');
const workProile = document.querySelector('.profile__subtitle');
const placeUrl = document.querySelector('.form__input_address-place');
const place = document.querySelector('.form__input_place');



const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

function createCard(card) {
  const someCard = cardTemplate.cloneNode(true);
  someCard.querySelector('.buton-delete').addEventListener('click', deleteCard);
  someCard.querySelector('.element__photo').src = card.link;
  someCard.querySelector('.element__photo').addEventListener('click', showPicture);
  someCard.querySelector('.element__title').textContent = card.name;
  someCard.querySelector('.element__like').addEventListener('click', addLike);
    return someCard;
}

function renderCard(wrap, data) {
  wrap.prepend(createCard(data));
 }

initialCards.forEach((item) => {
  renderCard(elementsContainer, createCard(item));
});


  // // Создание карточек из массива
  // initialCards.forEach(function (element) {
  //   const initialCard = cardTemplate.cloneNode(true);

  //   initialCard.querySelector('.buton-delete').addEventListener('click', deleteCard)
  //   initialCard.querySelector('.element__photo').src = element.link;
  //   initialCard.querySelector('.element__photo').addEventListener('click', showPicture);
  //   initialCard.querySelector('.element__title').textContent = element.name;
  //   initialCard.querySelector('.element__like').addEventListener('click', addLike);
  //   elementsContainer.append(initialCard);
  // })

  // Добавление карточек 
  // function addCard(evt) {
  //   evt.preventDefault();
  //     const cardElement = cardTemplate.cloneNode(true);
      
  
  //     cardElement.querySelector('.element__photo').src = placeUrl.value;
  //     cardElement.querySelector('.element__photo').addEventListener('click', showPicture);
  //     cardElement.querySelector('.element__title').textContent = place.value;
  //     cardElement.querySelector('.buton-delete').addEventListener('click', deleteCard);
  //     cardElement.querySelector('.element__like').addEventListener('click', addLike);
  //     elementsContainer.prepend(cardElement);
  //     closePopup();
  // }

  // Удаление карточки
  function deleteCard(evt) {
    evt.target.closest('.element').remove();
  }

  // Переключение лайка
  function addLike(evt) {
    evt.target.classList.toggle('element__like_active');
  }

  // Открытие картинки
function showPicture(evt) {
  const image = document.querySelector('.show-image__image').src = evt.target.src
  const title = document.querySelector('.show-image__title');
  let titleElement = evt.target.closest('.element');
  titleElement = titleElement.querySelector('.element__title');
  title.textContent = titleElement.textContent;
  openPopupImage()
}

// Переключатель попапа
function togglePopup(element) {
  element.classList.toggle('popup__open')
}
// Открытие Редактора
function openPopupEdit() {
  const popupProfile = document.querySelector('.popup_profile');
  togglePopup(popupProfile)
}

// Открытие добавление карточки
function openPopupAddCard() {
  const popupCard = document.querySelector('.popup_card');

  place.value = '';
  placeUrl.value = '';
  togglePopup(popupCard)
}

// Открытие показа картинки
function openPopupImage() {
  const popupImage = document.querySelector('.popup_image');
  togglePopup(popupImage)

}
// Закрытие попапа
function closePopup() {
  popup.forEach(function (item) {
    item.classList.remove('popup__open');
  });
}

// Добавление информации в profile
function handleFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = namePopup.value;
    workProile.textContent = workPopup.value;
    closePopup();
}

// Настройка редактора
editUserProfileButton.addEventListener('click', function () {
    namePopup.value = nameProfile.textContent;
    workPopup.value = workProile.textContent;
    openPopupEdit();
});

// Слушатели
plusBtn.addEventListener('click', function () {
  openPopupAddCard();
});

formProfile.addEventListener('submit', handleFormSubmit);

// formCard.addEventListener('submit', addCard);

closeBtn.forEach(function (item) {
  item.addEventListener('click', closePopup);
})
