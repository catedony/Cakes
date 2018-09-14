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

//позиционирование slider-points

// function positionPoints() {
// 	const img = document.querySelector('.filling__img-container');
// 	let height = img.offsetHeight;
// 	const points = document.querySelector('.filling-slider__points');
// 	let top = height + 5 + 'px';
// 	points.style.top = top;
// 	console.log(top);
// }

// positionPoints();
// window.onresize = positionPoints;

// function positionPoints() {
// 		const btn = document.querySelector('.size__btn');
// 		let btnStyle = getComputedStyle(btn);
// 		let height2 = parseFloat(btnStyle.marginBottom) + parseFloat(btnStyle.marginTop);
// 		let height = btn.offsetHeight;
// 		const points = document.querySelector('.size-slider__points');
// 		let bottom = height + height2 + 40 + 'px';
// 		points.style.bottom = bottom;
// 		console.log(height);
// 	}
	
// 	positionPoints();
// 	window.onresize = positionPoints;

function positionPoints() {
	let img = document.querySelector('.decor__img').getBoundingClientRect();
	let height = img.bottom + pageYOffset;
	let height2 = document.querySelector('.decor-slider').offsetTop;
	let delta = height - height2;

	const points = document.querySelector('.decor-slider__points');
		let top = delta + 5 + 'px';
		points.style.top = top;
		console.log(delta);
	}
	
	positionPoints();
	window.onresize = positionPoints;