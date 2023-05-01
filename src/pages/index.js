import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import * as utils from "../utils/utils.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/popupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import "./index.css";

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
const imageFullView = new PopupWithImage("#image-modal");
imageFullView.setEventListeners();
const createCard = ({ name, link }) => {
  const card = new Card({ name, link }, "#card", () => {
    imageFullView.open({ name, link });
  });
  return card.getView();
};

//////// Section Class
const cardSection = new Section(
  {
    items: initialCards,
    renderer: function (item) {
      cardSection.addItem(createCard(item));
    },
  },
  ".cards__list"
);
cardSection.renderItems();

const user = new UserInfo(".profile__title", ".profile__description");
const editProfileModal = new PopupWithForm(
  "#profile-modal",
  ({ name, job }) => {
    user.setUserInfo({ name, job });
  }
);
const addCardModal = new PopupWithForm("#card-modal", ({ name, link }) => {
  /// using Section Class
  cardSection.addItem(createCard({ name, link }));
});

const editeProfileform = document.querySelector("#formProfile");
const editeprofileFormValidator = new FormValidator(editeProfileform, settings);
editeprofileFormValidator.enableValidation();

const addImageForm = document.querySelector("#modal__form-addCard");
const addImageFormValidator = new FormValidator(addImageForm, settings);
addImageFormValidator.enableValidation();

const editProfileButton = document.querySelector(".profile__edit-button");
editProfileButton.addEventListener("click", handleEditProfileButton);
function handleEditProfileButton() {
  editeprofileFormValidator.disableButton();
  editProfileModal.open();
}
editProfileModal.setEventListeners();

const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("click", handleAddCardButton);
function handleAddCardButton() {
  addImageFormValidator.disableButton();
  addCardModal.open();
}
addCardModal.setEventListeners();
