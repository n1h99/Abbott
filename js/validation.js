const nameLabel = document.querySelector('.input-name')
const nameError = document.querySelector('.name-error')
const surnameLabel = document.querySelector('.input-surname')
const surnameError = document.querySelector('.surname-error')
const middleLabel = document.querySelector('.input-middle')
const middleError = document.querySelector('.middle-error')
const emailLabel = document.querySelector('.input-email')
const emailError = document.querySelector('.email-error')
const passwordLabel = document.querySelector('.input-password')
const passwordError = document.querySelector('.password-error')
const confPasswordLabel = document.querySelector('.input-confirm-password')
const confPasswordError = document.querySelector('.confirm-password-error')
const companyLabel = document.querySelector('.input-company')
const companyError = document.querySelector('.company-error')

nameLabel.onclick = function () {
    nameError.style.display = 'none'
}
surnameLabel.onclick = function () {
    surnameError.style.display = 'none'
}
middleLabel.onclick = function () {
    middleError.style.display = 'none'
}
emailLabel.onclick = function () {
    emailError.style.display = 'none'
}
passwordLabel.onclick = function () {
    passwordError.style.display = 'none'
}
confPasswordLabel.onclick = function () {
    confPasswordError.style.display = 'none'
}
companyLabel.onclick = function () {
    companyError.style.display = 'none'
}