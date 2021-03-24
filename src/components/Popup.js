const buttonEsc = 27;

export default class Popup {
    constructor(popup) {
        this._popup = document.querySelector(popup);
    }

    open() {
        this._popup.classList.add('popup__open');
        document.addEventListener('keydown', this._handleEscClose.bind(this))
        this.setEventListeners()
    }

    close() {
        this._popup.classList.remove('popup__open');
        document.removeEventListener('keydown', this._handleEscClose.bind(this))
    }

    _handleEscClose(evt) {
        if (evt.keyCode === buttonEsc) {
            this.close()
        }
    }

    setEventListeners() {
        this._popup.querySelector('.button-close').addEventListener('click', this.close.bind(this))
    }
}