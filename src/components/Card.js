import * as utils from "../utils/utils.js";

export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getCardViewElements() {
    this._cardImage = this._element.querySelector(".card__image");
    this._cardTitle = this._element.querySelector(".card__title");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._deleteButton = this._element.querySelector(".card__delete-button");
  }

  _setCardView() {
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => this._handleLikeIcon());
    this._deleteButton.addEventListener("click", () =>
      this._handleDeleteIcon()
    );
    this._cardImage.addEventListener("click", () => {
      this._handlePreviewPicture();
      this._handleCardClick();
    });
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  _handleDeleteIcon() {
    this._deleteButton.closest(".card").remove();
  }

  _handlePreviewPicture() {
    const imageSrc = utils.imageModal.querySelector(".modal__screen-image");
    const imageTitle = utils.imageModal.querySelector(".modal__title-image");
    imageSrc.src = this._link;
    imageSrc.alt = this._name;
    imageTitle.textContent = this._name;
    utils.openModal(utils.imageModal);
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._element = this._getTemplate();
    this._getCardViewElements();
    this._setCardView();
    this._setEventListeners();
    return this._element;
  }
}
