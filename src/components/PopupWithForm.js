import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor({popup, submitForm}) {
        super(popup);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.form');
    }

    _getInputValues() {
        this._inputList = this._popup.querySelectorAll('.form__input');
        this._inputValues = {};
        this._inputList.forEach(input => {
            this._inputValues[input.name] = input.value;
        })
        return this._inputValues;
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._submitForm(this._getInputValues());
          this.close();
        });
        super.setEventListeners();
      }
}
