
const showInputError = (formElement, inputElement, errorMessage, data) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(data.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(data.errorClass);
}

// Скрывает ошибку валидации
const hidenInputError = (formElement, inputElement, data) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(data.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(data.errorClass);
}

// Проверяет наличие ошибок
const checkInputValidity = (formElement, inputElement, data) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, data);
    } else {
        hidenInputError(formElement, inputElement, data);
    }
}

// Настраивает каждую форму
const setEventListeners = (formElement, data) => {
    const inputList = Array.from(formElement.querySelectorAll(data.inputSelector));
    const buttonElement = formElement.querySelector(data.submitButtonSelector);
    toggleButtonState(formElement, inputList, buttonElement, data);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, data);
            toggleButtonState(formElement, inputList, buttonElement, data);
        })
    })
}

// Проверяет каждое поле на наличие ошибки
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

// Переключает состояние кнопки
const toggleButtonState = (formElement, inputList, buttonElement, data) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(data.inactiveButtonClass);
        buttonElement.setAttribute('disabled', 'disabled');
    } else {
        buttonElement.classList.remove(data.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    };
};

const selectors = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error_active'
  }

// Ищет все формы
const enableValidation = (data) => {
    const formList = Array.from(document.querySelectorAll(data.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement, data);
    });
  };

enableValidation(selectors);
