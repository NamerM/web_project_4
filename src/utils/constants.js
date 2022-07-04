//For Profile and popup elements
const profileAvatar = document.querySelector(".profile__image");

const profilePopup = document.querySelector(".popup_type_profile"); //.popup bastaki silindi
const editButton = document.querySelector(".profile__button");
const closeButton = profilePopup.querySelector(".popup__close");
const inputName = profilePopup.querySelector(".popup__input_type_name");
const inputProfession = profilePopup.querySelector(".popup__input_type_profession");

// /////CARDS

const addButton = document.querySelector(".add-button");

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
const avatarChange = document.querySelector(".popup__form_avatar");

export {
  settings, editForm, addCardForm, avatarChange, editButton, closeButton, inputName, inputProfession,
  addButton, elementsList, profileAvatar
};



//const profileInfo = document.querySelector(".profile__info");
// const profileName = profileInfo.querySelector(".profile__header");
// const profileProfession = profileInfo.querySelector(".profile__profession");
// const popupList = document.querySelectorAll(".popup");
// const profileForm = document.forms.profileForm; //querySelector('.popup_form');//
// const popupSelector = "popup_open";


// const Card_Template_Selector = "#card-template";
// const previewImage = document.querySelector(".popup_type-preview");
// const cardDeletePopup = document.querySelector(".popup_type_confirm-delete");
// const deleteButton = document.querySelector(".elements__button_delete")
