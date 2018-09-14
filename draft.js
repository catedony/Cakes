
//filling-slider
// var count = 0;
// var slides = document.querySelectorAll('.filling-slider__item');
// var width = document.querySelector('.filling-slider__item').clientWidth;

// for (var n = 0; n < slides.length; n++) {
// 	// let width = document.querySelector('.filling-slider__list').clientWidth / 3;
// 	slides[n].onclick = function() {
// 		if (count >= 0 && count < slides.length -1 ) {
// 			count++;
// 		} else {
// 			count = 0;
// 		}
// 		for (var i = 0; i < slides.length; i++) {
// 			slides[i].style.transform = 'translateX(-' + width*count + 'px)';
// 		}
// 		console.log(width);
// 	}
// }

// document.querySelector('.filling-slider__next').onclick = function() {
// 	if (count >= 0 && count < slides.length -1 ) {
// 		count++;
// 	} else {
// 		count = 0;
// 	}
// 	for (var i = 0; i < slides.length; i++) {
// 		slides[i].style.transform = 'translateX(-' + width*count + 'px)';
// 	}
	
// }

// document.querySelector('.filling-slider__prev').onclick = function() {
// 	if (count > 0) {
// 		count--;
// 	} else {
// 		count = 0;
// 	}
// 	for (var i = 0; i < slides.length; i++) {
// 		slides[i].style.transform = 'translateX(-' + width * count + 'px)';
// 	}
// }

// var count = 0;
// var slides = document.querySelectorAll('.decor-slider__item');
// var width = document.querySelector('.decor-slider__window').clientWidth;

// document.querySelector('.decor-slider__next').onclick = function() {
// 	if (count >= 0 && count < Math.round((slides.length -1)/2) ) {
// 		count++;
// 	} else {
// 		count = 0;
// 	}
// 	for (var i = 0; i < slides.length; i++) {
// 		slides[i].style.transform = 'translateX(-' + width*count + 'px)';
// 	}
	
// }

// document.querySelector('.decor-slider__prev').onclick = function() {
// 	if (count > 0) {
// 		count--;
// 	} else {
// 		count = 0;
// 	}
// 	for (var i = 0; i < slides.length; i++) {
// 		slides[i].style.transform = 'translateX(-' + width * count + 'px)';
// 	}
// }

// for (var n = 0; n < slides.length; n++) {
// 		slides[n].onclick = function() {
// 			if (count >= 0 && count < slides.length - 1 ) {
// 				count++;
// 			} else {
// 				count = 0;
// 			}
// 			for (var i = 0; i < slides.length; i++) {
// 				slides[i].style.transform = 'translateX(-' + width*count + 'px)';
// 			}
// 			console.log(width);
// 		}
// 	}

// var count = 0;
// var slides = document.querySelectorAll('.size-slider__item');
// var width = document.querySelector('.size-slider__item').clientWidth;

// for (var n = 0; n < slides.length; n++) {
// 	// let width = document.querySelector('.filling-slider__list').clientWidth / 3;
// 	slides[n].onclick = function() {
// 		if (count >= 0 && count < slides.length -1 ) {
// 			count++;
// 		} else {
// 			count = 0;
// 		}
// 		for (var i = 0; i < slides.length; i++) {
// 			slides[i].style.transform = 'translateX(-' + width*count + 'px)';
// 		}
// 		console.log(width);
// 	}
// }

var count = 0;
var slides = document.querySelectorAll('.reviews-slider__item');
var width = document.querySelector('.reviews-slider__window').clientWidth;

	function createPoints() {
		for (var l = 0; l < slides.length; l++) {
			var point = document.createElement('span');
			point.classList.add('slider-points__point');
			document.querySelector('.reviews-slider__points').appendChild(point);
		
			var points = document.querySelector('.reviews-slider__points').querySelectorAll('.slider-points__point');
		points[count].style.background = 'var(--pink)';
		
		}
	}

	createPoints();
	var count2 = 0;
	function scrollPoints() {
	
var points = document.querySelector('.reviews-slider__points').querySelectorAll('.slider-points__point');
		
		
for (let j = 0; j < points.length; j++) {
	points[j].style.background = '#ddd';
}

if (count == 0) {
	count2 = 0;
	for (let k = 0; k < points.length; k++) {
		points[k].style.transform = 'translate(0)';
	}
}

if (count === slides.length - 1) {
	points[points.length - 1].style.background = 'var(--pink)';
	
} else if (count > 3) {
	count2++;
	for (let k = 0; k < points.length; k++) {
		points[k].style.transform = 'translate(-' + 10*count2 + 'px)';
		console.log(count2)
	}
	points[count].style.background = 'var(--pink)';
	console.log(count2)
} else {
	points[count].style.background = 'var(--pink)';
	console.log(count2)
		}

}

for (var n = 0; n < slides.length; n++) {



	slides[n].onclick = function() {
		if (count >= 0 && count < slides.length -1 ) {
			count++;
		} else {
			count = 0;
			
		}
		for (var i = 0; i < slides.length; i++) {
			
			slides[i].style.transform = 'translateX(-' + width*count + 'px)';;
		}
	
		scrollPoints();

	}
}

document.querySelector('.reviews-slider__next').onclick = function() {
	if (count >= 0 && count < slides.length -1 ) {
		count++;
	} else {
		count = 0;
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.transform = 'translateX(-' + width*count + 'px)';
	}
	
}

document.querySelector('.reviews-slider__prev').onclick = function() {
	if (count > 0) {
		count--;
	} else {
		count = 0;
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.transform = 'translateX(-' + width * count + 'px)';
	}
}