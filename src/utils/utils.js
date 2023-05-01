export function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeModalWithEscape);
  document.addEventListener("click", closeModalWithOutsideClick);
}

export function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeModalWithEscape);
  document.removeEventListener("click", closeModalWithOutsideClick);
}

export function closeModalWithEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}

export function closeModalWithOutsideClick(evt) {
  if (
    !evt.target.closest(".modal__body") &&
    evt.target.closest(".modal_opened")
  ) {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}
