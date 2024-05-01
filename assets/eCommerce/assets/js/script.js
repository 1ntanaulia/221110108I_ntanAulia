'use strict';

/*add element*/
const addEventOnElem = function(elem, type, callback) {
    if (elem.length > 1){
        for (let i = 0; i < elem.length; i++){
            elem[i].addEventOnElem(type, callback);
        }
    } else{
        elem.addEventOnElem(type, callback);
    }
}

/*navbar toggle*/
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarlinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

/*header sticky*/
const header = document.querySelector("[data-header]");

const headerActive = function () {
    if (window.scrollY > 150) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

.addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
    if (lastScrolledPos ≥ window.screenY) {
        header.classList.remove("header-hide");
    } else {
        header.classList.add("header-hide")
    }

    lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky);