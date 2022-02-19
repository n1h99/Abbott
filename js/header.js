// header btn
const headerSecondBtn = document.getElementsByClassName("header__second-btn")[0];
const headerSecondContent = document.getElementsByClassName("header__second-btn-content")[0];
const headerSecondClose = document.getElementsByClassName("header__second-close")[0];

if (!!headerSecondBtn) {
    headerSecondBtn.onclick = function () {
        headerSecondContent.style.display = "grid";
        headerSecondBtn.style.display = "none";
        headerSecondClose.style.display = "block";
    };
}
if (!!headerSecondClose) {
    headerSecondClose.onclick = function () {
        headerSecondContent.style.display = "none";
        headerSecondBtn.style.display = "block";
        headerSecondClose.style.display = "none";
    };
}

const headerBurger = document.getElementsByClassName("header__burger")[0];
const headerBurgerContent = document.getElementsByClassName('header__items-inner')[0];
const headerBurgerClose = document.getElementsByClassName("header__close")[0];

if (!!headerBurger) {
    headerBurger.onclick = function () {
        headerBurgerContent.style.display = "block";
        headerBurger.style.display = "none";
        headerBurgerClose.style.display = "block";
    };
}

if (!!headerBurgerClose) {
    headerBurgerClose.onclick = function () {
        headerBurgerContent.style.display = "none";
        headerBurger.style.display = "block";
        headerBurgerClose.style.display = "none";
    };
}


const headerSearchBtn = document.querySelector('.header__second-search-btn')
const headerSearchClose = document.querySelector('.header__second-search-close')
const headerSearchContent = document.querySelector('.header__second-search-content')

if (!!headerSearchBtn) {
    headerSearchBtn.addEventListener("click", function () {
        headerSearchContent.style.display = 'block'
    });
}

if (!!headerSearchClose) {
    headerSearchClose.addEventListener("click",function () {
        headerSearchContent.style.display = 'none'
    })
}
// window.addEventListener("click", function(event) {
//     if (event.target !== headerSearchContent && event.target !== headerSearchBtn) {
//         headerSearchContent.style.display = "none";
//     }
// });

const headerSearchBtnMobile = document.querySelector('.header__third-btn')
const headerSearchCloseMobile = document.querySelector('.header__third-search-close')
const headerSearchContentMobile = document.querySelector('.header__third-content')

headerSearchBtnMobile.onclick = function () {
    headerSearchContentMobile.style.display = 'block'
}

if (!!headerSearchCloseMobile) {
    headerSearchCloseMobile.onclick = function () {
        headerSearchContentMobile.style.display = 'none'
    }
}
