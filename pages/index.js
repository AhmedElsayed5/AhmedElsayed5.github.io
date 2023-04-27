import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import * as utils from "../utils/utils.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForms from "../components/popupWithForms.js";
import UserInfo from "../components/UserInfo.js";

const settings = {
  formSelector: ".form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const cardList = document.querySelector(".cards__list");
// const editProfileButton = document.querySelector(".profile__edit-button");

// const profileEditeModal = document.querySelector("#profile-modal");
// const profileEditeForm = profileEditeModal.querySelector("form");
// const nameInput = profileEditeModal.querySelector("#name");
// const jobInput = profileEditeModal.querySelector("#job");

// const profileName = document.querySelector(".profile__title");
// const profileJob = document.querySelector(".profile__description");

// const cardTitleInput = document.querySelector("#card-title");
// const cardSrcInput = document.querySelector("#image-Url");
// const addCardForm = document.querySelector("#modal__form-addCard");
// const addCardFormValidator = new FormValidator(addCardForm, settings);
// const addCardButton = document.querySelector(".profile__add-button");
// const saveCardButton = document.querySelector("#modal__form-addCard");
// const profileEditeFormValidator = new FormValidator(profileEditeForm, settings);

// profileEditeForm.addEventListener("submit", handleProfileEditeFormSubmit);
// editProfileButton.addEventListener("click", handleEditProfileButton);

initialCards.forEach(function (item) {
  const card = new Card(item, "#card", () => {
    // console.log(item);
    const cardView = new PopupWithImage(item, "#image-modal");
    cardView.setEventListeners();
  });
  cardList.append(card.getView());
});

// function fillProfileEditeForm() {
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
// }

// function handleProfileEditeFormSubmit(evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileJob.textContent = jobInput.value;
//   utils.closeModal(profileEditeModal);
// }

// function handleEditProfileButton() {
//   profileEditeFormValidator.disableButton();
//   fillProfileEditeForm();
//   utils.openModal(profileEditeModal);
// }

// addCardFormValidator.enableValidation();
// addCardButton.addEventListener("click", handleAddCardButton);
// function handleAddCardButton(evt) {
//   utils.openModal(utils.addCardModal);
// }

// saveCardButton.addEventListener("submit", handleCardFormSubmit);
// function handleCardFormSubmit(evt) {
//   evt.preventDefault();
//   createCard();
//   const cardForm = evt.target;
//   utils.closeModal(utils.addCardModal);
//   cardForm.reset();
//   addCardFormValidator.disableButton();
// }

// function createCard() {
//   const cardData = {
//     name: cardTitleInput.value,
//     link: cardSrcInput.value,
//   };
//   const cardElement = new Card(cardData, "#card");
//   cardList.prepend(cardElement.getView());
// }

// profileEditeFormValidator.enableValidation();

// function activateCloseButtons() {
//   const closeButtons = document.querySelectorAll(".modal__close-button");

//   closeButtons.forEach((button) => {
//     const popup = button.closest(".modal");
//     button.addEventListener("click", () => utils.closeModal(popup));
//   });
// }
// activateCloseButtons();

const editProfileButton = document.querySelector(".profile__edit-button");
editProfileButton.addEventListener("click", handleEditProfileButton);
function handleEditProfileButton() {
  const editProfileModal = new PopupWithForms("#profile-modal", (name, job) => {
    const user = new UserInfo("#name", "#job");
    user.setUserInfo(name, job);
  });
  editProfileModal.open();
  editProfileModal.setEventListeners();
}

const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("click", handleAddCardButton);
function handleAddCardButton() {
  const addCardModal = new PopupWithForms("#card-modal", (name, link) => {
    const item = { name, link };
    const newCard = new Card(item, "#card", () => {
      const cardView = new PopupWithImage(item, "#image-modal");
      cardView.setEventListeners();
    });
    cardList.prepend(newCard.getView());
  });
  addCardModal.open();
  addCardModal.setEventListeners();
}

const editeProfileform = document.querySelector("#formProfile");
const editeprofileFormValidator = new FormValidator(editeProfileform, settings);
editeprofileFormValidator.enableValidation();

const addImageForm = document.querySelector("#modal__form-addCard");
const addImageFormValidator = new FormValidator(addImageForm, settings);
addImageFormValidator.enableValidation();
