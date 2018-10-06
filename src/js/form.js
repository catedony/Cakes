// order-form

function makeChoice (obj, target, selfParent) {
	const valueContainer = obj.valueContainer;
	const input = obj.formField;
	for (let i = 0; i < target.length; i++) {
		target[i].addEventListener('click', function () {
			let parent;
			selfParent ? parent = this : parent = this.parentElement;
			const value = parent.querySelector(valueContainer).innerHTML;
			input.value = value;
		});
	}
}

makeChoice(filling, filling.choiceBtn);

document.documentElement.clientWidth > decor.breakpoint ? makeChoice(decor, decor.slides, true) : makeChoice(decor, decor.choiceBtn); /* selfParent - true означает, что когда выбор украшений передается в форму заказа по клику на элемент, не нужно переходить на уровень родителя, чтобы переключиться в valueContainer, т.к. сам элемент и есть родитель */

document.documentElement.clientWidth > size.breakpoint ? makeChoice(size, size.images) : makeChoice(size, size.choiceBtn);
