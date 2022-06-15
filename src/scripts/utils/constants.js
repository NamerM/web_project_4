//For Profile and popup elements
const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__header');
const profileProfession = profileInfo.querySelector('.profile__profession');
const popupList = document.querySelectorAll('.popup');

const profileForm = document.forms.profileForm; //querySelector('.popup_form');//
const profilePopup = document.querySelector('.popup_type_profile'); //.popup bastaki silindi
const editButton = document.querySelector ('.profile__button');
//const saveButton = profilePopup.querySelector('.popup__save');  //not used-submitButtonSelector used in settings
const closeButton = profilePopup.querySelector('.popup__close');
const inputName = profilePopup.querySelector('.popup__input_type_name');
const inputProfession = profilePopup.querySelector('.popup__input_type_profession');
const popupSelector = 'popup_open';

// /////CARDS
const previewImage = document.querySelector('.popup_type-preview');
const cardPopup = document.querySelector('.popup_type_add-card');
const addButton = document.querySelector('.add-button');
const previewButtonClose = document.querySelector('.popup__close.popup__close_preview');
const buttonClose = document.querySelector('.popup__close.popup__close_add');
const inputTitle = document.querySelector('.popup__input_type_title');
const inputImage = document.querySelector('.popup__input_type_link');
const popupImage = previewImage.querySelector('.popup__image');
const popupTitle = previewImage.querySelector('.popup__subtitle');
// Wrappers
const elementsList = document.querySelector('.elements__cards');


export { profileInfo, profileName, profileProfession, popupList, profileForm, profilePopup,
  editButton, closeButton, inputName, inputProfession, popupSelector,
  previewImage, cardPopup, addButton, previewButtonClose, buttonClose, inputTitle, inputImage,
  popupImage, popupTitle, elementsList
}
