/// Shaping the Sphagetti Code ///
class FormValidator {
    constructor(settings, formElement) {
      this._settings = settings;
      this._formElement = formElement;
      this._submitButton = this._formElement.querySelector(
        this._settings.submitButtonSelector
      );
    }


    _showInputError = (input, errorMessage) => {
      const { inputErrorClass, errorClass } = this._settings

      const errorElement = this._formElement.querySelector(`#${input.id}-error`);
      input.classList.add(errorClass);  //(errorClass)
      errorElement.textContent =  errorMessage;  //input.validationMessage;
      errorElement.classList.add(inputErrorClass);
    };

    _hideInputError = (input) => {
      const { inputErrorClass, errorClass } = this._settings

      const errorElement = this._formElement.querySelector(`#${input.id}-error`);
      input.classList.remove(errorClass);
      errorElement.classList.remove(inputErrorClass);
      errorElement.textContent = "";
    };

    _checkInputValidity = ( input) => {
      if(!input.validity.valid) {
        this._showInputError(input, input.validationMessage );
      } else {
        this._hideInputError(input, this._settings);
      }
    };

    _setEventListeners = () => {
        const { inputSelector } = this._settings

        this.inputList = Array.from(this._formElement.querySelectorAll(inputSelector)); // ... instead of-> Array.from(this.formElement.querySelectorAll(inputSelector))

        this.inputList.forEach( (input) => {
            input.addEventListener('input', () => {
              this._checkInputValidity(input, this._settings);//check validity
              this._toggleButton(); //toggle submit
          });
        })
    };

    _hasValidInput = () => {
      return this.inputList.every((input) => input.validity.valid);
    }; //by default it's true*/


    _toggleButton = () => {
      const { inactiveButtonClass } = this._settings;
      this._inactiveButtonClass = inactiveButtonClass;

      if(this._hasValidInput()) {
          this._enableButton();
        } else {
          this.disableButton();
        }
    };

    _enableButton = () => {
      submitButton.disabled = false;
      submitButton.classList.remove(this._inactiveButtonClass);
    }

    disableButton = () => {
      submitButton.disabled = true;
      submitButton.classList.add(this._inactiveButtonClass);
    }

    resetValidation() {
      this.inputList.forEach(input => {
        this._hideInputError(input)
      })
    }

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault()
        });

        this._setEventListeners(this._formElement, this._settings);

    }
}

export default FormValidator


//!!!note to self - card reference is conflicting - sorun orada muhtemelen

// const settings = {
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__save",   //popup__button , changed it in according to css I have //
//   inactiveButtonClass: "popup__save_disabled",
//   inputErrorClass: "popup__input-error_open",
//   errorClass: "popup__error_visible"
// }

// const editForm = document.querySelector('.popup__form')
// const addCardForm = document.querySelector('.popup__form')

// const editFormValidator = new Formvalidator(settings, editForm)
// const addCardFormValidator = new Formvalidator(settings, addCardForm)


