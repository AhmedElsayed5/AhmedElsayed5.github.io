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

function createCard(i) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = initialCards[i].link;
  cardImage.alt = initialCards[i].name;
  cardTitle.textContent = initialCards[i].name;
  return cardElement;
}

for (let i = 0; i < initialCards.length; i++) {
  const newCard = createCard(i);
  cardList.append(newCard);
}

const profileModal = document.querySelector(".modal");
const editProfileButton = document.querySelector(".profile__edit-button");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#job");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");
const closeModalButton = document.querySelector(".modal__close-button");

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function open() {
  profileModal.classList.add("modal_opened");
  fillProfileForm();
}

function close() {
  profileModal.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  close();
}

editProfileButton.addEventListener("click", open);
closeModalButton.addEventListener("click", close);
profileModal.addEventListener("submit", handleProfileFormSubmit);
