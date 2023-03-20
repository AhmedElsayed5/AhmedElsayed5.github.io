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
    const imageModal = document.querySelector("#image-modal");
    imageModal.classList.add("modal_opened");

    const imageSrc = imageModal.querySelector(".image-modal__screen");
    const imageTitle = imageModal.querySelector(".image-modal__title");
    imageSrc.src = evt.target.src;
    imageSrc.alt = evt.target.alt;
    imageTitle.textContent = evt.target.alt;

    const closeImageModalButton = document.querySelector(
      "#image-modal__close-button"
    );
    closeImageModalButton.addEventListener("click", () => close(imageModal));
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

function open(modal) {
  modal.classList.add("modal_opened");
}

function close(modal) {
  modal.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  close(profileModal);
}

editProfileButton.addEventListener("click", () => open(profileModal));
closeModalButton.addEventListener("click", () => close(profileModal));
profileForm.addEventListener("submit", handleProfileFormSubmit);

const cardModal = document.querySelector("#card-modal");
const addCard = document.querySelector(".profile__add-button");
const saveCard = document.querySelector("#card-modal__save-button");

const closeCardModalButton = cardModal.querySelector(
  "#card-modal__close-button"
);

function fillCardForm(evt) {
  evt.preventDefault();
  const cardData = {
    name: cardTitleInput.value,
    link: cardSrcInput.value,
  };
  const cardElement = createCard(cardData);
  cardList.prepend(cardElement);
  cardTitleInput.value = "";
  cardSrcInput.value = "";
  close(cardModal);
}

addCard.addEventListener("click", () => open(cardModal));

closeCardModalButton.addEventListener("click", () => close(cardModal));

saveCard.addEventListener("click", fillCardForm);
