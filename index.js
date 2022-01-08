//Profile Section Header Elements
//const page = document.querySelector(".page");
const header = document.querySelector(".header");
const content = document.querySelector(".content");
const footer = document.querySelector(".footer");
const profile = document.querySelector(".profile");
const editButton = document.querySelector (".profile__button");
//Profile Section Content Elements
const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__header');
const profileProfession = profileInfo.querySelector('.profile__profession');
//Popup-Form Section Elements
const profileForm = document.forms.profileForm;
const profilePopup = document.querySelector('.popup');
const saveButton = document.querySelector('.popup__save'); //popup.querySelector
let inputName = document.querySelector('.popup__input-name');
let inputProfession = document.querySelector('.popup__input-profession');

editButton.addEventListener('click', function(event) {
  editButton.style.display = 'flex';
  profilePopup.style.display = 'block';
  //profilePopup.classList.toggle('popup_open');
  header.setAttribute('style', 'opacity:0.5');
  content.setAttribute('style', 'opacity:0.5');
  footer.setAttribute('style', 'opacity:0.5');  // I tried page.setAttribute but popup is also effected. So tried also setting Attribute for popup but didn't work//
});

inputName.value = profileName.textContent;
inputProfession.value = profileProfession.textContent;

profileForm.addEventListener('submit', function (event) {
  profileName.textContent =inputName.value;
  profileProfession.textContent = inputProfession.value;
  profilePopup.style.display = 'none';
  event.preventDefault();
  header.removeAttribute('style');
  content.removeAttribute('style');
  footer.removeAttribute('style');
  //profilePopup.classList.remove('popup_open');
});

const addButton = document.querySelector(".add-button");
addButton.addEventListener('click', function(event2) {
  alert("This button will be functional in Sprint 5");
});
