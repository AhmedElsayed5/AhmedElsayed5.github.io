import Popup from "./Popup.js";

export default class PopupWithForms extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    // console.log(this._modal);
    this._modalForm = this._modal.querySelector("form");
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this._modal.querySelector(".modal__save-button");
  }

  close() {
    this._modalForm.reset();
    super.close();
  }
  _getInputValues() {
    this._inputList = Array.from(
      this._modalForm.querySelectorAll(".modal__input")
    );
    const item = {};
    this._inputList.forEach((input) => {
      item[input.name] = input.value;
    });
    console.log(item);
    return this._handleFormSubmit(item);
  }
  setEventListeners() {
    super.setEventListeners();
    this._modalForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._getInputValues();
      this.close();
    });
  }
}
