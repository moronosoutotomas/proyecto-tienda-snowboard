// Mini-script para el menú hamburguesa

document.querySelector('.menu-icon').addEventListener('click', function () {
	this.classList.toggle('active');
	document.querySelector('.menu').classList.toggle('active');
});
