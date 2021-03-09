import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popup, submitForm) {
        super(popup)
        this._submitForm = submitForm;
    }

    _getInputValues() {
        
    }

    setEventListeners() {
        super.setEventListeners();
        this._submitForm.addEventListener('submit', (evt) => {
            evt.preventDefault();

        })
    }

    close() {
        super.close();
        this._submitForm.reset();
    }
}