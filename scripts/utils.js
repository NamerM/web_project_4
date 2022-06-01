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
const popupSelector = 'popup_open';



const openPopup = (popup) => {
  popup.classList.add(popupSelector);
  addKeyDownListener(popup);
 }

const closePopup = (popup) => {
  popup.classList.remove(popupSelector);
  handleKeyDown(popup);
  removeKeyDownListener(popup);
}


//Closing the popup windows escape button//
const handleKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector(`.${popupSelector}`);
    closePopup(openedPopup);
  }
}

const addKeyDownListener = () => {
  document.addEventListener('keydown', handleKeyDown);
}

const removeKeyDownListener = () => {
  document.removeEventListener('keydown', handleKeyDown);
}


export { openPopup, closePopup, handleKeyDown, addKeyDownListener, removeKeyDownListener };

