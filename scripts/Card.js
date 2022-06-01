import { openPopup, previewImage, popupImage, popupTitle } from './utils.js';



export class Card {
  constructor(data, templateCardSelector) {
    this._data = data;
    this._templateCardSelector = templateCardSelector;
  }

  _getTemplate() {
    return document.querySelector(this._templateCardSelector)
      .content.querySelector('.elements__card');
  }

  _clickedLikeButton = () => {
    this._likeButton.classList.toggle('elements__button-like_active');
  } //this._cardElement//(evt) => evt.target.classList.toggle('elements__button-like_active');

  _handleCardDelete = () => {
    this._cardElement.remove();
  }

  _openImagePreview = () => {
    openPopup(previewImage);

    popupImage.src = this._data.link;
    popupImage.alt = `${this._data.name}`;
    popupTitle.textContent = this._data.name;
  };

  _addEventListeners = () => {
    this._likeButton.addEventListener('click', this._clickedLikeButton); //likebutton exchanged with this._likeButton
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

