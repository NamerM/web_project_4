import { Popup } from '../components/Popup.js';

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


// //   popup.js used - DENEME YAPTIK BU HALİYLE DE ÇALIŞIYPRS
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


export {  openPopup, closePopup, addKeyDownListener, removeKeyDownListener };

