//For Profile and popup elements
const profileInfo = document.querySelector(".profile__info");
const profileName = profileInfo.querySelector(".profile__header");
const profileProfession = profileInfo.querySelector(".profile__profession");
const popupList = document.querySelectorAll(".popup");

const profileForm = document.forms.profileForm; //querySelector('.popup_form');//
const profilePopup = document.querySelector(".popup_type_profile"); //.popup bastaki silindi
const editButton = document.querySelector(".profile__button");
//const saveButton = profilePopup.querySelector('.popup__save');  //not used-submitButtonSelector used in settings
const closeButton = profilePopup.querySelector(".popup__close");
const inputName = profilePopup.querySelector(".popup__input_type_name");
const inputProfession = profilePopup.querySelector(
  ".popup__input_type_profession"
);
const popupSelector = "popup_open";

// /////CARDS
const Card_Template_Selector = "#card-template";
const previewImage = document.querySelector(".popup_type-preview");
const cardPopup = document.querySelector(".popup_type_add-card");
const addButton = document.querySelector(".add-button");
const previewButtonClose = document.querySelector(
  ".popup__close.popup__close_preview"
);
const buttonClose = document.querySelector(".popup__close.popup__close_add");
const inputTitle = document.querySelector(".popup__input_type_title");
const inputImage = document.querySelector(".popup__input_type_link");
const popupImage = previewImage.querySelector(".popup__image");
const popupTitle = previewImage.querySelector(".popup__subtitle");
// Wrappers
const elementsList = document.querySelector(".elements__cards");

const settings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input-error_open",
  errorClass: "popup__error_visible",
};

const editForm = document.querySelector(".popup__form_edit");
const addCardForm = document.querySelector(".popup__form_cards");

export {
  settings, editForm, addCardForm, editButton, closeButton, inputName, inputProfession, addButton, elementsList
};