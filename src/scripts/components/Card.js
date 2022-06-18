import { openPopup } from '../utils/utils.js';
import { previewImage, popupImage, popupTitle } from '../utils/constants.js'

export class Card {
  constructor(data, templateCardSelector, handleCardClick) {
    //this._data = data;
    this._name = data.name;
    this._link = data.link;

    this._templateCardSelector = templateCardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return document.querySelector(this._templateCardSelector)
      .content.querySelector('.elements__card');
  }

  _clickedLikeButton = () => {
    this._likeButton.classList.toggle('elements__button-like_active');
  }

  _handleCardDelete = () => {
    this._cardElement.remove();
  }

  _addEventListeners = () => {
    this._likeButton.addEventListener('click', this._clickedLikeButton);
    this._deleteButton.addEventListener('click', this._handleCardDelete);
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  generateCard() {
    this._cardElement = this._getTemplate().cloneNode(true);

    this._cardImage = this._cardElement.querySelector('.elements__image');
    this._cardName = this._cardElement.querySelector('.elements__card-text');
    this._likeButton = this._cardElement.querySelector('.elements__button-like');
    this._deleteButton = this._cardElement.querySelector('.elements__button-delete');

    //card // destructuring assignment//
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardName.textContent = this._name;

    this._addEventListeners();

    return this._cardElement;
  }
}

