import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm ) {
    super(popupSelector)

    this._handleSubmitForm = handleSubmitForm
    this._form = this._popup.querySelector('.popup__form')
  }

  _getInputValues() {

  }

  setEventListeners() {
      super.setEventListeners()

      this._form.addEventListener( 'submit', (e) => {
          e.preventDefault()
          this._handleSubmitForm()
        })
      }



  close() {
      super.close()
      this._form.reset()
  }

}

