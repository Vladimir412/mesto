const buttonEsc = 27;

export default class Popup {
    constructor(popup) {
        this._popup = document.querySelector(popup);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this)
    }

    open() {
        this._popup.classList.add('popup__open');
        document.addEventListener('keydown', this._handleEscClose)
        this._popup.addEventListener('mousedown', this._handleOverlayClose)
        // Если убрать setEventListeners() то закрытие по клику на крестик не работает на просмотре картинки (прав ли ревьюер?)
        this.setEventListeners()
    }

    close() {
        this._popup.classList.remove('popup__open');
        document.removeEventListener('keydown', this._handleEscClose)
        document.removeEventListener('mousedown', this._handleOverlayClose)
    }

    _handleEscClose(evt) {
        if (evt.keyCode === buttonEsc) {
            this.close()
        }
    }

    setEventListeners() {
        // Если убрать bind то закрытие по клику на крестик вообще нигде не работает (прав ли ревьюер?)
        this._popup.querySelector('.button-close').addEventListener('click', this.close.bind(this))
    }

    _handleOverlayClose(evt) {
        if (evt.target === evt.currentTarget) {
            this.close()
        }
    }
}
