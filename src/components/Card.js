


export default class Card {
  constructor({data, handleCardClick}, selector) {
    this._title = data.title;
    this._photo = data.photo;
    this._selector = selector;
    this._handleCardClick = handleCardClick
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
  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  // Переключение лайка
  _handleAddLike() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  // Открытие картинки
  _handleShowPicture() {
    this._handleCardClick(this._photo, this._title);
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

