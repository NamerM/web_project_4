//// FORM VALIDATION PART ///

//const formElement = document.querySelector(".popup");
//const formInput = form.querySelector(".pop-up__input");
//const formError = form.querySelector(`.${formInput.id}-error`);

//const showInputError = (element) => {
//element.classList.add("form__input_type_eror");
//}


//const hideInputError = (element) => {
//element.classList.add("form__input_type_error");
//};

const enableValidation = (settings) => {};
console.log(settings);
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});
