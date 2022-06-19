
import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._subtitle = this._popup.querySelector('.popup__subtitle');
    this._image = this._popup.querySelector('.popup__image');
  }


  open(name, link) {

    super.open()
      this._image.src = link;
      this._image.alt = name;
      this._subtitle.textContent = name;

  }

}
