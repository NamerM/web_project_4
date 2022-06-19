const POPUP_CLASS = 'popup';
const CLOSE_BUTTON_CLASS = 'popup__close';
const POPUP_SELECTOR_CLASS = 'popup_open';

export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector)
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
      }
  }

  open() {
    this._popup.classList.add(POPUP_SELECTOR_CLASS);
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove(POPUP_SELECTOR_CLASS);
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._popup.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains(POPUP_CLASS) ||
        evt.target.classList.contains(CLOSE_BUTTON_CLASS)
      ) {
        this.close();
      }
    })
  }
}
//*** mousedown replaced click to prevent the bug if you click inside a popup and then move your mouse outside it
// and release the button above the overlay then the popup closes but it’s not
