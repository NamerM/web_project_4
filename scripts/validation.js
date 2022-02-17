//// FORM VALIDATION PART ///

//const formError = form.querySelector(`.${formInput.id}-error`);

const showInputError = (input, formElement, {errorClass, inputErrorClass} ) => {
  const errorElement = formElement.querySelector("#" + input.id + "-error");
  console.log(input.validationMessage);
  input.classList.add(errorClass);
  errorElement.textContent = input.validationMessage;
  errorElement.classList.add(inputErrorClass);

};

const hideInputError = (input, formElement, {errorClass, inputErrorClass}) => {
  const errorElement = formElement.querySelector("#" + input.id + "-error");
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
  //console.log('validity', input.validity.valid);
  //console.log('error message', input.validationMessage);
  }
};

const hasValidInput = (inputList) =>
  inputList.every(input => input.validity.valid === true);


const toggleButton = (inputList, button, settings) => {
  console.log("hasValid", hasValidInput(inputList));
  if(hasValidInput(inputList)) {
    button.disabled = false;
  } else {
    button.disabled = true;
    button.classList.add("popup__save_disabled");
  }
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector)); // [...formElement.querySelectorAll(settings.inputSelector)]
  const submitButton = formElement.querySelector(settings.submitButtonSelector);

    inputList.forEach( (input) => {
      input.addEventListener('input', (evt) => {
        console.log(evt);
        checkInputValidity(formElement, input, settings);//check validity
        toggleButton(inputList, submitButton, settings); //toggle submit
    });
  })
};

  const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', evt => evt.preventDefault());
    setEventListeners(formElement, settings);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",   //popup__button , changed it in according to css I have //
  inactiveButtonClass: ".popup__save_disabled",
  inputErrorClass: "popup__input-error_open",
  errorClass: "popup__error_visible"
});

