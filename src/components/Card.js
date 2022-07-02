export class Card {
  constructor(data, userId, templateCardSelector, handleCardClick, handleLikeIcon) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this.userId = userId;


    this._templateCardSelector = templateCardSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeIcon = handleLikeIcon;
  }

  getId() {
    return this._id
  }

  _getTemplate() {
    return document.querySelector(this._templateCardSelector)
      .content.querySelector('.elements__card');
  }

  // _handleLikeIcon = () => {
  //   this._likeButton.classList.toggle('elements__button-like_active');
  // }

  _handleCardDelete = () => {
    this._cardElement.remove();
  }

  _addEventListeners = () => {
    this._likeButton.addEventListener('click', () => this._handleLikeIcon());
    this._deleteButton.addEventListener('click', () => this._handleCardDelete());
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  setLikeCounter(newLikes) {   //length kısmını okuyamıyor kart eklenemiyor
    this._likes = newLikes
    const likeCounter = this._likes.length;
    this._cardElement.querySelector('.elements__card_likes').textContent = likeCounter;

    const likeClickedbyCurrentUser = false;
    if(likeClickedbyCurrentUser) {
      this._likeButton.classList.toggle('elements__button-like_active');
    }


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
    this.setLikeCounter(this._likes);

    return this._cardElement;
  }
}

