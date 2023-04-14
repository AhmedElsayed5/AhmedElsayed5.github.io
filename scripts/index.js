import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import * as utils from "./utils.js";

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

const profileModal = document.querySelector("#profile-modal");
const profileForm = profileModal.querySelector("form");
const nameInput = profileModal.querySelector("#name");
const jobInput = profileModal.querySelector("#job");
const closeModalButton = profileModal.querySelector(
  "#profile-modal__close-button"
);
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");

const cardTitleInput = document.querySelector("#card-title");
const cardSrcInput = document.querySelector("#image-Url");
profileForm.addEventListener("submit", handleProfileFormSubmit);
editProfileButton.addEventListener("click", handleEditProfileButton);
closeModalButton.addEventListener("click", () =>
  utils.closeModal(profileModal)
);

// formmmmmmmmsssssssssssss
const formProfile = document.forms.formProfile;

const closeImageModalButton = document.querySelector(
  "#image-modal__close-button"
);
closeImageModalButton.addEventListener("click", () =>
  utils.closeModal(utils.imageModal)
);

// As a Class
initialCards.forEach(function (item) {
  const data = {
    name: item.name,
    link: item.link,
  };
  const card = new Card(data, "#card");
  cardList.append(card.getView());
});

const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("click", () => utils.openModal(utils.cardModal));

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  utils.closeModal(profileModal);
}

function handleEditProfileButton() {
  fillProfileForm();
  utils.openModal(profileModal);
}

const addCardForm = document.querySelector("#modal__form-addCard");

const saveCardButton = document.querySelector("#modal__form-addCard");

saveCardButton.addEventListener("submit", handleCardFormSubmit);
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const cardData = {
    name: cardTitleInput.value,
    link: cardSrcInput.value,
  };
  const cardElement = new Card(cardData, "#card");
  cardList.prepend(cardElement.getView());
  const cardForm = evt.target;
  utils.closeModal(utils.cardModal);
  cardForm.reset();
  const formSubmitButton = cardForm.querySelector(
    settings.submitButtonSelector
  );
}

const settings = {
  formSelector: ".form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

const profileFormValidation = new FormValidator(profileForm, settings);
profileFormValidation.enableValidation();
const addCardFormValidation = new FormValidator(addCardForm, settings);
addCardFormValidation.enableValidation();
