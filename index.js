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

function formLoadUp () {
  profilePopup.classList.toggle('popup_open')
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}

function closePopup () {
  profilePopup.classList.remove('popup_open');
}

function formProfileHandle(event) {
  profileName.textContent =inputName.value;
  profileProfession.textContent = inputProfession.value;
  event.preventDefault();
  profilePopup.classList.remove('popup_open');
}

editButton.addEventListener('click', formLoadUp);
profileForm.addEventListener('submit', formProfileHandle);
closeButton.addEventListener('click', closePopup);

