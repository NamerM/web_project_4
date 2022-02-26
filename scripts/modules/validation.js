//// FORM VALIDATION PART ///

const showInputError = (input, formElement, settings ) => {
  const errorElement = formElement.querySelector(`#${input.id}-error`);
  input.classList.add(settings.errorClass);
  errorElement.textContent = input.validationMessage;
  errorElement.classList.add(settings.inputErrorClass);
};

const hideInputError = (input, formElement, settings) => {
  const errorElement = formElement.querySelector(`#${input.id}-error`);
  input.classList.remove(settings.errorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(settings.inputErrorClass);
};



const checkInputValidity = (formElement, input, settings) => {
  if(input.validity.valid) {
    hideInputError(input, formElement, settings);
  } else {
    showInputError(input, formElement, settings);
  }
};

const hasValidInput = (inputList) => {
  return inputList.some((input) => input.validity.valid); //by default it's true*/
  };

export const toggleButton = (inputList, submitButton, settings) => {
  console.log(hasValidInput(inputList));
    if (hasValidInput(inputList)) {
      submitButton.disabled = false;
      submitButton.classList.remove(settings.inactiveButtonClass);
    } else {
      submitButton.disabled = true;
      submitButton.classList.add(settings.inactiveButtonClass);
    }
  }

const setEventListeners = (formElement, settings) => {
  const inputList = [...formElement.querySelectorAll(settings.inputSelector)];
  const submitButton = formElement.querySelector(settings.submitButtonSelector);
  toggleButton(inputList, submitButton, settings); //toggle submit
    inputList.forEach( (input) => {
      input.addEventListener('input', () => {
        checkInputValidity(formElement, input, settings);//check validity
        toggleButton(inputList, submitButton, settings); //toggle submit
    });
  })
};

  const enableValidation = (settings) => {
  const formList = [...document.querySelectorAll(settings.formSelector)]; //Array.From replaced with [...]
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => evt.preventDefault());
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


