import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ link, name }, popupSelector) {
    super(popupSelector);
    this._link = link;
    this._name = name;
    this._imageSrc = this._modal.querySelector(".modal__screen-image");
    this._imageTitle = this._modal.querySelector(".modal__title-image");
  }
  open() {
    super.open();
    this._imageSrc.src = this._link;
    this._imageSrc.alt = this._name;
    this._imageTitle.textContent = this._name;
  }
}
