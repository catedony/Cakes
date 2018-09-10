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
	cards[i].onmouseover = function() {
		this.querySelector('.card__link').querySelector('.card__arrow').style.backgroundImage = 'url(img/card-arrow-hover.png)';
	}
  cards[i].onmouseout = function() {
    this.querySelector('.card__link').querySelector('.card__arrow').style.backgroundImage = 'url(img/card-arrow.png)';
  }
}

//filling-slider
var count = 0;
var slides = document.querySelectorAll('.filling-slider__item');
var width = document.querySelector('.filling-slider__item').clientWidth;

document.querySelector('.filling-slider__next').onclick = function() {
	if (count >= 0 && count < slides.length -1 ) {
		count++;
	} else {
		count = 0;
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.transform = 'translateX(-' + width*count + 'px)';
	}
}

document.querySelector('.filling-slider__prev').onclick = function() {
	if (count > 0) {
		count--;
	} else {
		count = 0;
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.transform = 'translateX(-' + width * count + 'px)';
	}
}