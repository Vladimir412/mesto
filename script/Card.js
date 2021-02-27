import {image, showTitle, popupImage, openPopup} from './index.js';


class Card {
  constructor(data, selector) {
    this._title = data.title;
    this._photo = data.photo;
    this._selector = selector;
  }
  
  // Получаем карточку
  _getTemplate() {
       const cardElement = document.querySelector(this._selector).content.querySelector('.element').cloneNode(true);
      return cardElement;
  }
  // Создаем карточку
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListener();
    const photo = this._element.querySelector('.element__photo');
    const title = this._element.querySelector('.element__title');
    
    photo.src = this._photo;
    photo.alt = this._title;
    title.textContent = this._title;
    
    return this._element
  }
  
  // Удаление карточки
  _handleDeleteCard(evt) {
      this._element.closest('.element').remove();
  }

  // Переключение лайка
  _handleAddLike(evt) {
      this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  // Открытие картинки
  _handleShowPicture() {
      showTitle.textContent = this._title;
      image.src = this._photo;
      image.alt = this._title;
      openPopup(popupImage)
  }

  // Объединяем всех слушателей в одну функцию
  _setEventListener() {
    this._element.querySelector('.buton-delete').addEventListener('click', () => {
      this._handleDeleteCard();
    })

    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleAddLike();
    })

    this._element.querySelector('.element__photo').addEventListener('click', () => {
      this._handleShowPicture()
    })
  }
}

export {Card};
