// CARDS //
const initialCards = [
{
  name: "Yosemite Valley",
  link: "https://namerm.github.io/web_project_4/images/card-image-yosemite.png",
},
{
  name: "Lake Louise",
  link: "https://namerm.github.io/web_project_4/images/card-image-lake-loise.png",
},
{
  name: "Bald Mountains",
  link: "https://namerm.github.io/web_project_4/images/card-image-bald-mountains.png",
},
{
  name: "Latemar",
  link: "https://namerm.github.io/web_project_4/images/card-image-latemar.png",
},
{
  name: "Vanoise National Park",
  link: "https://namerm.github.io/web_project_4/images/card-image-vanoise-nation.png",
},
{
  name: "Lago di Braies",
  link: "https://namerm.github.io/web_project_4/images/card-image-lago-di-braies.png",
}
];


// Wrappers
const elementsList = document.querySelector('.elements__cards');


initialCards.forEach(card => {
  // get a reference to template
    const cardTemplate = document.querySelector('#card-template').content.querySelector('.elements__card');
    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector('.elements__image');
    const cardTitle = cardElement.querySelector('.elements__card-text');

    cardImage.style.backgroundImage = `url(${card.link})` // = 'url('+ card.link ');';``
    cardTitle.textContent = card.name;

    elementsList.append(cardElement);
  // createa card element
  // append - prepend that card - elements__cards - into elements__card

});



//ADD CARDS FORM //
const addCards = document.forms.addCards;
const addCardPopUp = document.querySelector('.popup.popup_type_add_card');
const addButton = document.querySelector('.add-button');
const createButton = document.querySelector('.popup__save');
const deleteButton = document.querySelector('.elements__button-delete');
const buttonclose = document.querySelector('.popup__close.popup__close_add');
let inputTitle = addCards.querySelector('.popup.popup__input_type_name');
let inputLink = addCards.querySelector('.popup.popup__input_type_link');

 // inputName yukarıda var pseudo class kullanıldı
 // closeButton ve fonksiyon yukarıdan alınacak
 function addUpFormLoad() {
  addCardPopUp.classList.toggle('popup_open');
}

function closeAddUp() {
  addCardPopUp.classList.remove('popup_open');
}

 function addCard (event){

    addCards.classList.remove('popup_open');

 };

function removeCard (event) {
initialCards.forEach(card => {
  card.remove();
})
//listContainer.remove(cardElement);
};

  addButton.addEventListener('click', addUpFormLoad);
  deleteButton.addEventListener('click', removeCard);
  buttonclose.addEventListener('click', closeAddUp);
  createButton.addEventListener('submit', addCard );

  ///////////////////
 // EDIT PROFILE  //
///////////////////
const profile = document.querySelector(".profile");
const editButton = document.querySelector (".profile__button");

const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__header');
const profileProfession = profileInfo.querySelector('.profile__profession');


const profileForm = document.forms.profileForm;
const profilePopup = document.querySelector('.popup');
const saveButton = profilePopup.querySelector('.popup__save');
const closeButton = profilePopup.querySelector('.popup__close');
let inputName = profilePopup.querySelector('.popup__input_type_name');
let inputProfession = profilePopup.querySelector('.popup__input_type_profession');

function formLoadUp () {
  profilePopup.classList.toggle('popup_open');
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}

function closePopup () {
  profilePopup.classList.remove('popup_open');
}

function formProfileHandle(event) {
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  event.preventDefault();
  profilePopup.classList.remove('popup_open');
}

editButton.addEventListener('click', formLoadUp);
profileForm.addEventListener('submit', formProfileHandle);
closeButton.addEventListener('click', closePopup);

