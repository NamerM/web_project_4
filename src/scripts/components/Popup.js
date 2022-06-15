const CLOSE_BUTTON_CLASS = '.popup__close'
const POPUP_SELECTOR_CLASS = 'popup_open';

export class Popup{
  constructor(popupSelector) {
    this.popup = document.querySelector(popupSelector)
  }

  _handleEscClose() {
    // this._popup.querySelector() = (evt) => {
    //   if (evt.key === 'Escape') {
    //     const openedPopup = document.querySelector(`.${'popup__open'}`);
    //     closePopup(openedPopup);
    //   }
    // }
  }
  open() {
    this.__popup.classList.add(POPUP_SELECTOR_CLASS);
  }

  close() {
    this.__popup.classList.remove(POPUP_SELECTOR_CLASS);
  }

  setEventListeners() {
    // this._popup.querySelector(CLOSE_BUTTON_CLASS).addeventListener('click', () => {
    //   this.close();
    // })

    // this._popup.addeventListener('click', (event) => {
    //   if (!event.target.closest('.popup__square')){
    //     this.close();
    //   }
    // })

    this__popup.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains(POPUP_SELECTOR_CLASS) ||
        evt.target.classList.contains(CLOSE__BUTTON_CLASS)
      ) {
        this.close();
      }
    })

  }
}
