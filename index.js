//const header = document.querySelector(".header");
//const content = document.querySelector(".content");
//const footer = document.querySelector(".footer");
const profile = document.querySelector(".profile");
const editButton = document.querySelector (".profile__button");

const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__header');
const profileProfession = profileInfo.querySelector('.profile__profession');

const profileForm = document.forms.profileForm;
const profilePopup = document.querySelector('.popup');
const saveButton = profilePopup.querySelector('.popup__save');
const closeButton = profilePopup.querySelector('.popup__close');
let inputName = profilePopup.querySelector('.popup__input-name');
let inputProfession = profilePopup.querySelector('.popup__input-profession');

//editButton.addEventListener('click', function(event) {
  //editButton.style.display = 'flex';
  //profilePopup.style.display = 'block';
  //header.setAttribute('style', 'opacity:0.5');
  //content.setAttribute('style', 'opacity:0.5');
 // footer.setAttribute('style', 'opacity:0.5');  // I tried page.setAttribute but popup is also effected. So tried also setting Attribute for popup but didn't work, will be happy to learn how it will be if we did with js style attributes.that's why I left style.attribute lines - to learn - thx//
//});

function formLoadUp () {
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}

function togglePopup () {
  profilePopup.classList.toggle('popup_open');
}

function formProfileHandle(event) {
  profileName.textContent =inputName.value;
  profileProfession.textContent = inputProfession.value;
  //profilePopup.style.display = 'none';
  event.preventDefault();
 //header.removeAttribute('style');
  //content.removeAttribute('style');
  //footer.removeAttribute('style');
  profilePopup.classList.remove('popup_open');
}

editButton.addEventListener('click', togglePopup);
editButton.addEventListener('click', formLoadUp);
profileForm.addEventListener('submit', formProfileHandle);
closeButton.addEventListener('click', togglePopup);

