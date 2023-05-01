import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageSrc = this._modal.querySelector(".modal__screen-image");
    this._imageTitle = this._modal.querySelector(".modal__title-image");
  }
  open({ name, link }) {
    super.open();
    this._imageSrc.src = link;
    this._imageSrc.alt = name;
    this._imageTitle.textContent = name;
  }
}
