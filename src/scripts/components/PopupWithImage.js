
import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
  }

  open(name, link) {
    super.open()

    const subtitle = this._popup.querySelector('.popup__subtitle');
    const image = this._popup.querySelector('.popup__image');

      image.src = link;
      image.alt = name;
      subtitle.textContent = name;

  }

}
