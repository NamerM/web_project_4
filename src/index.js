
import "../src/styles/index.css"; // main bridge to css files after webpack build always install 1st

import { profileInfo, profileName, profileProfession, popupList, profileForm, profilePopup,
  editButton, closeButton, inputName, inputProfession, popupSelector,
  previewImage, cardPopup, addButton, previewButtonClose, buttonClose, inputTitle, inputImage, elementsList } from './scripts/utils/constants';
import { openPopup, closePopup, initialCards } from './scripts/utils/utils.js';
import FormValidator from './scripts/components/FormValidator.js';
import { Card } from './scripts/components/Card.js';
import { Section } from './scripts/components/Section.js';
import { Popup } from './scripts/components/Popup.js';
import { PopupWithForm } from './scripts/components/PopupWithForm.js';

//console.log(Popup);

//form validator settings dom references//
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


// addCardForm.addEventListener('submit', () => {
//   const card = {
//       name: inputTitle.value,
//       link: inputImage.value,
//   };
//   renderCard(card, elementsList);
//   addCardPopup.close();
// });


const handleCardForm = () => {
  const card = {
      name: inputTitle.value,
      link: inputImage.value,
  };
  renderCard(card, elementsList);
  addCardPopup.close();
}

//addCardForm.addEventListener('submit', handleCardForm);

const addCardPopup = new PopupWithForm('#popup-template-form', () => {
  console.log("merry christmas")

  handleCardForm();
})

addCardPopup.setEventListeners() //only call once , never in if loop etc


//userinfo class
const openProfilePopup = () => {
  openPopup(profilePopup);
  editFormValidator.resetValidation(); //2 kere mi resetlendi bakalım
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
closeButton.addEventListener('click', () => closePopup(profilePopup));
//COMMENTLENECEK ALTTAKİ
//profileForm.addEventListener('submit', handleProfileFormSubmit);

//end of userinfo class related code - change after class

//done on popup.js // 2nd function for 2nd part of the event listener
//8-II-3

// popupList.forEach((popup) => {
//   popup.addEventListener('mousedown', (evt) => {
//     if(evt.target.matches('.popup')) {
//       const openedPopup = document.querySelector(`.${popupSelector}`);

//       openedPopup && closePopup(openedPopup);
//     }
//   });
// });


addButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  addCardForm.reset();
  addCardFormValidator.disableButton();
  openPopup(cardPopup);

})



//8-II-3 section component' same as above try - subscription need to be moved as well

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

// addCardForm.addEventListener('submit', () => {
//   const card = {
//       name: inputTitle.value,
//       link: inputImage.value,
//   };
//   renderCard(card, elementsList);
//   addCardPopup.close();
// });

initialCards.forEach(data => {
  renderCard(data, elementsList);
});



previewButtonClose.addEventListener('click', () => closePopup(previewImage));
buttonClose.addEventListener('click', () => closePopup(cardPopup));
