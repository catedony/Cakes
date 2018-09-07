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

//slider

