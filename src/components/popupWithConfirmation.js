import Popup from "./Popup.js";

export default class popupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._confirmButton = this._modal.querySelector(
      ".delete-image-modal__button"
    );
  }

  open(id) {
    super.open();
    this._id = id;
  }
  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener("click", (evt) => {
      this._handleDeleteSubmit();
    });
  }
  renderLoading(isLoading) {
    if (isLoading) {
      this._saveButton.textContent = "Loading...";
    } else {
      this._saveButton.textContent = "Yes";
    }
  }
  setSubmitAction(handleDeleteSubmit) {
    this._handleDeleteSubmit = handleDeleteSubmit;
    console.log("Delete");
  }
}
