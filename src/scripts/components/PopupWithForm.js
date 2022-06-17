import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm ) {
    super(popupSelector)

    this._handleSubmitForm = handleSubmitForm
    this._form = this._popup.querySelector('.popup__form')
  }

  _getInputValues() {
    const values = {}

    const inputs = [...this._form.querySelectorAll('.popup__input')]

    inputs.forEach((input) => {
      const key = input.id
      const value = input.value
      values[key] = value
    })
    return values;
  }// addcard{id # cardTitle-input: value1, cardImageLink-input: value2 }
   // editProfile(id # name-input: value1, profession-input:value2)

  setEventListeners() {
      super.setEventListeners()

      this._form.addEventListener( 'submit', (e) => {
          e.preventDefault()
          this._handleSubmitForm(this._getInputValues())
        })
      }



  close() {
      super.close()
      this._form.reset()
  }

}

