/*-----------------
Слайдеры
------------------*/
class Slider {
	constructor(obj) {
		this.slidesCounter = 0;
		this.pointsCounter = 0;
		this.slides = obj.slides;
		this.width = obj.width;
		this.pointsContainer = obj.pointsContainer;
		this.pointsClassName = 'slider-points__point';
		this.btnPrev = obj.btnPrev;
		this.btnNext = obj.btnNext;
		this.breakpoint = obj.breakpoint;
		this.pair = obj.pair;
	}

	moveSlides() {
		for (let i = 0; i < this.slides.length; i++) {
			this.slides[i].style.transform = 'translateX(-' + this.width*this.slidesCounter + 'px)';
		}
	}
	scrollForward () {
			if (this.slidesCounter >= 0 && this.slidesCounter < this.slides.length -1 ) {
				this.slidesCounter++;
			} else {
				this.slidesCounter = 0;
			}
		this.moveSlides();
	}
	scrollForwardPair() {
		if (this.slidesCounter >= 0 && this.slidesCounter < Math.round((this.slides.length -1)/2) ) {
			this.slidesCounter++;
				} else {
					this.slidesCounter = 0;
				}
		this.moveSlides();
	}
	scrollBack() {
		if (this.slidesCounter > 0) {
			this.slidesCounter--;
		} else {
			this.slidesCounter = 0;
		}
		this.moveSlides();
	}
	createPoints() {
		for (let i = 0; i < this.slides.length; i++) {
			let point = document.createElement('span');
			point.classList.add(this.pointsClassName);
			this.pointsContainer.appendChild(point);
			this.points = this.pointsContainer.querySelectorAll('.' + this.pointsClassName);
			this.points[this.slidesCounter].style.background = 'var(--pink)';
		}
	}
	scrollPoints() {
		for (let i = 0; i < this.points.length; i++) {
			this.points[i].style.background = '#ddd';
		}
		
		if (this.slidesCounter == 0) {
			this.pointsCounter = 0;
			for (let j = 0; j < this.points.length; j++) {
				this.points[j].style.transform = 'translate(0)';
			}
		}
		
		if (this.slidesCounter === this.slides.length - 1) {
			this.points[this.points.length - 1].style.background = 'var(--pink)';
			
		} else if (this.slidesCounter > 3) {
			this.pointsCounter++;
			for (let k = 0; k < this.points.length; k++) {
				this.points[k].style.transform = 'translate(-' + 10*this.pointsCounter + 'px)';
			}
			this.points[this.slidesCounter].style.background = 'var(--pink)';
		} else {
			this.points[this.slidesCounter].style.background = 'var(--pink)';
				}
		}
	}

function launchSlider(elem) {
		elem.createPoints();
	
		if (elem.btnNext && elem.btnPrev) {
			if (elem.pair) {
				elem.btnNext.onclick = function() {
				elem.scrollForwardPair();
				}
			} else {
				elem.btnNext.onclick = function() {
				elem.scrollForward();
				}
			}
		elem.btnPrev.onclick = function() {
			elem.scrollBack();
		}
	}
		for (let i = 0; i < elem.slides.length; i++) {
			elem.slides[i].onclick = function() {
				if (document.documentElement.clientWidth < elem.breakpoint) {
				elem.scrollForward();
				elem.scrollPoints();
				}
			}
		}
	}

/*----- Объекты -------*/

const reviews = {
	slides: document.querySelectorAll('.reviews-slider__item'),
	width: document.querySelector('.reviews-slider__window').clientWidth,
	pointsContainer: document.querySelector('.reviews-slider__points'),
	btnNext: 	document.querySelector('.reviews-slider__next'),
	btnPrev: 	document.querySelector('.reviews-slider__prev'),
	breakpoint: 400 /*на какой ширине экрана происходит переход от управления	нажатием на слайд на управление кнопками*/
};

const filling = {
	slides: document.querySelectorAll('.filling-slider__item'),
	width: document.querySelector('.filling-slider__window').clientWidth,
	pointsContainer: document.querySelector('.filling-slider__points'),
	btnNext: 	document.querySelector('.filling-slider__next'),
	btnPrev: 	document.querySelector('.filling-slider__prev'),
	breakpoint: 700
}

const size = {
	slides: document.querySelectorAll('.size-slider__item'),
	width: document.querySelector('.size-slider__window').clientWidth,
	pointsContainer: document.querySelector('.size-slider__points'),
	breakpoint: 550
}

const decor = {
	slides: document.querySelectorAll('.decor-slider__item'),
	width: document.querySelector('.decor-slider__window').clientWidth,
	pointsContainer: document.querySelector('.decor-slider__points'),
	btnNext: 	document.querySelector('.decor-slider__next'),
	btnPrev: 	document.querySelector('.decor-slider__prev'),
	breakpoint: 575,
	pair: true /*перемотка двух слайдов за раз*/
}

/* ----Реализация----- */

const reviewsSlider = new Slider(reviews);
launchSlider(reviewsSlider);

const fillingSlider = new Slider(filling);
launchSlider(fillingSlider);

const sizeSlider = new Slider(size);
launchSlider(sizeSlider);

const decorSlider = new Slider(decor);
launchSlider(decorSlider);