/* -----------------
Слайдеры
------------------ */
class Slider {
	constructor (obj) {
		this.slidesCounter = 0;
		this.pointsCounter = 0;
		this.slides = obj.slides;
		this.images = obj.images;
		this.width = obj.width;
		this.pointsContainer = obj.pointsContainer;
		this.pointsClassName = 'slider-points__point';
		this.btnPrev = obj.btnPrev;
		this.btnNext = obj.btnNext;
		this.choiceBtn = obj.choiceBtn;
		this.breakpoint = obj.breakpoint;
		this.pair = obj.pair;
	}
	hideSlides () {
		if (this.choiceBtn) {
			this.choiceBtn.forEach((elem, i) => {
				if (i !== this.slidesCounter) {
					// elem.disabled = true
					elem.setAttribute('tabindex', -1);
				} else {
					elem.setAttribute('tabindex', 0);
				}
			});
		}
	}
	moveSlides () {
		for (let i = 0; i < this.slides.length; i++) {
			this.slides[i].style.transform = 'translateX(-' + this.width * this.slidesCounter + 'px)';
		}
	}
	scrollForward () {
		if (this.slidesCounter >= 0 && this.slidesCounter < this.slides.length - 1) {
			this.slidesCounter++;
		} else {
			this.slidesCounter = 0;
		}
		this.moveSlides();
		this.hideSlides();
	}
	scrollForwardPair () {
		if (this.slidesCounter >= 0 && this.slidesCounter < Math.round((this.slides.length - 1) / 2)) {
			this.slidesCounter++;
		} else {
			this.slidesCounter = 0;
		}
		this.moveSlides();
		this.hideSlides();
	}
	scrollBack () {
		if (this.slidesCounter > 0) {
			this.slidesCounter--;
		} else {
			this.slidesCounter = 0;
		}
		this.moveSlides();
		this.hideSlides();
	}
	createPoints () {
		for (let i = 0; i < this.slides.length; i++) {
			let point = document.createElement('span');
			point.classList.add(this.pointsClassName);
			this.pointsContainer.appendChild(point);
			this.points = this.pointsContainer.querySelectorAll('.' + this.pointsClassName);
			this.points[this.slidesCounter].style.background = '#f50049';
		}
	}
	scrollPoints () {
		for (let i = 0; i < this.points.length; i++) {
			this.points[i].style.background = '#ddd';
		}

		if (this.slidesCounter === 0) {
			this.pointsCounter = 0;
			for (let j = 0; j < this.points.length; j++) {
				this.points[j].style.transform = 'translate(0)';
			}
		}

		if (this.slidesCounter === this.slides.length - 1) {
			this.points[this.points.length - 1].style.background = '#f50049';
		} else if (this.slidesCounter > 3) {
			this.pointsCounter++;
			for (let k = 0; k < this.points.length; k++) {
				this.points[k].style.transform = 'translate(-' + 10 * this.pointsCounter + 'px)';
			}
			this.points[this.slidesCounter].style.background = '#f50049';
		} else {
			this.points[this.slidesCounter].style.background = '#f50049';
		}
	}
}

function launchSlider (elem) {
	elem.createPoints();
	elem.hideSlides();
	if (elem.btnNext && elem.btnPrev) {
		if (elem.pair) {
			elem.btnNext.onclick = function () {
				elem.scrollForwardPair();
			};
		} else {
			elem.btnNext.onclick = function () {
				elem.scrollForward();
			};
		}
		elem.btnPrev.onclick = function () {
			elem.scrollBack();
		};
	}

	if (elem.images) {
		for (let i = 0; i < elem.images.length; i++) {
			elem.images[i].addEventListener('click', function () {
				if (document.documentElement.clientWidth < elem.breakpoint) {
					elem.scrollForward();
					elem.scrollPoints();
				}
			});
		}
	} else {
		for (let i = 0; i < elem.slides.length; i++) {
			elem.slides[i].addEventListener('click', function () {
				if (document.documentElement.clientWidth < elem.breakpoint) {
					elem.scrollForward();
					elem.scrollPoints();
				}
			});
		}
	}
}

/* ----Реализация----- */

const reviewsSlider = new Slider(reviews);
launchSlider(reviewsSlider);

let fillingSlider = new Slider(filling);
launchSlider(fillingSlider);

const sizeSlider = new Slider(size);
launchSlider(sizeSlider);

const decorSlider = new Slider(decor);
launchSlider(decorSlider);
