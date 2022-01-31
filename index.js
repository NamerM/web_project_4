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

const cardTemplate = document
.querySelector("#card-template")
.content.querySelector(".elements__card");

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

const cardsStack = () => {
  const listContainer = createListWrapper({className: 'elements__cards'}); //document.querySelector(".elements__cards");
  const listPageSection = document.querySelector(".elements.page__section")
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".elements__card");
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

cardsStack();

//ADD CARDS //

const addCards = document.forms.addCards;
const addCardPopUp = document.querySelector(".popup.popup_type_add_card");
const addButton = document.querySelector(".add-button");
const createButton = addCards.querySelector('.popup__save');
const deleteButton = document.querySelector('.elements__button-delete');
let inputTitle = addCards.querySelector('.popup.popup__input_type_name');
let inputLink = addCards.querySelector('.popup.popup__input_type_link');

 // inputName yukarıda var pseudo class kullanıldı
 // closeButton ve fonksiyon yukarıdan alınacak
 function addUpFormLoad() {
  addCardPopUp.classList.toggle('popup_open');
  inputTitle.value = inputTitle.textcontent;
  inputLink.value = inputLink.textcontent;
}

 function addCard (event){
  inputTitle.textcontent = inputTitle.value;
  inputLink.textcontent = inputLink.value;
  event.preventDefault();
  addCards.classList.remove('popup_open');
 }

function removeCard (event) {
cardsStack.remove(cardTemplate);
};

  addButton.addEventListener('click', addUpFormLoad);
  deleteButton.addEventListener('click', removeCard);
 //     createButton.addEventListener('click', addCard);
 // ??? createButton.addEventListener('click', createNewElementsCard);

// EDIT PROFILE  //
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

