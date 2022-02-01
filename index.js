  ///////////////////
 // EDIT PROFILE  //
///////////////////
const profile = document.querySelector(".profile");
const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__header');
const profileProfession = profileInfo.querySelector('.profile__profession');

const profileForm = document.forms.profileForm;
const profilePopup = document.querySelector('.popup.popup_type_profile');
const editButton = document.querySelector (".profile__button");
const saveButton = profilePopup.querySelector('.popup__save');
const closeButton = profilePopup.querySelector('.popup__close');
let inputName = profilePopup.querySelector('.popup__input_type_name');
let inputProfession = profilePopup.querySelector('.popup__input_type_profession');

//functions
function formLoadUp () {
  profilePopup.classList.toggle('popup_open');
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}

function closePopup () {
  profilePopup.classList.remove('popup_open');
}

function formSubmitHandle(event) {
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  event.preventDefault();
  profilePopup.classList.remove('popup_open');
}
//Event handlers
editButton.addEventListener('click', formLoadUp);
profileForm.addEventListener('submit', formSubmitHandle);
closeButton.addEventListener('click', closePopup);
//________________________________________________________________
  ///////////
 // CARDS //
///////////
const addCards = document.querySelector('.popup_type_add-card') //const addCardPopUp = document.querySelector('.popup.popup_type_add-card');

//buttons and DOM elements
const addButton = document.querySelector('.add-button');
const buttonclose = document.querySelector('.popup__close.popup__close_add');
const createButton = document.querySelector('.popup__save.popup_type_addup');
let inputTitle = addCards.querySelector('.popup.popup__input_type_name');
let inputLink = addCards.querySelector('.popup.popup__input_type_link');
// Wrappers
const elementsList = document.querySelector('.elements__cards');

//functions - cards
function createCardElement(card) {
    const cardTemplate = document.querySelector('#card-template').content.querySelector('.elements__card');
    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector('.elements__image');
    const cardTitle = cardElement.querySelector('.elements__card-text');
    const likeButton = cardElement.querySelector('.elements__button-like');
    const deleteButton = cardElement.querySelector('.elements__button-delete');

    cardImage.style.backgroundImage = `url(${card.link})` // = 'url('+ card.link + ');';``
    cardTitle.textContent = card.name;

    cardImage.addEventListener('click', () => {
      // handle image click
    });

    likeButton.addEventListener('click', (evt) => {
      const likeActive = evt.target;
      likeActive.classList.toggle('elements__button-like_active');
      //const likeButton = cardElement.querySelector('.elements__button-like');
      //let source = '../../../images/blackfillheart';
      //likeButton.style.backgroundImage = 'url('+ source + ');';   Question: How could I make it work with this?
    });


    deleteButton.addEventListener('click', () => {
      cardElement.remove();
    });

   return cardElement;
 };

 function renderCard(card, wrapper) {
   wrapper.append(createCardElement(card));
 };

initialCards.forEach(card => renderCard(card, elementsList));


createButton.addEventListener("submit", (evt) => {
  const card = {
      name: cardTitle.value,
      link: cardImage.value,
  };
  renderCard(createCardElement(card, elementsList));
  toggleForm();
  evt.preventDefault();
  createButton.reset();
});



 function toggleForm() {
  addCards.classList.toggle('popup_open');
}

addButton.addEventListener('click', toggleForm);
buttonclose.addEventListener('click', toggleForm);

 //function addCard (event){
    // card.name  & card.link should be added from form.
 //   addCard.classList.remove('popup_open');
 //};

