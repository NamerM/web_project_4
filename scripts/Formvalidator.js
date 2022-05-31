/// Shaping the Sphagetti Code ///
class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
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
        const { inputSelector, submitButtonSelector } = this._settings

        this.inputList = Array.from(this._formElement.querySelectorAll(inputSelector)); // ... instead of-> Array.from(this.formElement.querySelectorAll(inputSelector))

        this.inputList.forEach( (input) => {
            input.addEventListener('input', () => {
              this._checkInputValidity(input, this._settings);//check validity
              this._toggleButton(); //toggle submit
          });
        })
    };

    _hasValidInput = () => this.inputList.every( input => input.validity.valid); //by default it's true*/


    _toggleButton = () => {
      const { inactiveButtonClass } = this._settings;
      const submitButton = this._formElement.querySelector(submitButtonSelector); //this eklendi submitbuttoselector

      console.log(this._hasValidInput(inputList));
        if(this._hasValidInput()) {
          submitButton.disabled = false;
          submitButton.classList.remove(inactiveButtonClass);
        } else {
          submitButton.disabled = true;
          submitButton.classList.add(inactiveButtonClass);
        }
    };

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




// //// FORM VALIDATION PART - Project 4 - 6 ///
// const showInputError = (input, formElement, settings ) => {
//   const errorElement = formElement.querySelector(`#${input.id}-error`);
//   input.classList.add(settings.errorClass);
//   errorElement.textContent = input.validationMessage;
//   errorElement.classList.add(settings.inputErrorClass);
// };

// const hideInputError = (input, formElement, settings) => {
//   const errorElement = formElement.querySelector(`#${input.id}-error`);
//   input.classList.remove(settings.errorClass);
//   errorElement.textContent = "";
//   errorElement.classList.remove(settings.inputErrorClass);
// };



// const checkInputValidity = (formElement, input, settings) => {
//   if(input.validity.valid) {
//     hideInputError(input, formElement, settings);
//   } else {
//     showInputError(input, formElement, settings);
//   }
// };

// const hasValidInput = (inputList) => {
//   return inputList.every((input) => input.validity.valid); //by default it's true*/
//   };

// const toggleButton = (inputList, button, settings) => {
//   console.log(hasValidInput(inputList));
//     if(hasValidInput(inputList)) {
//       button.disabled = false;
//       button.classList.remove(settings.inactiveButtonClass);
//     } else {
//       button.disabled = true;
//       button.classList.add(settings.inactiveButtonClass);
//     }
//   }

// const setEventListeners = (formElement, settings) => {
//   const inputList = [...formElement.querySelectorAll(settings.inputSelector)];
//   const submitButton = formElement.querySelector(settings.submitButtonSelector);
//     inputList.forEach( (input) => {
//       input.addEventListener('input', () => {
//         checkInputValidity(formElement, input, settings);//check validity
//         toggleButton(inputList, submitButton, settings); //toggle submit
//     });
//   })
// };

//   const enableValidation = (settings) => {
//   const formList = [...document.querySelectorAll(settings.formSelector)]; //Array.From replaced with [...]
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', evt => evt.preventDefault());
//     setEventListeners(formElement, settings);
//   });
// };

// enableValidation({
//   formSelector: ".popup__form",
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__save",   //popup__button , changed it in according to css I have //
//   inactiveButtonClass: "popup__save_disabled",
//   inputErrorClass: "popup__input-error_open",
//   errorClass: "popup__error_visible"
// });

// export { toggleButton }
