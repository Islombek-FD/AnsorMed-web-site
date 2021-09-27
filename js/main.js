// HAMBURGER styles

const elHeaderList = document.querySelector('.header__list');
const elHamburger = document.querySelector('.hamburger-menu');

let hamburgerOpen = false;

elHamburger.addEventListener('click', function() {

    if(!hamburgerOpen) {
        elHeaderList.classList.add('header__list-open');
        elHamburger.classList.add('hamburger-menu__open');
        hamburgerOpen = true;
    }
    else {
        elHeaderList.classList.remove('header__list-open');
        elHamburger.classList.remove('hamburger-menu__open');
        hamburgerOpen = false;
    }
    
})