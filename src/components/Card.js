export default class Card {
  constructor(
    data,
    cardSelector,
    cardOwner,
    handleCardClick,
    handleDeleteClick,
    currentUser,
    handleLikeClick
  ) {
    this._cardOwner = cardOwner;
    this._name = data.name;
    this._link = data.link;
    this._likeCount = data.likes.length;
    this._likes = data.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._userId = data.owner._id;
    this._handleLikeClick = handleLikeClick;
    this._cardId = data._id;
  }

  _setCardViewElements() {
    this._cardImage = this._element.querySelector(".card__image");
    this._cardTitle = this._element.querySelector(".card__title");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._deleteButton = this._element.querySelector(".card__delete-button");
    if (this._cardOwner !== "owner") this._deleteButton.hidden = true;
    this._cardLikeCount = this._element.querySelector(".card__like-count");
  }

  _setCardView() {
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this.updateLikes(this._likes);
    this._cardLikeCount.textContent =
      this._likeCount === 0 ? " " : this._likeCount;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => this._handleLikeClick());
    if (this._cardOwner === "owner")
      this._deleteButton.addEventListener("click", () => {
        this._handleDeleteClick();
      });
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick();
    });
  }

  handleDeleteIcon() {
    this._element.remove();
    this._element = null;
  }

  setLikeInfo(data) {
    this._likes = data.likes;
  }

  updateLikes() {
    this._cardLikeCount.textContent = this._likes.length;
    // if (this._likes.some((like) => like._id === this._userId._id))
    if (this._likes.some((like) => like._id === this._userId)) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.cloneNode(true)
      .querySelector(".card");
  }

  getView() {
    this._element = this._getTemplate();
    this._setCardViewElements();
    this._setCardView();
    this._setEventListeners();

    return this._element;
  }
}
