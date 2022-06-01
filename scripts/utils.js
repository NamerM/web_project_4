const popupSelector = 'popup_open';

const openPopup = (popup) => {
  popup.classList.add(popupSelector);
  addKeyDownListener();
 }

const closePopup = (popup) => {
  popup.classList.remove(popupSelector);
  handleKeyDown();
  removeKeyDownListener();
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


//isEscEvent lizanın kodu dk58 itibaren
// const isEscEvent = (evt, action) => {
//   const activePopup = document.querySelector('.popup_is-opened');
//   if (evt.which === ESC_KEYCODE) {
//     action(activePopup);
//   }
// }
