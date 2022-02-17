  ///////////////////
 // EDIT PROFILE  //
///////////////////

const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__header');
const profileProfession = profileInfo.querySelector('.profile__profession');


const profileForm = document.forms.profileForm; //querySelector('.popup_form');//
const profilePopup = document.querySelector('.popup_type_profile'); //.popup bastaki silindi
const editButton = document.querySelector (".profile__button");
const saveButton = profilePopup.querySelector('.popup__save');
const closeButton = profilePopup.querySelector('.popup__close');
let inputName = profilePopup.querySelector('.popup__input_type_name');
let inputProfession = profilePopup.querySelector('.popup__input_type_profession');

//functions  openPopup & closePopup universal functions
function openPopup (popup) {
  popup.classList.add('popup_open');
 }

 function closePopup (popup) {
  popup.classList.remove('popup_open');
}

function formLoadUp () {
  openPopup(profilePopup);
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}

function formSubmitHandle(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  closePopup(profilePopup);
  profileForm.reset();
}
//Event handlers
editButton.addEventListener('click', formLoadUp);
profileForm.addEventListener('submit', formSubmitHandle);
closeButton.addEventListener('click', () => closePopup(profilePopup) );

//Closing the popup windows escape button//
function keyHandler() {
   document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closePopup(profilePopup);
      closePopup(addCards);
      closePopup(previewImage);
    }
   });
  }
keyHandler();

//Closing the popup windows by click
//const popupList = document.querySelector('.popup');
const popupList = document.querySelectorAll('.popup');

popupList.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if(evt.target.matches('.popup')) {
      closePopup(profilePopup);
      closePopup(addCards);
      closePopup(previewImage);
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
const addCards = document.querySelector('.popup_type_add-card');
const addButton = document.querySelector('.add-button');
const previewButtonClose = document.querySelector('.popup__close.popup__close_preview');
const buttonclose = document.querySelector('.popup__close.popup__close_add');
const createButton = document.querySelector('.popup__save_addup');
let inputTitle = document.querySelector('.popup__input_type_title');
let inputImage = document.querySelector('.popup__input_type_link');
// Wrappers
const elementsList = document.querySelector('.elements__cards');
// Functions________________________________________________________________________
function createCardElement(card) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.elements__image');
  const cardTitle = cardElement.querySelector('.elements__card-text');
  const likeButton = cardElement.querySelector('.elements__button-like');
  const deleteButton = cardElement.querySelector('.elements__button-delete');

  const {name, link} = card; //destructuring assignment//
  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = card.name;

  cardImage.addEventListener('click', () => openImagePreview(card));

  likeButton.addEventListener('click', (evt) => {
    const likeActive = evt.target;
    likeActive.classList.toggle('elements__button-like_active');
  });

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
  closePopup(addCards);
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
addButton.addEventListener('click', () => openPopup(addCards));
buttonclose.addEventListener('click', () => closePopup(addCards));
