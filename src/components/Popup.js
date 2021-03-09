

export default class Popup {
    constructor(popup) {
        this._popup = popup;
    }

    open() {
        console.log(this._popup)
        this._popup.classList.add('popup__open');
        
        console.log(this._popup)
        document.addEventListener('keydown', this._handleEscClose.bind(this))
        this.setEventListeners()
    }

    close() {
        this._popup.classList.remove('popup__open');
        document.removeEventListener('keydown', this._handleEscClose.bind(this))
    }

    _handleEscClose(evt) {
        if (evt.keyCode === buttonEsc) {
            closePopup(this._popup)
        }
    }

    setEventListeners() {
        this._popup.querySelector('.button-close').addEventListener('click', this.close())
    }
}