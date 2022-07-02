
import "../page/index.css"; // main bridge to css files after webpack build always install 1st

import { settings, editForm, addCardForm, editButton, closeButton, inputName, inputProfession,
  addButton, elementsList } from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";

import { api, Api } from "../utils/Api.js";

let userId

api.getUserInfo()
  .then( res => {
    userId = res.id
    userInfo.setUserInfo(res.name,  res.about)
  })
  .catch(console.log)

api.getInitialCards()
  .then( res => {
    console.log('res getInitialCards =>', res)

    section.rendererItems(res);
  })
  .catch(console.log)




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

  api.addCard(data.cardTitle, data.cardImageLink)
  .then(res => {
    console.log('res =>', res)
    const card = {
      name: res.name,
      link: res.link,
    };
    section.addItem(card);
  })
  .catch(console.log)

  addCardPopup.close();
}
//editprofile submit
const handleProfileFormSubmit = (data) => {
  api.editProfile(data.name, data.profession)
  .then( res => {
    userInfo.setUserInfo(data.name, data.profession)
  })
  .catch(console.log)
  .finally( () => {
    editProfilePopup.close()
  })
};

const addCardPopup = new PopupWithForm('#popup-template-form', handleCardSubmit)
addCardPopup.setEventListeners() //only call once , never in if loop etc

const editProfilePopup = new PopupWithForm('#popup-template', handleProfileFormSubmit)
editProfilePopup.setEventListeners()

const imagePopup = new PopupWithImage('#popup-image')
imagePopup.setEventListeners();

const createCard = (data) => {
  const item = new Card (
    data,
    '...',
    '#card-template',
  (name, link) => {
    imagePopup.open(name, link)
    },
    () => {
      api.addLike(item.getId())
      .then(res => {
        item.setLikeCounter(res.likes),
        console.log('You like it don\'t you')
        //
      })
    }
  );

 return item.generateCard();
}

const section = new Section(
    {
      renderer: createCard,
    },
    '.elements__cards'
  )


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



addButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  addCardFormValidator.disableButton();
  addCardPopup.open();
})



