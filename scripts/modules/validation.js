//// FORM VALIDATION PART ///

const showInputError = (input, formElement, {errorClass, inputErrorClass} ) => {
  const errorElement = formElement.querySelector(`#${input.id}-error`);
  input.classList.add(errorClass);
  errorElement.textContent = input.validationMessage;
  errorElement.classList.add(inputErrorClass);
};

const hideInputError = (input, formElement, {errorClass, inputErrorClass}) => {
  const errorElement = formElement.querySelector(`#${input.id}-error`);
  input.classList.remove(errorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(inputErrorClass);
};



const checkInputValidity = (formElement, input, settings) => {
  console.log(input.validity.valid);
  if(input.validity.valid) {
    console.log('valid');
    hideInputError(input, formElement, settings);
  } else {
    showInputError(input, formElement, settings);
  }
};

const hasValidInput = (inputList) =>
  inputList.every(input => input.validity.valid === true);


  export const toggleButton = (inputList, button, {inactiveButtonClass}) => {
    if(hasValidInput(inputList)) {
      button.disabled = false;
      button.classList.remove(inactiveButtonClass);
    } else {
      button.disabled = true;
      button.classList.add(inactiveButtonClass);
    }
  }

export const setEventListeners = (formElement, settings) => {
  const inputList = [...formElement.querySelectorAll(settings.inputSelector)];
  const submitButton = formElement.querySelector(settings.submitButtonSelector);



    inputList.forEach( (input) => {
      input.addEventListener('input', (evt) => {
        checkInputValidity(formElement, input, settings);//check validity
        toggleButton(inputList, submitButton, settings); //toggle submit
    });
  })
};

  const enableValidation = (settings) => {
  const formList = [...document.querySelectorAll(settings.formSelector)]; //Array.From replaced with [...]
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', evt => evt.preventDefault());
    setEventListeners(formElement, settings);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",   //popup__button , changed it in according to css I have //
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input-error_open",
  errorClass: "popup__error_visible"
});


