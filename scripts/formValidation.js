const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const newsletterEmailInput = document.getElementById("newsletter__email");

const contactFormInputs = [
  {
    input: firstNameInput,
    errorMessage: "Veuillez indiquer votre prenom.",
    validationFunction: () => isFirstNameValid(firstNameInput),
  },
  {
    input: lastNameInput,
    errorMessage: "Veuillez indiquer votre nom.",
    validationFunction: () => isLastNameValid(lastNameInput),
  },
  {
    input: emailInput,
    errorMessage:
      "Votre courriel doit contenir au moins 4 caracteres dont un '@'.",
    validationFunction: () => isEmailValid(emailInput),
  },
  {
    input: messageInput,
    errorMessage: "Ecrivez-nous au moins un petit quelque chose ;)",
    validationFunction: () => isMessageValid(messageInput),
  },
];

const newsletterInputs = [
  {
    input: newsletterEmailInput,
    errorMessage:
      "Votre courriel doit contenir au moins 4 caracteres dont un '@'.",
    validationFunction: () => isEmailValid(newsletterEmailInput),
  },
];

function getInputValue(input) {
  return input.value.trim();
}

function isInputFilled(inputValue) {
  return inputValue !== "" || inputValue.length > 0;
}

function isLastNameValid(lastNameInput) {
  const lastName = getInputValue(lastNameInput);
  return isInputFilled(lastName) && lastName.length <= 25;
}

function isFirstNameValid(firstNameInput) {
  const firstName = getInputValue(firstNameInput);
  return isInputFilled(firstName) && firstName.length <= 25;
}

function isEmailValid(emailInput) {
  const email = getInputValue(emailInput);
  return (
    isInputFilled(email) &&
    email.length >= 5 &&
    email.length <= 40 &&
    email.includes("@")
  );
}

function isMessageValid(messageInput) {
  const message = getInputValue(messageInput);
  return isInputFilled(message);
}

function getErrorMessageElement(input) {
  const parentNode = input.parentElement;
  return parentNode.querySelector(".input-control__error-msg");
}

function setSuccess(input) {
  const errorDisplay = getErrorMessageElement(input);
  errorDisplay.textContent = "";
  input.classList.remove("input-control__input--error");
  input.classList.add("input-control__input--success");
}

function setError(input, errorMessage) {
  const errorDisplay = getErrorMessageElement(input);
  errorDisplay.textContent = errorMessage;
  input.classList.remove("input-control__input--successs");
  input.classList.add("input-control__input--error");
}

function displayFormValidation(input) {
  if (input.validationFunction()) {
    setSuccess(input.input);
  } else {
    setError(input.input, input.errorMessage);
  }
}

function trackInputsValidation(inputs) {
  inputs.forEach((input) => {
    input.input.addEventListener("input", () => {
      displayFormValidation(input)
    })
  }
  );
}

function validateForm(formInputs) {
  let readyToSend = true;
  readyToSend = formInputs.some(input => !input.validationFunction()) ? false : true
  formInputs.forEach(input => displayFormValidation(input))
  return readyToSend;
}

trackInputsValidation(contactFormInputs);
trackInputsValidation(newsletterInputs);

const validateContactForm = () => validateForm(contactFormInputs);
const validateNewsletterForm = () => validateForm(newsletterInputs);
