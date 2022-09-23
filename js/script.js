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

$(document).ready(function(){
	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		speed: 350,
		cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
		touchThreshold: 15,
		appendArrows:$('.controls'),
		appendDots:$('.controls'),
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					autoplay: false,
					arrows: false,
					slidesToShow: 1
				}
			}
		]
	});
});