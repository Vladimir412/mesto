export {FormValidator, selectors}


class FormValidator {
    constructor(selector, form) {
        this._selector = selector;
        this._form = form;
    }

    
 enableValidation() {
        this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    this._setEventListeners();
}

    // показывает ошибку валидации
 _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._selector.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._selector.errorClass);
}

// Скрывает ошибку валидации
 _hidenInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._selector.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._selector.errorClass);
}

// Проверяет наличие ошибок
 _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
    } else {
        this._hidenInputError(inputElement);
    }
}

// Настраивает каждую форму
 _setEventListeners() {
    const inputList = Array.from(this._form.querySelectorAll(this._selector.inputSelector));
    const buttonElement = this._form.querySelector(this._selector.submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState(inputList, buttonElement);
        })
    })
}

// Проверяет каждое поле на наличие ошибки
 _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

// Отключение кнопки
 _disabledButton(buttonElement) {
    buttonElement.disabled = true;
    buttonElement.classList.add(this._selector.inactiveButtonClass)
  };

  // Активация кнопки
  _enableButton(buttonElement) {
    buttonElement.classList.remove(this._selector.inactiveButtonClass);
    buttonElement.disabled = false;
  }

// Переключает состояние кнопки
 _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
        this._disabledButton(buttonElement)
    } else {
        this._enableButton(buttonElement);
    };
};
}


const selectors = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error_active'
  }

  

 