export default class Popup {
  constructor(popup_Selector) {
    this._modal = document.querySelector(popup_Selector);
    this._closeButton = this._modal.querySelector(".modal__close-button");
  }

  open() {
    this._modal.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._modal.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  _closeModalWithOutsideClick(evt) {
    if (
      !evt.target.closest(".modal__body") &&
      evt.target.closest(".modal_opened")
    )
      this.close();
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => this.close());
    document.addEventListener("mousedown", (evt) =>
      this._closeModalWithOutsideClick(evt)
    );
  }
}
