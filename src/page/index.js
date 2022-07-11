
import "../page/index.css"; // main bridge to css files after webpack build always install 1st

import { settings, editButton, inputName, inputProfession,
         addButton, profileAvatar } from '../utils/constants.js';
import { FormValidator }  from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { api, Api } from "../utils/Api.js";

let userId

//api.getUserInfo & api.getInitialCards combined with Promise.
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id //console.log('user =>', userData)

    userInfo.setUserInfo(userData.name,  userData.about, userData.avatar)
    section.rendererItems(cards)
  })
  .catch(console.log)

const formValidators = {}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator( config, formElement )
    const formName = formElement.getAttribute('name')

    formValidators[formName] = validator;

    validator.enableValidation();
  });
};

enableValidation(settings);


const handleCardSubmit = (data) => {
  addCardPopup.changeText('Saving')
  api.addCard(data.cardTitle, data.cardImageLink)
    .then(res => {
      section.addItem(res)
    })
    .then( res => {
      addCardPopup.close(res);
    })
    .catch(console.log)
    .finally (() => {
      addCardPopup.changeText('Default');
    })


}
//handle editprofile submit
const handleProfileFormSubmit = (data) => {
  editProfilePopup.changeText('Saving')
  api.editProfile(data.name, data.profession)
    .then( res => {
      userInfo.setUserInfo(res.name, data.profession, res.avatar)
    })
    .then( res => {
      editProfilePopup.close(res)
    })
    .catch(console.log)
    .finally(() => {
      editProfilePopup.changeText('Default')
    })
};

// handle avatar Picture Submit
const handleAvatarSubmit = (data) => {
  avatarChangePopup.changeText('Saving')
  api.editAvatar( data.link)
    .then( res => {
      userInfo.setUserInfo(res.name, res.about, res.avatar)
    })
    .then( res => {
      avatarChangePopup.close(res);
    })
    .catch(console.log)
    .finally( () => {
      avatarChangePopup.changeText('Default')
    })
};

//handle Card Click
const handleCardClick = (data) => {
  imagePopup.open(data.name, data.link);
}
//handle Card Like Function
const handleLikeIcon = (card) => {
  const request = card.isLiked() ? api.removeLike : api.addLike

  request(card.getId())
  .then (res =>  {
      card.setLikeCounter(res.likes)
  })
  .catch(console.log)
}

// handle confirm Card Delete Function
const handleDeleteClick = (card) => {
  confirmCardDelete.open()

  confirmCardDelete.changeSubmitHandler(() => {
    api.deleteCard(card.getId())
    .then( () => {
      card.removeCard()
    })
    .then( () => {
      confirmCardDelete.close()
    })
    .catch(console.log)
  })
}

//class instances of Popup
const editProfilePopup = new PopupWithForm('#popup-template', handleProfileFormSubmit)
editProfilePopup.setEventListeners()

const avatarChangePopup = new PopupWithForm('#popup-template-avatar', handleAvatarSubmit)
avatarChangePopup.setEventListeners()

const addCardPopup = new PopupWithForm('#popup-template-form', handleCardSubmit)
addCardPopup.setEventListeners() //only call once

const confirmCardDelete = new PopupWithForm('#popup-template-confirm', handleDeleteClick)
confirmCardDelete.setEventListeners()

const imagePopup = new PopupWithImage('#popup-image')
imagePopup.setEventListeners();


const createCard = (data) => {
  const item = new Card (
    data,
    userId,
    '#card-template',
    () => handleCardClick(data),      //4th constructor item handleCardClick
    () => handleLikeIcon(item),       //5th  constructor item handleLikeIcon
    (id) => handleDeleteClick(id)     //6th constrcutor item handleDeleteClick
  )
 return item.generateCard();
}

const section = new Section( { renderer: createCard }, '.elements__cards' )

const userInfo = new UserInfo({
  profileNameSelector: '.profile__header',
  profileProfessionSelector: '.profile__profession',
  profileAvatar: '.profile__image',
})


function openProfilePopup() {
  const profileInfo = userInfo.getUserInfo();

  inputName.value = profileInfo.name;
  inputProfession.value = profileInfo.profession;

  editProfilePopup.open();
}

//Event handlers subscriptions to popup/modal controls
editButton.addEventListener('click', openProfilePopup)
  formValidators['profileForm'].resetValidation();
  formValidators['profileForm'].enableButton();

addButton.addEventListener('click', () => {
  addCardPopup.open();
  formValidators['add-cards'].resetValidation();
  formValidators['add-cards'].disableButton();
})

profileAvatar.addEventListener('click', () => {
  avatarChangePopup.open();
  formValidators['avatarChange'].resetValidation();
  formValidators['avatarChange'].disableButton();
})


