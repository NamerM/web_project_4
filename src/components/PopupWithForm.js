import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm ) {
    super(popupSelector)

    this._handleSubmitForm = handleSubmitForm
    this._form = this._popup.querySelector('.popup__form')
    this._inputs = this._form.querySelectorAll('.popup__input')
    this._submitButton = this._popup.querySelector('.popup__save')
    // this._submitBtnText = this._submitBtnText.textContent
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
          //console.log('input taken')
          e.preventDefault()

          this._handleSubmitForm(this._getInputValues())
        })
      }

  setInputValues(data){
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    })
  }

  changeSubmitHandler(newSubmitHandler) {
    this._handleSubmitForm = newSubmitHandler
  }

  changeText(text) {
    const button = this._submitButton;
    // this.renderLoading()

    if(text === 'Saving') {
      button.textContent = 'Saving...'
    }
    if(text === 'Default') {
      button.textContent = 'Save'
    }
  }


  // renderLoading(isLoading, loadingText='Saving...') {
  //   const button = this._submitButton;
  //   if (isLoading) {
  //     this.button.textContent = loadingText;
  //   } else {
  //     this.button.textContent = this._submitButton;
  //   }
  // }

  close() {
      super.close()
      this._form.reset()
  }

}

