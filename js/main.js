// header menu

const menuBtn = document.getElementsByClassName('header__burger')[0]
const menu = document.getElementsByClassName('header__items')[0]
const menuClose = document.getElementsByClassName('header__close')[0]

menuBtn.onclick = function () {
    menu.style.display = "grid"
    menuClose.style.display = "block"
    menuBtn.style.display = "none"
}
menuClose.onclick = function () {
    menu.style.display = "none"
    menuBtn.style.display = "block"
    menuClose.style.display = "none"
}
