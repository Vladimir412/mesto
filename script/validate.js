// // показывает ошибку валидации
// const showInputError = (formElement, inputElement, errorMessage, data) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add(data.inputErrorClass);
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(data.errorClass);
// }

// // Скрывает ошибку валидации
// const hidenInputError = (formElement, inputElement, data) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove(data.inputErrorClass);
//     errorElement.textContent = '';
//     errorElement.classList.remove(data.errorClass);
// }

// // Проверяет наличие ошибок
// const checkInputValidity = (formElement, inputElement, data) => {
//     if (!inputElement.validity.valid) {
//         showInputError(formElement, inputElement, inputElement.validationMessage, data);
//     } else {
//         hidenInputError(formElement, inputElement, data);
//     }
// }

// // Настраивает каждую форму
// const setEventListeners = (formElement, data) => {
//     const inputList = Array.from(formElement.querySelectorAll(data.inputSelector));
//     const buttonElement = formElement.querySelector(data.submitButtonSelector);
//     toggleButtonState(formElement, inputList, buttonElement, data);
//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener('input', () => {
//             checkInputValidity(formElement, inputElement, data);
//             toggleButtonState(formElement, inputList, buttonElement, data);
//         })
//     })
// }

// // Проверяет каждое поле на наличие ошибки
// const hasInvalidInput = (inputList) => {
//     return inputList.some((inputElement) => {
//         return !inputElement.validity.valid;
//     });
// };

// // Отключение кнопки
// const disabledButton = (buttonElement, data) => {
//     buttonElement.disabled = true;
//     buttonElement.classList.add(data.inactiveButtonClass)
//   }

// // Переключает состояние кнопки
// const toggleButtonState = (formElement, inputList, buttonElement, data) => {
//     if (hasInvalidInput(inputList)) {
//         disabledButton(buttonElement, data)
//     } else {
//         buttonElement.classList.remove(data.inactiveButtonClass);
//         buttonElement.removeAttribute('disabled');
//     };
// };

// const selectors = {
//     formSelector: '.form',
//     inputSelector: '.form__input',
//     submitButtonSelector: '.form__button',
//     inactiveButtonClass: 'form__button_disabled',
//     inputErrorClass: 'form__input_type_error',
//     errorClass: 'form__error_active'
//   }

// // Ищет все формы
// const enableValidation = (data) => {
//     const formList = Array.from(document.querySelectorAll(data.formSelector));
//     formList.forEach((formElement) => {
//       formElement.addEventListener('submit', (evt) => {
//         evt.preventDefault();
//       });
//       setEventListeners(formElement, data);
//     });
//   };

// enableValidation(selectors);


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

  clearValidation() {
    this._hidenInputError();
    this._disabledButton();
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

  

 