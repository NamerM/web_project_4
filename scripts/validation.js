//// FORM VALIDATION PART ///

//const formError = form.querySelector(`.${formInput.id}-error`);

const showInputError = (input, formElement, {errorClass} ) => {
  const errorElement = formElement.querySelector("#" + input.id + "-error");
  // error msg and class
  console.log(input.validationMessage);
  input.classList.add(errorClass);
  errorElement.textContent = input.validationMessage;
  errorElement.classList.add(inputErrorClass);
};

const hideInputError = (input, formElement, {errorClass} ) => {
  const errorElement = formElement.querySelector("#" + input.id + "-error");
  // error msg and class
  errorElement.textcontent = "";
  errorElement.classList.remove(errorClass);
};

const checkInputValidity = (formElement, input, settings) => {
  console.log(input.validity.valid);
  if(input.validity.valid) {
    console.log('valid');
    hideInputError();
  } else {
    showInputError(input, formElement, settings);
  //console.log('validity', input.validity.valid);
  //console.log('error message', input.validationMessage);
  }
};

const setEventListeners = (formElement, settings) => {
  const inputs = Array.from(formElement.querySelectorAll(settings.inputSelector)); // [...formElement.querySelectorAll(settings.inputSelector)]
    inputs.forEach( (input) => {
      input.addEventListener('input', (evt) => {
        console.log(evt);
          //check validity
        checkInputValidity(formElement, input, settings);

          // toggle submit button
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
  submitButtonSelector: ".popup__save",
  //popup__submit , changed it in according to css I have //
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});

//enableValidation();
