const callback = () => {
	const headerModal = document.querySelector('.header-modal');
	const overlayModal = document.querySelector('.overlay');
	const modalCloseBtn = document.querySelector('.header-modal__close');
	console.log(modalCloseBtn);

	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('btn-warning')) {
			overlayModal.style.display = 'block';
			headerModal.style.display = 'block';
		}
	})

	overlayModal.addEventListener('click', (e) => {
			if(!e.target.closest('.header-modal') || e.target.closest('.header-modal__close')) {
			overlayModal.style.display = 'none';
			headerModal.style.display = 'none';
			}
	})


}
export default callback