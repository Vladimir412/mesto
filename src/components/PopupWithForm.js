import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor({popup, submitForm}) {
        super(popup);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.form');
        // this._handler = this.listener.bind(this);
    }

    _getInputValues() {
        this._inputList = this._popup.querySelectorAll('.form__input');
        this._inputValues = {};
        this._inputList.forEach(input => {
            this._inputValues[input.name] = input.value;
        })
        return this._inputValues;
    }

    //  С этой констпукцией все работает (не забыть разкоментировать свойство выше)
    // listener() {
    //     this._submitForm(this._getInputValues())
    //     this.close()
    //     this._form.reset()
    //     this._form.removeEventListener('submit', this._handler)
    // }

    // setEventListeners() {
    //     this._form.addEventListener('submit', this._handler)
    //     super.setEventListeners();
    // }


    // с этой нет
    setEventListeners() {
       console.log(this._popup)
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
            this.close();
            console.log('set')
        });
        super.setEventListeners();
    }
}
