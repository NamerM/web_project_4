export class Card {
  constructor(data, userId, templateCardSelector, handleCardClick, handleLikeIcon, handleDeleteClick) {
    console.log("data", data);
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;
    //console.log("ownerId", data.owner._id)

    this._templateCardSelector = templateCardSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeIcon = handleLikeIcon;
    this._handleDeleteClick = handleDeleteClick;
  }

  getId() {
    return this._id
  }

  _getTemplate() {
    return document.querySelector(this._templateCardSelector)
      .content.querySelector('.elements__card');
  }

  _addEventListeners() {
    this._likeButton.addEventListener('click', () => this._handleLikeIcon());
    this._deleteButton.addEventListener('click', () => this._handleDeleteClick(this));
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  removeCard(){
    this._cardElement.remove();
    this._cardElement = null;
  }

  setLikeCounter(newLikes) {   //length kısmını okuyamıyor kart eklenemiyor - handlecardsubmit fonksiyonuna likes ve _id ekleyerek çözdü ^^++
    this._likes = newLikes;

    const likeCounter = this._likes.length;
    this._cardElement.querySelector('.elements__card_likes').textContent = likeCounter;

    const likeClickedbyCurrentUser = this.isLiked();
    if(likeClickedbyCurrentUser) {
      this._likeButton.classList.add('elements__button-like_active');
    } else {
      this._likeButton.classList.remove('elements__button-like_active');
    }
  }

  isLiked(){
    return this._likes.find(user => user._id === this._userId);
  }

  // idMatch() {
  //   if(this._userId !== this._ownerId) {
  //     this._deleteButton.style.display = 'none' // elements__button-delete
  //    };
  // }


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

    if(this._userId !== this._ownerId) {
      this._deleteButton.style.display = 'none' // elements__button-delete
      };

    return this._cardElement;
  }
}

