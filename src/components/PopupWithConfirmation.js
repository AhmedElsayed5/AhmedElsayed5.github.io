import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._confirmButton = this._modal.querySelector(".modal__save-button");
  }

  open() {
    super.open();
  }
  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener("click", (evt) => {
      this._handleDeleteSubmit();
    });
  }
  renderLoading(isLoading) {
    if (isLoading) {
      this._confirmButton.textContent = "Loading...";
    } else {
      this._confirmButton.textContent = "Yes";
    }
  }
  setSubmitAction(handleDeleteSubmit) {
    this._handleDeleteSubmit = handleDeleteSubmit;
  }
}
