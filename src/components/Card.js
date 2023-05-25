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
    this._cardOwner = data.owner._id;
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
    this._userInCharge = currentUser;
  }

  _setCardViewElements() {
    this._cardImage = this._element.querySelector(".card__image");
    this._cardTitle = this._element.querySelector(".card__title");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._deleteButton = this._element.querySelector(".card__delete-button");
    // console.log(this._cardOwner);
    if (this._cardOwner !== this._userInCharge._id)
      this._deleteButton.hidden = true;
    this._cardLikeCount = this._element.querySelector(".card__like-count");
    // console.log(this._userInCharge);
  }

  _setCardView() {
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    console.log(this._likes);
    this.setLikeInfo(this._likes);
    this._cardLikeCount.textContent =
      this._likeCount === 0 ? " " : this._likeCount;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick();
      this._updateLikes();
    });
    if (this._cardOwner === this._userInCharge)
      this._deleteButton.addEventListener("click", () => {
        this._handleDeleteClick();
      });
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick();
      this.handleDeleteIcon();
    });
  }

  handleDeleteIcon() {
    this._element.remove();
    this._element = null;
  }

  isLiked() {
    console.log(this._userId);
    return this._likes.some((like) => like._id === this._userId);
  }

  _updateLikes() {
    this._cardLikeCount.textContent =
      this._likes.length === 0 ? " " : this._likes.length;

    if (this.isLiked()) {
      console.log("Yes you like it");
      this._likeButton.classList.add("card__like-button_active");
    } else {
      console.log("No you don't like");
      this._likeButton.classList.remove("card__like-button_active");
    }
  }

  setLikeInfo(data) {
    this._likes = data;
    this._updateLikes();
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
