
import "../page/index.css"; // main bridge to css files after webpack build always install 1st

import { settings, editForm, addCardForm, editButton, closeButton, inputName, inputProfession,
  addButton, elementsList } from '../utils/constants.js';
import { initialCards } from '../utils/utils.js'; //openPopup, closePopup
import FormValidator from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";


//form validator settings dom references//


const editFormValidator = new FormValidator(
  settings,
   editForm
  );
const addCardFormValidator = new FormValidator(
  settings,
  addCardForm
  );

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
editFormValidator.resetValidation();




//addcardsubmit
const handleCardSubmit = (data) => {

  const card = {
    name: data['cardTitle'],
    link: data['cardImageLink']
  };
  renderCard(card, elementsList);

  addCardPopup.close();
}
//editprofile submit
const handleProfileFormSubmit = (data) => {
  userInfo.setUserInfo(data.name, data.profession)

  editProfilePopup.close()
}


const addCardPopup = new PopupWithForm('#popup-template-form', handleCardSubmit)
addCardPopup.setEventListeners() //only call once , never in if loop etc

const editProfilePopup = new PopupWithForm('#popup-template', handleProfileFormSubmit)
editProfilePopup.setEventListeners()

const imagePopup = new PopupWithImage('#popup-image')
imagePopup.setEventListeners();

const createCard = (card) => {
  const item = new Card ( card,'#card-template',
  (name, link) => {
    imagePopup.open(name, link)
  });

  // const cardElement = item.generateCard();
  // return cardElement
  return item.generateCard();
}

const renderCard = (data) => {
  const card = createCard(data)
  section.addItem(card);
}

const section = new Section(
    {
      items: initialCards,
      renderer: createCard
    },
    '.elements__cards'
  )

  section.rendererItems()


const userInfo = new UserInfo({
  profileNameSelector: '.profile__header',
  profileProfessionSelector: '.profile__profession',
})

//userinfo class
const openProfilePopup = () => {
  const profileInfo = userInfo.getUserInfo();

  inputName.value = profileInfo.name
  inputProfession.value = profileInfo.profession;

  editFormValidator.resetValidation(); //2 kere mi resetlendi bakalım
  editFormValidator.enableButton();
  editProfilePopup.open()
}

//Event handlers
editButton.addEventListener('click', openProfilePopup);
closeButton.addEventListener('click', () => editProfilePopup.close());


addButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  addCardForm.reset();
  addCardFormValidator.disableButton();
  addCardPopup.open();
})



