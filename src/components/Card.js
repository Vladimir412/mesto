



export default class Card {
  constructor({data, myId, handleCardClick, handleLikeClick, handleCardDelete}, selector, liked) {
    this._title = data.name;
    this._photo = data.link;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleCardDelete = handleCardDelete;
    this.cardId = data._id;
    this._ownerId = data.owner._id;
    this.liked = liked;
    this._counterLikes = data.likes;
    this._myId = myId;
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

    const deleteButton = this._element.querySelector('.buton-delete')

    if (this._myId === this._ownerId) {
      deleteButton.removeAttribute('hidden')
    }
    this.refreshLikesStatus()

    photo.src = this._photo;
    photo.alt = this._title;
    title.textContent = this._title;

    return this._element
  }



  refreshLikesStatus(){
    if (this.liked){
      this._element.querySelector('.element__like').classList.add('element__like_active');
    }else{
      this._element.querySelector('.element__like').classList.remove('element__like_active');
    }
    this._element.querySelector('.element__counter').textContent = this._counterLikes.length

  }

  setLikes(likes, liked) {
    this.liked = liked;
    this._counterLikes = likes;
    this.refreshLikesStatus();
  }



  // Удаление карточки
  handleDeleteCard() {
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
      this._handleCardDelete(this);
    })

    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLikeClick(this)
    })

    this._element.querySelector('.element__photo').addEventListener('click', () => {
      this._handleShowPicture()
    })
  }
}

