import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import * as utils from "./utils.js";

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
const editProfileButton = document.querySelector(".profile__edit-button");

const profileEditeModal = document.querySelector("#profile-modal");
const profileEditeForm = profileEditeModal.querySelector("form");
const nameInput = profileEditeModal.querySelector("#name");
const jobInput = profileEditeModal.querySelector("#job");

const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");

const cardTitleInput = document.querySelector("#card-title");
const cardSrcInput = document.querySelector("#image-Url");
profileEditeForm.addEventListener("submit", handleProfileEditeFormSubmit);
editProfileButton.addEventListener("click", handleEditProfileButton);

// formmmmmmmmsssssssssssss

// As a Class
initialCards.forEach(function (item) {
  const card = new Card(item, "#card");
  cardList.append(card.getView());
});

function fillProfileEditeForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function handleProfileEditeFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  utils.closeModal(profileEditeModal);
}

function handleEditProfileButton() {
  profileEditeFormValidator.disableButton();
  fillProfileEditeForm();
  utils.openModal(profileEditeModal);
}

const addCardForm = document.querySelector("#modal__form-addCard");
const addCardFormValidator = new FormValidator(addCardForm, settings);
addCardFormValidator.enableValidation();
const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("click", handleAddCardButton);
function handleAddCardButton(evt) {
  addCardFormValidator.disableButton();
  utils.openModal(utils.addCardModal);
}

const saveCardButton = document.querySelector("#modal__form-addCard");

saveCardButton.addEventListener("submit", handleCardFormSubmit);
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  createCard();
  const cardForm = evt.target;
  utils.closeModal(utils.addCardModal);
  cardForm.reset();
}

function createCard() {
  const cardData = {
    name: cardTitleInput.value,
    link: cardSrcInput.value,
  };
  const cardElement = new Card(cardData, "#card");
  cardList.prepend(cardElement.getView());
}

const profileEditeFormValidator = new FormValidator(profileEditeForm, settings);
profileEditeFormValidator.enableValidation();

const closeButtons = document.querySelectorAll(".modal__close-button");

closeButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => utils.closeModal(popup));
});
