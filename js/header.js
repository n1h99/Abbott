// header btn
const headerSecondBtn = document.getElementsByClassName("header__second-btn")[0];
const headerSecondContent = document.getElementsByClassName("header__second-btn-content")[0];
const headerSecondClose = document.getElementsByClassName("header__second-close")[0];

headerSecondBtn.onclick = function () {
	headerSecondContent.style.display = "grid";
	headerSecondBtn.style.display = "none";
	headerSecondClose.style.display = "block";
};
headerSecondClose.onclick = function () {
	headerSecondContent.style.display = "none";
	headerSecondBtn.style.display = "block";
	headerSecondClose.style.display = "none";
};

const headerBurger = document.getElementsByClassName("header__burger")[0];
const headerBurgerContent = document.getElementsByClassName('header__items-inner')[0];
const headerBurgerClose = document.getElementsByClassName("header__close")[0];

headerBurger.onclick = function () {
	headerBurgerContent.style.display = "block";
	headerBurger.style.display = "none";
	headerBurgerClose.style.display = "block";
};
headerBurgerClose.onclick = function () {
	headerBurgerContent.style.display = "none";
	headerBurger.style.display = "block";
	headerBurgerClose.style.display = "none";
};



const headerSearchBtn = document.querySelector('.header__second-search-btn')
const headerSearchClose = document.querySelector('.header__second-search-close')
const headerSearchContent = document.querySelector('.header__second-search-content')

headerSearchBtn.onclick = function() {
	headerSearchContent.style.display = 'block'
}

headerSearchClose.onclick = function() {
	headerSearchContent.style.display = 'none'

}

const headerSearchBtnMobile = document.querySelector('.header__third-btn')
const headerSearchCloseMobile = document.querySelector('.header__third-search-close')
const headerSearchContentMobile = document.querySelector('.header__third-content')

headerSearchBtnMobile.onclick = function() {
	headerSearchContentMobile.style.display = 'block'
}

headerSearchCloseMobile.onclick = function() {
	headerSearchContentMobile.style.display = 'none'

}
