const firstNameInput = document.getElementById('firstName')
const lastNameInput = document.getElementById('lastName')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')

function getInputValue(input) {
    return input.value.trim();
}

function isInputFilled(inputValue) {
    return inputValue !== '' || inputValue.length > 0
}

function isLastNameValid() {
    const lastName = getInputValue(lastNameInput)
    return isInputFilled(lastName) && lastName.length <= 25
}

function isFirstNameValid() {
    const firstName = getInputValue(firstNameInput)
    return isInputFilled(firstName) && firstName.length <= 25
}

function isEmailValid() {
    const email = getInputValue(emailInput)
    return isInputFilled(email) && email.length >= 5 && firstName.length <= 40 && email.includes('@')
}

function isMessageValid() {
    const message = getInputValue(messageInput)
    return isInputFilled(message)
}

function setSuccess() {

}

function setError() {
    
}

function validateForm() {
    isLastNameValid() ? setSuccess(lastNameInput) : setError(lastNameInput, 'Veuillez indiquer votre nom.')
    isFirstNameValid() ? setSuccess(firstNameInput) : setError(firstNameInput, 'Veuillez indiquer votre prenom.')
    isEmailValid() ? setSuccess(emailInput) : setError(emailInput, 'Votre courriel doit contenir au moins 4 caracteres dont un \'@\'.')
    isMessageValid() ? setSuccess(messageInput) : setError(messageInput, 'Ecrivez-nous au moins un petit quelque chose ;)')
}