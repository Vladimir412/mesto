// Показывает ошибку валидации
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
}
// showInputError()
// Скрывает ошибку валидации
const hidenInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.textContent = '';
    errorElement.classList.remove('form__input-error_active');
}
// hidenInputError()
// Проверяет наличие ошибок
const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hidenInputError(formElement, inputElement);
    }
}
// checkInputValidity()
// Настраивает каждую форму
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.form__input'));
    const buttonElement = formElement.querySelector('.form__button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        })
    })
}
// setEventListeners()
// Проверяет каждое поле на наличие ошибки
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}
// hasInvalidInput()
// Переключает состояние кнопки
const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('form__button_disabled');
    } else {
        buttonElement.classList.remove('form__button_disabled');
    }
}
// toggleButtonState()
// Ищет все формы
const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault()
      });
      setEventListeners(formElement)
    });
  };
  enableValidation()

// enableValidation({
//     formSelector: '.form',
//     inputSelector: '.form__input',
//     submitButtonSelector: '.form__button',
//     inactiveButtonClass: 'form__button_disabled',
//     inputErrorClass: 'form__input_type_error',
//     errorClass: 'form__error_visible'
//   });

//enableValidation({
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
//   });

