const burger = document.querySelector('.main-burger');
const burgerClose = document.querySelector('.close-burger');
const menu = document.querySelector('.header__menu');
const body = document.body;

burger.addEventListener('click', () => {
	body.classList.add('_fixed');
	menu.classList.add('header__menu--visible');
})
burgerClose.addEventListener('click', () => {
	body.classList.remove('_fixed');
	menu.classList.remove('header__menu--visible');
})

