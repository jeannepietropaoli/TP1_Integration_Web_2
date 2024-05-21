const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const inputs = [
  {
    input: firstNameInput,
    errorMessage: "Veuillez indiquer votre prenom.",
    validationFunction: isFirstNameValid,
  },
  {
    input: lastNameInput,
    errorMessage: "Veuillez indiquer votre nom.",
    validationFunction: isLastNameValid,
  },
  {
    input: emailInput,
    errorMessage:
      "Votre courriel doit contenir au moins 4 caracteres dont un '@'.",
    validationFunction: isEmailValid,
  },
  {
    input: messageInput,
    errorMessage: "Ecrivez-nous au moins un petit quelque chose ;)",
    validationFunction: isMessageValid,
  },
];

function getInputValue(input) {
  return input.value.trim();
}

function isInputFilled(inputValue) {
  return inputValue !== "" || inputValue.length > 0;
}

function isLastNameValid() {
  const lastName = getInputValue(lastNameInput);
  return isInputFilled(lastName) && lastName.length <= 25;
}

function isFirstNameValid() {
  const firstName = getInputValue(firstNameInput);
  return isInputFilled(firstName) && firstName.length <= 25;
}

function isEmailValid() {
  const email = getInputValue(emailInput);
  return (
    isInputFilled(email) &&
    email.length >= 5 &&
    email.length <= 40 &&
    email.includes("@")
  );
}

function isMessageValid() {
  const message = getInputValue(messageInput);
  return isInputFilled(message);
}

function getErrorMessageElement(input) {
  const parentNode = input.parentElement;
  return parentNode.querySelector(".form__error-msg");
}

function setSuccess(input) {
  const errorDisplay = getErrorMessageElement(input);
  errorDisplay.textContent = "";
  input.classList.remove("form__input--error");
  input.classList.add("form__input--success");
}

function setError(input, errorMessage) {
  const errorDisplay = getErrorMessageElement(input);
  errorDisplay.textContent = errorMessage;
  input.classList.remove("form__input--success");
  input.classList.add("form__input--error");
}

function validateForm() {
  let readyToSend = true;
  inputs.forEach((input) => {
    if (input.validationFunction()) {
      setSuccess(input.input);
    } else {
      setError(input.input, input.errorMessage);
      readyToSend = false;
    }
  });
  return readyToSend;
}
