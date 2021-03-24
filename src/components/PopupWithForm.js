import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor({popup, submitForm}) {
        super(popup);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.form');
    }

    _getInputValues() {
        this._inputList = this._popup.querySelectorAll('.form__input');
        // console.log(this._inputList)
        this._inputValues = {};
        this._inputList.forEach(input => {
            this._inputValues[input.name] = input.value;
        })
        
        return this._inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', () => {
            this.listener();
            console.log('set')
        })
    }

    listener() {
            this._getInputValues()
            this._submitForm(this._inputValues)
            console.log(this._inputValues)
            console.log('listener')
            this.close()
    }

    open() {
        super.open();
        console.log('open')
    }

    close() {
        
        this._form.removeEventListener('submit', this.listener.bind(this))
        this._form.reset()
        console.log('close')
        super.close();
    }
}