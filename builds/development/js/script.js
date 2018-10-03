/*-----------------
Слайдеры
------------------*/
class Slider {
  constructor(obj) {
    this.slidesCounter = 0;
    this.pointsCounter = 0;
    this.slides = obj.slides;
    this.images = obj.images;
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

  if (elem.images) {
    for (let i = 0; i < elem.images.length; i++) {
      elem.images[i].addEventListener('click', function() {
        if (document.documentElement.clientWidth < elem.breakpoint) {
        elem.scrollForward();
        elem.scrollPoints();
        }
      });
    }
  } else {
    for (let i = 0; i < elem.slides.length; i++) {
      elem.slides[i].addEventListener('click', function() {
        if (document.documentElement.clientWidth < elem.breakpoint) {
        elem.scrollForward();
        elem.scrollPoints();
        }
      });
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
  images: document.querySelectorAll('.filling__img'),
  width: document.querySelector('.filling-slider__window').clientWidth,
  pointsContainer: document.querySelector('.filling-slider__points'),
  btnNext: 	document.querySelector('.filling-slider__next'),
  btnPrev: 	document.querySelector('.filling-slider__prev'),
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
  btnNext: 	document.querySelector('.decor-slider__next'),
  btnPrev: 	document.querySelector('.decor-slider__prev'),
  choiceBtn: document.querySelectorAll('.decor__btn'),
  valueContainer: '.decor__title',
  formField: document.getElementById('choice-decor'),
  breakpoint: 646,
  pair: true /*перемотка двух слайдов за раз*/
};

/* ----Реализация----- */

const reviewsSlider = new Slider(reviews);
launchSlider(reviewsSlider);

const fillingSlider = new Slider(filling);
launchSlider(fillingSlider);

const sizeSlider = new Slider(size);
launchSlider(sizeSlider);

const decorSlider = new Slider(decor);
launchSlider(decorSlider);
//order-form

function	makeChoice(obj, target, selfParent) {
			const valueContainer = obj.valueContainer;
			const input = obj.formField;
		for (let i = 0; i < target.length; i++) {
			target[i].addEventListener('click', function() {
				let parent;
				selfParent ? parent = this :	parent = this.parentElement;
				const value = parent.querySelector(valueContainer).innerHTML;
				input.value = value;
			});
		}
	}

makeChoice(filling, filling.choiceBtn);

document.documentElement.clientWidth > decor.breakpoint ? makeChoice(decor, decor.slides, true) : makeChoice(decor, decor.choiceBtn); /* selfParent - true означает, что когда выбор украшений передается в форму заказа по клику на элемент, не нужно переходить на уровень родителя, чтобы переключиться в valueContainer, т.к. сам элемент и есть родитель*/

document.documentElement.clientWidth > size.breakpoint ? makeChoice(size, size.images) : makeChoice(size, size.choiceBtn);
//pop-up window

window.addEventListener('scroll', openModal);

function openModal(){
	document.querySelector('.top-dialog').showModal();
	document.querySelector('.top-dialog').classList.add('dialog_visible');
	window.removeEventListener('scroll', openModal);
}

document.querySelector('.top-dialog__btn').onclick = function() {
	document.querySelector('.top-dialog').close();
}

document.querySelector('.choice__btn').onclick = function(event) {
	event.preventDefault();
	document.querySelector('.order-dialog__filling').innerHTML = document.getElementById('choice-filling').value;
	document.querySelector('.order-dialog__size').innerHTML = document.getElementById('choice-size').value;
	document.querySelector('.order-dialog__decor').innerHTML = document.getElementById('choice-decor').value;
	document.querySelector('.order-dialog').showModal();
	document.querySelector('.order-dialog').classList.add('dialog_visible');
}

document.querySelector('.order-dialog__btn').onclick = function() {
	document.querySelector('.order-dialog').close();
	document.querySelector('.order-dialog').classList.remove('dialog_visible');
}
//pop-up menu

document.querySelector('.burger').onclick = () => {
  document.querySelector('.main-menu').classList.toggle('main-menu_visible');
  for (let i = 1; i <= 3; i++) {
    document.querySelector('.layer' + i).classList.toggle('layer' + i + '_active');
  }
};

//cards:hover
const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
  cards[i].onmouseover = function () {
    this.querySelector('.card__link').querySelector('.card__arrow').style.backgroundImage = 'url(img/card-arrow-hover.png)';
  }
  cards[i].onmouseout = function () {
    this.querySelector('.card__link').querySelector('.card__arrow').style.backgroundImage = 'url(img/card-arrow.png)';
  }
}

//позиционирование slider-points

function positionPointsFilling() {
  const img = document.querySelector('.filling__img-container');
  const points = document.querySelector('.filling-slider__points');
  let height = img.offsetHeight;
  let top = height + 5 + 'px';
  points.style.top = top;
}

function positionPointsSize() {
  const btn = document.querySelector('.size__btn');
  const points = document.querySelector('.size-slider__points');
  let btnStyle = getComputedStyle(btn);
  let height2 = parseFloat(btnStyle.marginBottom) + parseFloat(btnStyle.marginTop);
  let height = btn.offsetHeight;
  let bottom = height + height2 + 25 + 'px';
  points.style.bottom = bottom;
}

function positionPointsDecor() {
  const points = document.querySelector('.decor-slider__points');
  let imgRect = document.querySelector('.decor__img').getBoundingClientRect();
  let height = imgRect.bottom + pageYOffset;
  let height2 = document.querySelector('.decor-slider').offsetTop;
  let delta = height - height2;
  let top = delta + 5 + 'px';
  points.style.top = top;
}

positionPointsFilling();
positionPointsSize();
positionPointsDecor();

window.onresize = function () {
  positionPointsDecor();
  positionPointsSize();
  positionPointsFilling();
}

//up-btn 
window.onscroll = function() {
	document.querySelector('.up-btn').style.display = pageYOffset > 1000 ? 'block' : 'none';
}

//обработка отправки сообщения
// document.querySelector('.send-message__btn').onclick = function() {
// 	let name = document.getElementById('name').value;
// 	let email = document.getElementById('name').value;
// 	let message = document.getElementById('name').value;
// }