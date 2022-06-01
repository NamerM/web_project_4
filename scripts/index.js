 // EDIT PROFILE  //
import { openPopup, closePopup, initialCards } from './utils.js';
import FormValidator from './Formvalidator.js';
import { Card} from './cards.js';

//profile popups
const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__header');
const profileProfession = profileInfo.querySelector('.profile__profession');

const popupList = document.querySelectorAll('.popup');

const profileForm = document.forms.profileForm; //querySelector('.popup_form');//
const profilePopup = document.querySelector('.popup_type_profile'); //.popup bastaki silindi
const editButton = document.querySelector ('.profile__button');
const saveButton = profilePopup.querySelector('.popup__save');  //not used - submit button
const closeButton = profilePopup.querySelector('.popup__close');
const inputName = profilePopup.querySelector('.popup__input_type_name');
const inputProfession = profilePopup.querySelector('.popup__input_type_profession');
const popupSelector = 'popup_open';

//form valid variables//
const settings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input-error_open",
  errorClass: "popup__error_visible",
}

const editForm = document.querySelector('.popup__form_edit');
const addCardForm = document.querySelector('.popup__form_cards');

const editFormValidator = new FormValidator(settings, editForm);
const addCardFormValidator = new FormValidator(settings, addCardForm);

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
editFormValidator.resetValidation();
//

const openProfilePopup = () => {
  openPopup(profilePopup);
  editFormValidator.resetValidation();

  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;

  editFormValidator.enableButton();
}

const handleProfileFormSubmit = (event) => {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  closePopup(profilePopup);
}
//Event handlers
editButton.addEventListener('click', openProfilePopup);
profileForm.addEventListener('submit', handleProfileFormSubmit);
closeButton.addEventListener('click', () => closePopup(profilePopup));

//Closing the popup windows escape button moved to utils//

//Closing the popup windows by click moved to utils//

popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if(evt.target.matches('.popup')) {
      const openedPopup = document.querySelector(`.${popupSelector}`);
      closePopup(openedPopup);
    }
  });
});

// /////CARDS
const formCards = document.querySelector('.popup__form_cards');
//const cardTemplateBase = document.querySelector('#card-template').content;
//const cardTemplate = cardTemplateBase.querySelector('.elements__card');
const previewImage = document.querySelector('.popup_type-preview');
const cardPopup = document.querySelector('.popup_type_add-card');
const addButton = document.querySelector('.add-button');
const previewButtonClose = document.querySelector('.popup__close.popup__close_preview');
const buttonClose = document.querySelector('.popup__close.popup__close_add');
const inputTitle = document.querySelector('.popup__input_type_title');
const inputImage = document.querySelector('.popup__input_type_link');
// Wrappers
const elementsList = document.querySelector('.elements__cards');

addButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  addCardForm.reset();
  addCardFormValidator.disableButton();
  openPopup(cardPopup);

})

const Card_Template_Selector = '#card-template'

const createCard = (data) => {
    const card = new Card(data, Card_Template_Selector)
    const cardElement = card.generateCard();

    return cardElement
}

const renderCard = (data, wrapper) => {
    const card = createCard(data);
    wrapper.prepend(card);
}

initialCards.forEach(data => {
  renderCard(data, elementsList);
});

formCards.addEventListener('submit', (evt) => {
  const card = {
      name: inputTitle.value,
      link: inputImage.value,
  };
  renderCard(card, elementsList);
  evt.preventDefault();
  closePopup(cardPopup);
  formCards.reset();
});

previewButtonClose.addEventListener('click', () => closePopup(previewImage));
buttonClose.addEventListener('click', () => closePopup(cardPopup));
