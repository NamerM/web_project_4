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

const cardTemplate = document.querySelector("#card-template").content.querySelector(".elements__card");
const cardElement = cardTemplate.cloneNode(true);
const listContainer = document.querySelector('.elements__cards');

// dom memory save için aşağıda element yaratıp onu cardsStack'te hafızadan 6 kere çağırmış olduk //
const createListWrapper = (props) => {
  const className = props.className;
  const newElement = document.createElement("ul");
  newElement.classList.toggle(className);
  return newElement;
};

const createNewElementsCard = (props) => {
  const localTitle = props.name;
  const localLink = props.link;
  const localCardTemplate = props.cardTemplate;

  const clonedElementsCard = localCardTemplate.cloneNode(true);
  const cardImage = clonedElementsCard.querySelector(".elements__image");
  cardImage.style.backgroundImage = "url("+localLink+")";
  const cardTitle = clonedElementsCard.querySelector(".elements__card-text");
  cardTitle.textContent = localTitle;
  return clonedElementsCard;
};

const cardsStack = (props) => {
  const listContainer = createListWrapper({className: 'elements__cards'}); //document.querySelector(".elements__cards");
  const listPageSection = document.querySelector(".elements.page__section")
  const cardTemplate = document.querySelector("#card-template").content.querySelector(".elements__card");
    initialCards.forEach((item)=>{
    const cardPropsObject = {
      name:item.name,
      link:item.link,
      cardTemplate: cardTemplate
    };
    listContainer.append(createNewElementsCard(cardPropsObject));
 });
 listPageSection.append(listContainer);
};

cardsStack({initialCards: initialCards});

//ADD CARDS FORM //
const addCards = document.forms.addCards;
const addCardPopUp = document.querySelector(".popup.popup_type_add_card");
const addButton = document.querySelector(".add-button");
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
  createNewElementsCard ((simplyAdd) => {
    inputTitle.textContent = localTitle;
    inputLink.textContent = localLink;
    return simplyAdd;
    });

   //create button should open the new card here
    event.preventDefault();
    addCards.classList.remove('popup_open');
    listContainer.prepend(cardElement);
 };

function removeCard (event) {
  // deletebutton should delete the card
  // need to find the correct removal tag for in ();
listContainer.remove(cardElement);
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

