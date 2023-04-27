import Popup from "./Popup.js";

export default class PopupWithForms extends Popup {
  constructor(
    popupSelector,
    handleFormSubmit //why{} notworking
  ) {
    super(popupSelector);
    this._modalForm = this._modal.querySelector("form");
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this._modal.querySelector(".modal__save-button");
  }

  close() {
    this._modalForm.reset();
    console.log("closed");
    super.close();
  }
  _getInputValues() {
    this._inputList = Array.from(
      this._modalForm.querySelectorAll(".modal__input")
    );
    this._handleFormSubmit(this._inputList[0].value, this._inputList[1].value);
    this.close();
  }
  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener("click", () => this._getInputValues());
  }
}
