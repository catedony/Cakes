/* ----- Объекты ------- */

const reviews = {
	slides: document.querySelectorAll('.reviews-slider__item'),
	width: document.querySelector('.reviews-slider__window').clientWidth,
	pointsContainer: document.querySelector('.reviews-slider__points'),
	btnNext: document.querySelector('.reviews-slider__next'),
	btnPrev: document.querySelector('.reviews-slider__prev'),
	breakpoint: 400 /* на какой ширине экрана происходит переход от управления нажатием на слайд на управление кнопками */
};

const filling = {
	slides: document.querySelectorAll('.filling-slider__item'),
	images: document.querySelectorAll('.filling__img'),
	width: document.querySelector('.filling-slider__window').clientWidth,
	pointsContainer: document.querySelector('.filling-slider__points'),
	btnNext: document.querySelector('.filling-slider__next'),
	btnPrev: document.querySelector('.filling-slider__prev'),
	choiceBtn: document.querySelectorAll('.filling__btn'),
	valueContainer: '.filling__title',
	formField: document.getElementById('choice-filling'),
	breakpoint: 700
};

const size = {
	slides: document.querySelectorAll('.size-slider__item'),
	images: document.querySelectorAll('.size__img'),
	width: document.querySelector('.size-slider__window').clientWidth,
	pointsContainer: document.querySelector('.size-slider__points'),
	choiceBtn: document.querySelectorAll('.size__btn'),
	valueContainer: '.size__img',
	formField: document.getElementById('choice-size'),
	breakpoint: 550
};

const decor = {
	slides: document.querySelectorAll('.decor-slider__item'),
	images: document.querySelectorAll('.decor__img'),
	width: document.querySelector('.decor-slider__window').clientWidth,
	pointsContainer: document.querySelector('.decor-slider__points'),
	btnNext: document.querySelector('.decor-slider__next'),
	btnPrev: document.querySelector('.decor-slider__prev'),
	choiceBtn: document.querySelectorAll('.decor__btn'),
	valueContainer: '.decor__title',
	formField: document.getElementById('choice-decor'),
	breakpoint: 646,
	pair: true /* перемотка двух слайдов за раз */
};
