const validationOptions = {
  formSelector: ".form", // done
  inputSelector: ".modal__input", // done
  submitButtonSelector: ".modal__save-button", // done
  inactiveButtonClass: "modal__save-button_disabled", // done
  inputErrorClass: "form__input_type_error", // done
  errorClass: "form__input-error_active", // done
};

function toggleSubmitButton(form, indicator) {
  const submitButton = form.querySelector(
    validationOptions.submitButtonSelector
  );
  if (indicator) {
    submitButton.classList.remove(validationOptions.inactiveButtonClass);
    submitButton.disabled = false;
  } else {
    submitButton.classList.add(validationOptions.inactiveButtonClass);
    submitButton.disabled = true;
  }
}

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationOptions.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationOptions.errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationOptions.inputErrorClass);
  errorElement.classList.remove(validationOptions.errorClass);
  errorElement.textContent = "";
};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
    toggleSubmitButton(formElement, 0);
  } else {
    hideInputError(formElement, inputElement);
    toggleSubmitButton(formElement, 1);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(validationOptions.inputSelector)
  );

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement);
    });
  });
  formElement.reset();
};

const enableValidation = () => {
  const formList = Array.from(
    document.querySelectorAll(validationOptions.formSelector)
  );

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation();
