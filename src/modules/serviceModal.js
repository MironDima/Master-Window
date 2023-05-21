const serviceModal = () => {
	const servicesModal = document.querySelector('.services-modal');
	const overlayModal = document.querySelector('.overlay-service');
	const btnService = document.querySelectorAll('.service-button');

	btnService.forEach(btn => {
		btn.addEventListener('click', () => {
			overlayModal.style.display = 'block';
			servicesModal.style.display = 'block';
		})
	})

	servicesModal.addEventListener('click', (e) => {
		if (e.target.closest('.services-modal__close')) {
			overlayModal.style.display = 'none';
			servicesModal.style.display = 'none';
		}
	})
	overlayModal.addEventListener('click', () => {
		overlayModal.style.display = 'none';
		servicesModal.style.display = 'none';
	})
}
export default serviceModal