//// FORM VALIDATION PART ///


//const formError = form.querySelector(`.${formInput.id}-error`);

const checkInputValidity = (input) => {

}

const setEventListeners = (formElement, settings) => {
  const inputs = Array.from(formElement.querySelectorAll(settings.inputSelector)); // [...formElement.querySelectorAll(settings.inputSelector)]
    inputs.forEach( (input) => {
      input.addEventListener('input', (evt) => {
          console.log(evt);
          //check validity
          checkInputValidity(input, settings);
          // error msg and class
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
