import { openPopup, closePopup, handleKeyDown } from './utils.js';

export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

export const previewImage = document.querySelector('.popup_type-preview');
export const popupImage = previewImage.querySelector('.popup__image');
export const popupTitle = previewImage.querySelector('.popup__subtitle');

export class Card {
  constructor(data, templateCardSelector) {
    this._data = data
    this._templateCardSelector = templateCardSelector


    // this._cardTemplate = document.querySelector(templateCardSelector)
    //     .content.querySelector('.elements__card');  // setting here
  }

  _getTemplate() {
    return document.querySelector(this._templateCardSelector)
      .content.querySelector('.elements__card');
  }

  _activateLikeButton = () => {
  this._likeButton.classList.toggle('elements__button-like_active');
  } //this._cardElement//(evt) => evt.target.classList.toggle('elements__button-like_active');

  _handleCardDelete = () => {
    this._cardElement.remove(); //en yakındaki elementi siliyor mu kontrol?
  }

  _openImagePreview = () => {
    openPopup(previewImage);

    popupImage.src = this._data.link;
    popupImage.alt = `${this._data.name}`;
    popupTitle.textContent = this._data.name;
  };

  _addEventListeners = () => {
    this._likeButton.addEventListener('click', this._activateLikeButton); //likebutton exchanged with this._likeButton
    this._deleteButton.addEventListener('click', this._handleCardDelete);
    this._cardImage.addEventListener('click', () => this._openImagePreview());
  }

  generateCard() {
      this._cardElement = this._getTemplate().cloneNode(true); //this._getTemplate().cloneNode(true); changed this._cardTemplate

      this._cardImage = this._cardElement.querySelector('.elements__image');
      this._cardName = this._cardElement.querySelector('.elements__card-text');
      this._likeButton = this._cardElement.querySelector('.elements__button-like');
      this._deleteButton = this._cardElement.querySelector('.elements__button-delete');

      //const {name, link} = this._data; // card // destructuring assignment//
      this._cardImage.src = this._data.link;
      this._cardImage.alt = this._data.name;
      this._cardName.textContent = this._data.name;

      this._addEventListeners();

      return this._cardElement;
    }

}

