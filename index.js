//Profile Section Header Elements
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
const profilePopup = document.querySelector('.popup');
const saveButton = document.querySelector('.popup__save');
let inputName = document.querySelector('.popup__input-name');
let inputProfession = document.querySelector('.popup__input-profession');

editButton.addEventListener('click', function(event) {
  editButton.style.display = 'flex';
  profilePopup.style.display = 'block';
  header.setAttribute('style', 'opacity:0.5');
  content.setAttribute('style', 'opacity:0.5');
  footer.setAttribute('style', 'opacity:0.5');  // I tried page.setAttribute but popup is also effected.//
});

inputName.value = profileName.textContent;
inputProfession.value = profileProfession.textContent;

inputName.addEventListener('input', function(event){
  const inputValue = event.target.value;
  profileName.textContent = inputValue;
});

inputProfession.addEventListener('input', function(event){
  const inputValue = event.target.value;
  profileProfession.textContent = inputValue;
});


const addButton = document.querySelector(".add-button"); // Add button , 2nd on the section
addButton.addEventListener('click', function(event2) {
  alert("This button will be functional in Sprint 5");
});
