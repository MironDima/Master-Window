const callback = () => {
	const headerModal = document.querySelector('.header-modal');
	const overlayModal = document.querySelector('.overlay');

	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('btn-warning')) {
			overlayModal.style.display = 'block';
			headerModal.style.display = 'block';
		}
	})

	headerModal.addEventListener('click', (e) => {
			if(!e.target.closest('.header-modal') || e.target.closest('.header-modal__close')) {
			overlayModal.style.display = 'none';
			headerModal.style.display = 'none';
			}
	})


}
export default callback