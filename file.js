let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let navList = document.querySelector('.nav-list');


burger.addEventListener("click", () => {
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
});

