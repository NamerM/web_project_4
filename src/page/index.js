
import "../page/index.css"; // main bridge to css files after webpack build always install 1st

import { settings, editForm, addCardForm, editButton, inputName, inputProfession,
  addButton, profileAvatar, avatarChange } from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";

import { api, Api } from "../utils/Api.js";
//import { Popup } from "../components/Popup";

let userId

//api.getUserInfo & api.getInitialCards combined with Promise.
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id  //userData._userId
    //console.log('user =>', userData)
    userInfo.setUserInfo(userData.name,  userData.about, userData.avatar)
    section.rendererItems(cards)
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

const avatarFormValidator = new FormValidator(
  settings,
  avatarChange
);

// const confirmDeleteFormValidator = new FormValidator(
//   settings,
//   avatarChange
// );

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
avatarFormValidator.enableValidation();
editFormValidator.resetValidation();


//addcardsubmit
const handleCardSubmit = (data) => {

  api.addCard(data.cardTitle, data.cardImageLink)
  .then(res => {
    //console.log('res =>', res)
    const card = {
      name: res.name,
      link: res.link,
      likes: res.likes,
      _id: res._id,
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
    userInfo.setUserInfo(res.name, data.profession, res.avatar) //data.name, data.profession
  })
  .catch(console.log)
  .finally( () => {
    editProfilePopup.close()
  })
};

//avatar Picture Submit
const handleAvatarSubmit = (data) => {
  api.editAvatar( data.link)  //data.name, data.profession,
  .then( res => {
    userInfo.setUserInfo(res.name, res.about, res.avatar)
  })
  .catch(console.log)
  .finally( () => {
    avatarChangePopup.close();
  })

};

const editProfilePopup = new PopupWithForm('#popup-template', handleProfileFormSubmit)
editProfilePopup.setEventListeners()

const avatarChangePopup = new PopupWithForm('#popup-template-avatar', handleAvatarSubmit)
avatarChangePopup.setEventListeners()

const addCardPopup = new PopupWithForm('#popup-template-form', handleCardSubmit)
addCardPopup.setEventListeners() //only call once , never in if loop etc

const confirmCardDelete = new PopupWithForm('#popup-template-confirm',
() => { })
confirmCardDelete.setEventListeners()

const imagePopup = new PopupWithImage('#popup-image')
imagePopup.setEventListeners();

const createCard = (data) => {
  const item = new Card (
    data,
    userId,
    '#card-template',
  (name, link) => {   //4th constructor item handleCardClick
    imagePopup.open(name, link)
    },
    () => {   //5th  constructor item handleLikeIcon
      if(item.isLiked()) {
        api.removeLike(item.getId())
        .then(res => {
          item.setLikeCounter(res.likes)
          //console.log("you don't like it")
        })
      } else {
        api.addLike(item.getId())
        .then(res => {
          item.setLikeCounter(res.likes)
          //console.log("you like it!")
        })
      }
    },
    () => {   //6th constrcutor item handleDeleteClick
      confirmCardDelete.open();
      //confirmCardDelete.enableButton();
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
  profileAvatar: '.profile__image',
})


function openProfilePopup() {
  const profileInfo = userInfo.getUserInfo();

  inputName.value = profileInfo.name;
  inputProfession.value = profileInfo.profession;

  editFormValidator.resetValidation(); //2 kere mi resetlendi bakalım
  editFormValidator.enableButton();
  editProfilePopup.open();
}

//Event handlers
editButton.addEventListener('click', openProfilePopup);

addButton.addEventListener('click', () => {
  addCardFormValidator.resetValidation();
  addCardFormValidator.disableButton();
  addCardPopup.open();
})


profileAvatar.addEventListener('click', () => {
  avatarFormValidator.resetValidation();
  avatarFormValidator.disableButton();
  avatarChangePopup.open();
})


