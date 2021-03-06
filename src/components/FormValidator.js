export class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    this._submitButton = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );
  }

  _showInputError = (input, errorMessage) => {
    const { inputErrorClass, errorClass } = this._settings;

    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    input.classList.add(errorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(inputErrorClass);
  };

  _hideInputError = (input) => {
    const { inputErrorClass, errorClass } = this._settings;

    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    input.classList.remove(errorClass);
    errorElement.classList.remove(inputErrorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity = (input) => {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  };

  _setEventListeners = () => {
    const { inputSelector } = this._settings;

    this.inputList = Array.from(
      this._formElement.querySelectorAll(inputSelector)
    );

    this._toggleButton(); //method check

    this.inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButton();
      });
    });
  };

  _hasValidInput = () => {
    return this.inputList.every((input) => input.validity.valid);
  };

  _toggleButton = () => {
    const { inactiveButtonClass } = this._settings;
    this._inactiveButtonClass = inactiveButtonClass;

    if (this._hasValidInput()) {
      this.enableButton();
    } else {
      this.disableButton();
    }
  };

  enableButton = () => {
    this._submitButton.disabled = false;
    this._submitButton.classList.remove(this._inactiveButtonClass);
  };

  disableButton = () => {
    this._submitButton.disabled = true;
    this._submitButton.classList.add(this._inactiveButtonClass);
  };

  resetValidation() {
    this.inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}


