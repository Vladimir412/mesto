import Popup from "./Popup";


export default class PopupWithConfirm extends Popup {
    constructor({popup}) {
        super(popup);
        this._submitForm = null;
        this._form = this._popup.querySelector('.form');
    }

    handleFormSubmit(handler) {
      this._submitForm = handler;
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._submitForm();
        })
        super.setEventListeners()
    }
}
