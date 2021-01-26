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
const popupProfile = document.querySelector('.popup_profile');
const popupImage = document.querySelector('.popup_image');
const popupCard = document.querySelector('.popup_card');


function createCard(card) {
  const cardElement = cardTemplate.cloneNode(true);
  const photo = cardElement.querySelector('.element__photo');
  const title = cardElement.querySelector('.element__title');
  const buttonDelete = cardElement.querySelector('.buton-delete');
  const buttonLike = cardElement.querySelector('.element__like');
  buttonDelete.addEventListener('click', handleDeleteCard);
  photo.src = card.link;
  photo.alt = card.name;
  photo.addEventListener('click', handleShowPicture);
  title.textContent = card.name;
  buttonLike.addEventListener('click', handleAddLike);
  return cardElement;
}

function renderCard(wrap, data) {
  wrap.prepend(createCard(data));
 }

initialCards.forEach((item) => {
  renderCard(elementsContainer, item);
});

  // Добавление карточек 
  function addCard(evt) {
    evt.preventDefault();
    const card = {
      name: place.value,
      link: placeUrl.value
      }

    createCard(card)
    renderCard(elementsContainer, card)
    closePopup();
  }
  
  // Удаление карточки
  function handleDeleteCard(evt) {
    evt.target.closest('.element').remove();
  }

  // Переключение лайка
  function handleAddLike(evt) {
    evt.target.classList.toggle('element__like_active');
  }

  // Открытие картинки
function handleShowPicture(element) {
  const image = popupImage.querySelector('.show-image__image');
  const showTitle = popupImage.querySelector('.show-image__title');
  const showElement = element.target.closest('.element');
  const titleElement = showElement.querySelector('.element__title');
  showTitle.textContent = showElement.textContent;
  image.src = element.target.src
  image.alt = showTitle.textContent;
  openPopupImage()
}

// Переключатель попапа
function openPopup(popup) {
  popup.classList.add('popup__open')
}
// Открытие Редактора
function openPopupEdit() {
  openPopup(popupProfile)
}

// Открытие добавление карточки
function openPopupAddCard() {
  
  openPopup(popupCard);
  place.value = '';
  placeUrl.value = '';
}

// Открытие показа картинки
function openPopupImage() {
  openPopup(popupImage)
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
plusBtn.addEventListener('click', openPopupAddCard);

formProfile.addEventListener('submit', handleFormSubmit);

formCard.addEventListener('submit', addCard);

closeBtn.forEach(function (item) {
  item.addEventListener('click', closePopup)
})


