// pop-up window

window.addEventListener('scroll', openModal);

function openModal () {
	document.querySelector('.top-dialog').showModal();
	document.querySelector('.top-dialog').classList.add('dialog_visible');
	window.removeEventListener('scroll', openModal);
}

document.querySelector('.top-dialog__btn').onclick = function () {
	document.querySelector('.top-dialog').close();
};

document.querySelector('.choice__btn').onclick = function (event) {
	event.preventDefault();
	document.querySelector('.order-dialog__filling').innerHTML = document.getElementById('choice-filling').value;
	document.querySelector('.order-dialog__size').innerHTML = document.getElementById('choice-size').value;
	document.querySelector('.order-dialog__decor').innerHTML = document.getElementById('choice-decor').value;
	document.querySelector('.order-dialog').showModal();
	document.querySelector('.order-dialog').classList.add('dialog_visible');
};

document.querySelector('.order-dialog__btn').onclick = function () {
	document.querySelector('.order-dialog').close();
	document.querySelector('.order-dialog').classList.remove('dialog_visible');
};
// pop-up menu

document.querySelector('.burger').onclick = () => {
	document.querySelector('.main-menu').classList.toggle('main-menu_visible');
	for (let i = 1; i <= 3; i++) {
		document.querySelector('.burger__layer' + i).classList.toggle('burger__layer' + i + '_active');
	}
};

// cards:hover
const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
	cards[i].onmouseover = function () {
		this.querySelector('.card__link').querySelector('.card__arrow').style.backgroundImage = 'url(img/card-arrow-hover.png)';
	};
	cards[i].onmouseout = function () {
		this.querySelector('.card__link').querySelector('.card__arrow').style.backgroundImage = 'url(img/card-arrow.png)';
	};
}

// позиционирование slider-points

function positionPointsFilling () {
	const img = document.querySelector('.filling__img-container');
	const points = document.querySelector('.filling-slider__points');
	let height = img.offsetHeight;
	let top = height + 5 + 'px';
	points.style.top = top;
}

function positionPointsSize () {
	const btn = document.querySelector('.size__btn');
	const points = document.querySelector('.size-slider__points');
	let btnStyle = getComputedStyle(btn);
	let height2 = parseFloat(btnStyle.marginBottom) + parseFloat(btnStyle.marginTop);
	let height = btn.offsetHeight;
	let bottom = height + height2 + 25 + 'px';
	points.style.bottom = bottom;
}

function positionPointsDecor () {
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

window.addEventListener('resize', () => {
	positionPointsDecor();
	positionPointsSize();
	positionPointsFilling();
});

// up-btn
window.onscroll = function () {
	document.querySelector('.up-btn').style.display = pageYOffset > 1000 ? 'block' : 'none';
};

// //обработка отправки сообщения
// document.querySelector('.send-message__btn').onclick = function() {
// let name = document.getElementById('name').value;
// let email = document.getElementById('email').value;
// let message = document.getElementById('message').value;
// }
