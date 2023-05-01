import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._modal.querySelector(".modal__screen-image");
    this._imageTitle = this._modal.querySelector(".modal__title-image");
  }
  open({ name, link }) {
    super.open();
    this._image.src = link;
    this._image.alt = name;
    this._imageTitle.textContent = name;
  }
}
