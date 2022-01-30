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

const createNewElementsCard = (title, imageSrc) => {
  const clonedElementsCard = cardTemplate.cloneNode(true);
  clonedElementsCard.style = "background-image: url(" + imageSrc + ");";
  const cardTitle = clonedElementsCard.querySelector(".elements__card-text");
  cardTitle.textContent = title;
  return clonedElementsCard;
}

const cardsStack = ()=>{
  const listContainer = document.querySelector('.elements__cards');
    initialCards.forEach((item)=>{
    listContainer.append(createNewElementsCard(item.name, item.link));
 });
};

cardsStack();

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

