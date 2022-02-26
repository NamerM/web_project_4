  ///////////////////
 // EDIT PROFILE  //
///////////////////

import { toggleButton } from './modules/validation.js';

const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__header');
const profileProfession = profileInfo.querySelector('.profile__profession');

const popupList = document.querySelectorAll('.popup');

const profileForm = document.forms.profileForm; //querySelector('.popup_form');//
const profilePopup = document.querySelector('.popup_type_profile'); //.popup bastaki silindi
const editButton = document.querySelector (".profile__button");
const saveButton = profilePopup.querySelector('.popup__save');
const closeButton = profilePopup.querySelector('.popup__close');
const inputName = profilePopup.querySelector('.popup__input_type_name');
const inputProfession = profilePopup.querySelector('.popup__input_type_profession');
const popupSelector = 'popup_open';


//functions  openPopup & closePopup universal functions
function openPopup (popup) {
  popup.classList.add(popupSelector);
  addKeyDownListener();
 }

function closePopup (popup) {
  popup.classList.remove(popupSelector);
  removeKeyDownListener();
}

function openProfilePopup() {
  openPopup(profilePopup);
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  closePopup(profilePopup);
}
//Event handlers
editButton.addEventListener('click', openProfilePopup);
profileForm.addEventListener('submit', handleProfileFormSubmit);
closeButton.addEventListener('click', () => closePopup(profilePopup) );

//Closing the popup windows escape button//
function handleKeyDown(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector(`.${popupSelector}`);
    closePopup(openedPopup);
  }
}

function addKeyDownListener() {
  document.addEventListener('keydown', handleKeyDown);
}

function removeKeyDownListener() {
  document.removeEventListener('keydown', handleKeyDown);
}

//Closing the popup windows by click
//const popupList = document.querySelector('.popup');
popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if(evt.target.matches('.popup')) {
      const openedPopup = document.querySelector(`.${popupSelector}`);
      closePopup(openedPopup);
    }
  });
});


  ///////////
 // CARDS //
///////////

const formCards = document.querySelector('.popup__form_cards');
const cardTemplateBase = document.querySelector('#card-template').content;
const cardTemplate = cardTemplateBase.querySelector('.elements__card');
const previewImage = document.querySelector('.popup_type-preview');
const cardPopup = document.querySelector('.popup_type_add-card');
const addButton = document.querySelector('.add-button');
const previewButtonClose = document.querySelector('.popup__close.popup__close_preview');
const buttonClose = document.querySelector('.popup__close.popup__close_add');
const inputTitle = document.querySelector('.popup__input_type_title');
const inputImage = document.querySelector('.popup__input_type_link');
// Wrappers
const elementsList = document.querySelector('.elements__cards');
// Functions________________________________________________________________________
function createCardElement(card) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.elements__image');
  const cardName = cardElement.querySelector('.elements__card-text');
  const likeButton = cardElement.querySelector('.elements__button-like');
  const deleteButton = cardElement.querySelector('.elements__button-delete');

  const {name, link} = card; //destructuring assignment//
  cardImage.src = link;
  cardImage.alt = name;
  cardName.textContent = card.name;

  cardImage.addEventListener('click', () => openImagePreview(card));

  function activateLikeButton (evt){
    const likeButton = evt.target;
    likeButton.classList.toggle('elements__button-like_active');
  }

  likeButton.addEventListener('click', activateLikeButton);

  deleteButton.addEventListener('click', () => {
    cardElement.remove();
  });
   return cardElement;
 };

  function renderCard(card, wrapper) {
    wrapper.prepend(card);
 };

initialCards.forEach(card => {
  const newCard = createCardElement(card);
  renderCard(newCard, elementsList);
});

formCards.addEventListener('submit', (evt) => {
  const card = {
      name: inputTitle.value,
      link: inputImage.value,
  };
  renderCard(createCardElement(card), elementsList);
  evt.preventDefault();
  closePopup(cardPopup);
  formCards.reset();
});


const openImagePreview = card => {
  openPopup(previewImage);
  const popupImage = previewImage.querySelector('.popup__image');
  const popupTitle = previewImage.querySelector('.popup__subtitle');
  popupImage.src = card.link;
  popupImage.alt = card.name;
  popupTitle.textContent = card.name;

};

previewButtonClose.addEventListener('click', () => closePopup(previewImage));
buttonClose.addEventListener('click', () => closePopup(cardPopup));


// regarding to imported toggleButton function the elements
const inputList = [...document.querySelectorAll('.popup__input')];
const inactiveButtonClass = document.querySelector('.popup__save_disabled');


addButton.addEventListener('click', () => {
  openPopup(cardPopup);
  toggleButton(inputList, saveButton, inactiveButtonClass);
});
