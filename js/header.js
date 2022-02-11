// header btn
const headerSecondBtn = document.getElementsByClassName("header__second-btn")[0];
const headerSecondContent = document.getElementsByClassName("header__second-btn-content")[0];
const headerSecondClose = document.getElementsByClassName("header__second-close")[0];

headerSecondBtn.onclick = function () {
	headerSecondContent.style.display = "grid";
	headerSecondBtn.style.display = "none";
	headerSecondClose.style.display = "block";
}
headerSecondClose.onclick = function () {
	headerSecondContent.style.display = "none";
	headerSecondBtn.style.display = "block";
	headerSecondClose.style.display = "none";
}

const headerBurger = document.getElementsByClassName("header__burger")[0];
const headerBurgerContent = document.getElementsByClassName('header__items-inner')[0];
const headerBurgerClose = document.getElementsByClassName("header__close")[0];

headerBurger.onclick = function () {
	headerBurgerContent.style.display = "block";
	headerBurger.style.display = "none";
	headerBurgerClose.style.display = "block";
}
headerBurgerClose.onclick = function () {
	headerBurgerContent.style.display = "none";
	headerBurger.style.display = "block";
	headerBurgerClose.style.display = "none";
}


document.querySelectorAll('.header__second-search-btn').forEach((item) =>
	item.addEventListener('click', () => {
		const parentThree = item.parentNode;

		if (parentThree.classList.contains('header-active-search')) {
			parentThree.classList.remove('header-active-search');
		}else {
			document
				.querySelectorAll('.header__second-search')
				.forEach((child) => child.classList.remove('header-active-search'))
			parentThree.classList.toggle('header-active-search');
		}
	})
)

document.querySelectorAll('.header__third-btn').forEach((item) =>
	item.addEventListener('click', () => {
		const parentThree = item.parentNode;

		if (parentThree.classList.contains('header-active-third')) {
			parentThree.classList.remove('header-active-third');
		}else {
			document
				.querySelectorAll('.header__second-search-mobile')
				.forEach((child) => child.classList.remove('header-active-third'))
			parentThree.classList.toggle('header-active-third');
		}
	})
)