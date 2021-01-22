const popup = document.querySelectorAll('.popup');
const edit = document.querySelector('.button-edit');
const closeBtn = document.querySelectorAll('.button-close');
const formProfile = document.querySelector('.form_profile');
const formCard = document.querySelector('.form_card');
const formBtn = document.querySelector('.form__button');
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
const elemenstPhoto = document.querySelectorAll('.element__photo');


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

  initialCards.forEach(function (element) {
    const initialCard = cardTemplate.cloneNode(true);

    initialCard.querySelector('.buton-delete').addEventListener('click', deleteCard)
    initialCard.querySelector('.element__photo').src = element.link;
    initialCard.querySelector('.element__photo').addEventListener('click', showPicture);
    initialCard.querySelector('.element__title').textContent = element.name;
    initialCard.querySelector('.element__like').addEventListener('click', addLike);
    elementsContainer.append(initialCard);
  })

  function deleteCard(evt) {
    evt.target.closest('.element').remove();
  }

  function addLike(evt) {
    evt.target.classList.toggle('element__like_active');
  }

function addCard(evt) {
  evt.preventDefault();
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.element__photo').src = placeUrl.value;
    cardElement.querySelector('.element__photo').addEventListener('click', showPicture);
    cardElement.querySelector('.element__title').textContent = place.value;
    cardElement.querySelector('.buton-delete').addEventListener('click', deleteCard);
    cardElement.querySelector('.element__like').addEventListener('click', addLike);
    elementsContainer.prepend(cardElement);
    closePopup();
}

function showPicture(evt) {
  const image = document.querySelector('.show-image__image').src = evt.target.src
  const title = document.querySelector('.show-image__title');
  let titleElement = evt.target.closest('.element');
  titleElement = titleElement.querySelector('.element__title');
  title.textContent = titleElement.textContent;
  openPopupImage()
}


function openPopupEdit() {
  const popupProfile = document.querySelector('.popup_profile');
  popupProfile.classList.add('popup__open');
}

function openPopupAddCard() {
  const popupCard = document.querySelector('.popup_card');

  place.value = '';
  placeUrl.value = '';
  popupCard.classList.add('popup__open');
}

function openPopupImage() {
  const popupImage = document.querySelector('.popup_image');
  popupImage.classList.add('popup__open');
}

function closePopup() {

  popup.forEach(function (item) {
    item.classList.remove('popup__open');
  });
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = namePopup.value;
    workProile.textContent = workPopup.value;
    closePopup();
}

edit.addEventListener('click', function () {
    namePopup.value = nameProfile.textContent;
    workPopup.value = workProile.textContent;
    openPopupEdit();
});

plusBtn.addEventListener('click', function () {
  openPopupAddCard();
});

formProfile.addEventListener('submit', handleFormSubmit);

formCard.addEventListener('submit', addCard);

closeBtn.forEach(function (item) {
  item.addEventListener('click', closePopup);
})
