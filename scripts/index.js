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

const cardTemplate = document.querySelector("#card").content;
const cardList = document.querySelector(".cards__list");
const closeImageModalButton = document.querySelector(
  "#image-modal__close-button"
);
const imageModal = document.querySelector("#image-modal");

// formmmmmmmmsssssssssssss
const formProfile = document.forms.formProfile;
const profileNameInput = formProfile.elements.name;

closeImageModalButton.addEventListener("click", () => closeModal(imageModal));
function createCard(card) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  likeButton.addEventListener("click", (evt) => {
    const clickedButton = evt.target;
    clickedButton.classList.toggle("card__like-button_active");
  });

  deleteButton.addEventListener("click", () => {
    const cardItem = deleteButton.closest(".card");
    cardItem.remove();
  });

  cardImage.addEventListener("click", (evt) => {
    openModal(imageModal);

    const imageSrc = imageModal.querySelector(".modal__screen-image");
    const imageTitle = imageModal.querySelector(".modal__title-image");
    imageSrc.src = evt.target.src;
    imageSrc.alt = evt.target.alt;
    imageTitle.textContent = evt.target.alt;
  });

  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;
  return cardElement;
}

initialCards.forEach(function (item) {
  const newCard = createCard(item);
  cardList.append(newCard);
});

const profileModal = document.querySelector("#profile-modal");
const profileForm = profileModal.querySelector("form");
const editProfileButton = document.querySelector(".profile__edit-button");
const nameInput = profileModal.querySelector("#name");
const jobInput = profileModal.querySelector("#job");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");
const closeModalButton = profileModal.querySelector(
  "#profile-modal__close-button"
);

const cardTitleInput = document.querySelector("#card-title");
const cardSrcInput = document.querySelector("#image-Url");

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function clearInput(modal) {
  const form = modal.querySelector(validationOptions.formSelector);
  form.reset();
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeModal(profileModal);
}

function clickEditprofileButton() {
  fillProfileForm();
  openModal(profileModal);
}

editProfileButton.addEventListener("click", clickEditprofileButton);
closeModalButton.addEventListener("click", () => closeModal(profileModal));
profileForm.addEventListener("submit", handleProfileFormSubmit);

const cardModal = document.querySelector("#card-modal");
const addCard = document.querySelector(".profile__add-button");
const saveCard = document.querySelector("#modal__form-addCard");

const closeCardModalButton = cardModal.querySelector(
  "#card-modal__close-button"
);

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const cardData = {
    name: cardTitleInput.value,
    link: cardSrcInput.value,
  };
  const cardElement = createCard(cardData);
  cardList.prepend(cardElement);
  const profileForm = document.querySelector("#modal__form-addCard");

  closeModal(cardModal);
}

addCard.addEventListener("click", () => openModal(cardModal));

closeCardModalButton.addEventListener("click", () => closeModal(cardModal));

saveCard.addEventListener("submit", handleCardFormSubmit);

function closeModalEscape(evt) {
  if (evt.key === "Escape") {
    const modalopened = document.querySelector(".modal_opened");
    if (modalopened === undefined) return;
    else return closeModal(modalopened);
  }
}
document.addEventListener("keydown", (evt) => {
  closeModalEscape(evt);
});

function closeModalclick(evt) {
  const modalList = Array.from(document.querySelectorAll(".modal"));
  modalList.forEach((modal) => {
    if (evt.target.closest(".modal__body")) {
      return;
    } else if (
      !evt.target.closest(".modal__body") &&
      evt.target.closest(".modal_opened")
    ) {
      closeModal(modal);
    }
  });
}

document.addEventListener("input", (evt) => {
  const formToCheck = evt.target.closest(".form");
  const inputPlace = evt.target;
});

document.addEventListener("click", (evt) => {
  closeModalclick(evt);
});
