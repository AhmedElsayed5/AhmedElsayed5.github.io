let initialCards = [
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

let cardTempelate = document.querySelector("#card").content;
let cardList = document.querySelector(".cards__list");

for (let i = 0; i < initialCards.length; i++) {
  let cardElement = cardTempelate.querySelector(".card").cloneNode(true);
  let cardImage = cardElement.querySelector(".card__image");
  let cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = initialCards[i].link;
  cardImage.alt = initialCards[i].name;
  cardTitle.textContent = initialCards[i].name;
  cardList.append(cardElement);
}

let mod = document.querySelector(".modal");
let editButton = document.querySelector(".profile__edit-button");
let nameInput = document.querySelector("#name");
let jobInput = document.querySelector("#job");
let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__description");
let closeModal = document.querySelector(".modal__close-button");

function open() {
  mod.classList.add("modal_opened");

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function close() {
  mod.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  close();
}

editButton.addEventListener("click", open);
closeModal.addEventListener("click", close);
mod.addEventListener("submit", handleProfileFormSubmit);
