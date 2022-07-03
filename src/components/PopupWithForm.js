import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm ) {
    super(popupSelector)

    this._handleSubmitForm = handleSubmitForm
    this._form = this._popup.querySelector('.popup__form')
    this._inputs = this._form.querySelectorAll('.popup__input')       //[...this._form.querySelectorAll('.popup__input')]
  }

  _getInputValues() {
    const values = {}


    this._inputs.forEach((input) => {
      const key = input.id
      const value = input.value
      values[key] = value
    })
    return values;
  }

  setEventListeners() {
      super.setEventListeners()

      this._form.addEventListener( 'submit', (e) => {
          console.log('!!!!')
          e.preventDefault()

          this._handleSubmitForm(this._getInputValues())
        })
      }

  setInputValues(data){
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    })
  }

  close() {
      super.close()
      this._form.reset()
  }

}

